<template>
    <div 
        class="wd-form-item">
        <label 
            v-if="label"
            :style="labelStyle"
            class="wd-form-item-label">{{label}}</label>
        <slot></slot>
    </div>
</template> 

<script lang="ts">
declare type Nullable<T> = T | null;
import {computed, defineComponent, inject, provide, reactive, toRefs, ref, onBeforeUnmount, onMounted} from 'vue';
import {wdFormItemKey, WdFormProps, wdFormKey, ValidateFieldCallback, WdFormContext, wdFormEvents} from './props';
import AsyncValidator from 'async-validator';
import mitt from 'mitt';
export default defineComponent({
    name: 'wd-form-item',
    props: {
        label: String,
        labelWidth: String,
        required: Boolean,
        prop: String,
        rules: Object
    },
    setup(props) {
        let wdForm = inject(wdFormKey, {} as WdFormContext);
        const validateState = ref('')
        const validateMessage = ref('')
        const validateDisabled = ref(false)
        let labelStyle = computed(() => {
            let labelWidth = props.labelWidth || wdForm.labelWidth;
            let labelAlign = wdForm.labelAlign;
            return {
                width: labelWidth,
                align: labelAlign
            }
        });

        const formItemMitt = mitt();

        const fieldValue = computed(() => {
            const model = wdForm.model
            if (!model || !props.prop) {
                return
            }

            let path = props.prop
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.')
            }

            return getPropByPath(model, path, true).v
        })

        let initialValue = undefined

        const isRequired = computed(() => {
            let rules = getRules()
            let required = false

            if (rules && rules.length) {
                rules.every(rule => {
                if (rule.required) {
                    required = true
                    return false
                }
                return true
                })
            }
            return required
        })

        const validate = (trigger: string, callback: ValidateFieldCallback = null) => {
            validateDisabled.value = false
            const rules = getFilteredRule(trigger)
            if ((!rules || rules.length === 0) && props.required === undefined) {
                callback()
                return
            }
            validateState.value = 'validating'
            const descriptor = {}
            if (rules && rules.length > 0) {
                rules.forEach(rule => {
                delete rule.trigger
                })
            }
            descriptor[props.prop] = rules
            const validator = new AsyncValidator(descriptor)
            const model = {}
            model[props.prop] = fieldValue.value
            validator.validate(
                model,
                { firstFields: true },
                (errors, invalidFields: any) => {
                    validateState.value = !errors ? 'success' : 'error'
                    validateMessage.value = errors ? errors[0].message : ''
                    // callback(validateMessage.value, invalidFields)
                    wdForm.emit?.(
                        'validate',
                        props.prop,
                        !errors,
                        validateMessage.value || null,
                    )
                },
            )
        }

        const getRules = () => {
            const formRules = wdForm.rules
            const selfRules = props.rules
            const requiredRule =
                props.required !== undefined ? { required: !!props.required } : []

            const prop = getPropByPath(formRules, props.prop || '', false)
            const normalizedRule = formRules
                ? (prop.o[props.prop || ''] || prop.v)
                : []

            return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
        }
        const getFilteredRule = trigger => {
            const rules = getRules()

            return rules
                .filter(rule => {
                if (!rule.trigger || trigger === '') return true
                if (Array.isArray(rule.trigger)) {
                    return rule.trigger.indexOf(trigger) > -1
                } else {
                    return rule.trigger === trigger
                }
                })
                .map(rule => ({ ...rule }))
        }

        const onFieldBlur = () => {
            validate('blur')
        }

        const onFieldChange = () => {
            if (validateDisabled.value) {
                validateDisabled.value = false
                return
            }

            validate('change')
        }

        const addValidateEvents = () => {
            const rules = getRules()

            if (rules.length || props.required !== undefined) {
                formItemMitt.on('wd.form.blur', onFieldBlur)
                formItemMitt.on('wd.form.change', onFieldChange)
            }
        }
        const removeValidateEvents = () => {
            formItemMitt.off('wd.form.blur', onFieldBlur)
            formItemMitt.off('wd.form.change', onFieldChange)
        }

        const getValueByPath = (obj: any, paths = ''): unknown => {
            let ret: unknown = obj
            paths.split('.').map(path => {
                ret = ret?.[path]
            })
            return ret
        }

        const getPropByPath = (obj: any, path: string, strict: boolean): {
            o: unknown
            k: string
            v: Nullable<unknown>
        } => {
            let tempObj = obj
            path = path.replace(/\[(\w+)\]/g, '.$1')
            path = path.replace(/^\./, '')

            const keyArr = path.split('.')
            let i = 0
            for (i; i < keyArr.length - 1; i++) {
                if (!tempObj && !strict) break
                const key = keyArr[i]

                if (key in tempObj) {
                tempObj = tempObj[key]
                } else {
                if (strict) {
                    throw new Error('please transfer a valid prop path to form item!')
                }
                break
                }
            }
            return {
                o: tempObj,
                k: keyArr[i],
                v: tempObj?.[keyArr[i]],
            }
        }

        const wdFormItem = reactive({
            ...toRefs(props),
            validateState,
            removeValidateEvents,
            addValidateEvents,
            validate,
            formItemMitt
        });

        onMounted(() => {
            if (props.prop) {
                wdForm.formMitt?.emit(wdFormEvents.addField, wdFormItem)

                let value = fieldValue.value
                initialValue = Array.isArray(value)
                ? [...value] : value

                addValidateEvents()
            }
        })
        onBeforeUnmount(() => {
            wdForm.formMitt?.emit(wdFormEvents.removeField, wdFormItem)
        })

        // watch(
        //     () => props.error,
        //     val => {
        //         validateMessage.value = val
        //         validateState.value = val ? 'error' : ''
        //     }, {
        //         immediate: true,
        //     },
        // )
        
        provide(wdFormItemKey, wdFormItem);
        return {
            labelStyle,
            wdForm
        }
    }
});
</script>