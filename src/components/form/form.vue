<template>
    <div>
        <form class="wd-form wd-form-horizontal">
            <slot></slot>
        </form>
    </div>
</template> 

<script lang="ts">
/**
 * 1、form以及foritem组件以及基本属性
 * 2、各个组件的整合
 * 3、子组件基本属性
 * 
 * todo
 * 1、子组件属性
 * 2、表单验证
 * 
 * seperator
 * offset 
 * layout: label的align属性
 * 
 * 原生表单回车触发提交问题
 * 
 * 每一个item增加错误message
 * 
 * 
 * mitt、async-validator
 */
import {defineComponent, onMounted, provide, reactive, toRefs, watch} from 'vue';
import {wdFormKey, wdFormEvents, WdFormItemContext as FormItemCtx, ValidateFieldCallback} from './props';
import FieldErrorList from 'async-validator';
import mitt from 'mitt'

interface Callback {
    (isValid?: boolean, invalidFields?: FieldErrorList): void
}
export default defineComponent({
    name: 'wd-form',
    props: {
        modelValue: {
            type: Object
        },
        labelAlign: String,
        labelWidth: String,
        inline: Boolean,
        inlineMessage: String,
        showMessage: Boolean,
        size: String,
        disabled: Boolean,
        model: Object,
        rules: Object,
        validateOnRuleChange: Boolean
    },
    emits: ['validate'],
    setup(props, {emit}) {
        const formMitt = mitt()
        const fields: FormItemCtx[] = []

        watch(
            () => props.rules,
            () => {
                fields.forEach(field => {
                    field.removeValidateEvents()
                    field.addValidateEvents()
                })

                if (props.validateOnRuleChange) {
                    validate(() => ({}))
                }
            },
        )

        formMitt.on<FormItemCtx>(wdFormEvents.addField, field => {
            if (field) {
                fields.push(field)
            }
        })

        formMitt.on<FormItemCtx>(wdFormEvents.removeField, field => {
            if (field.prop) {
                fields.splice(fields.indexOf(field), 1)
            }
        })

        const validate = (callback: Callback) => {
            console.log('form validate');
            if (!props.model) {
                console.warn(
                    '[Warn][Form]model is required for validate to work!',
                )
                return
            }

            let promise: Promise<boolean> | undefined
            if (typeof callback !== 'function') {
                promise = new Promise((resolve, reject) => {
                callback = function(valid, invalidFields) {
                    if (valid) {
                        resolve(true)
                    } else {
                        reject(invalidFields)
                    }
                }
                })
            }

            console.log(fields);
            if (fields.length === 0) {
                callback(true)
            }
            let valid = true
            let count = 0
            let invalidFields: any = {}
            for (const field of fields) {
                field.validate('', (message, field) => {
                    if (message) {
                        valid = false
                    }
                    invalidFields = { ...invalidFields, ...field }
                    if (++count === fields.length) {
                        callback(valid, invalidFields)
                    }
                })
            }
            return promise
        }

        const validateField = (props: string|string[], cb: ValidateFieldCallback) => {
            props = [].concat(props)
            const fds = fields.filter(field => props.indexOf(field.prop) !== -1)
            if (!fields.length) {
                console.warn('[Element Warn]please pass correct props!')
                return
            }

            fds.forEach(field => {
                field.validate('', cb)
            })
        }

        provide(wdFormKey, reactive({...toRefs(props), formMitt, validateField, emit}));

        onMounted(() => {
            // validate(isValidate => {
            //     console.log(isValidate);
            // });
        })

        return {
            validate
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>