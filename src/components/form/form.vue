<template>
	<div>
		<form
			:class="['wd-form', inline ? 'wd-form-inline' : 'wd-form-horizontal']"
			v-bind="attrs"
		>
			<slot></slot>
		</form>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	provide,
	reactive,
	toRefs,
	watch
} from "vue"
import {
	wdFormKey,
	wdFormEvents,
	WdFormItemContext as FormItemCtx,
	ValidateFieldCallback
} from "./props"
import FieldErrorList from "async-validator"
import mitt from "mitt"
import { useAttrs } from "../../hooks"

interface Callback {
	(isValid?: boolean, invalidFields?: FieldErrorList): void
}
export default defineComponent({
	name: "wd-form",
	inheritAttrs: false,
	props: {
		modelValue: {
			type: Object
		},
		labelAlign: String,
		labelWidth: String,
		labelPosition: {
			type: String,
			default: "left"
		}, // top、left
		inline: Boolean,
		inlineMessage: String,
		showMessage: Boolean,
		size: String,
		disabled: Boolean,
		readonly: Boolean,
		model: Object,
		rules: Object,
		validateOnRuleChange: Boolean,
		colon: {
			// 是否显示冒号
			type: Boolean,
			default: true
		},
		showLabel: {
			// 是否显示label
			type: Boolean,
			default: true
		}
	},
	emits: ["validate"],
	setup(props, { emit }) {
		const formMitt = mitt()
		const fields: FormItemCtx[] = []

		const attrs = useAttrs()

		// 监测rules的变化
		watch(
			() => props.rules,
			() => {
				fields.forEach((field) => {
					field.removeValidateEvents()
					field.addValidateEvents()
				})

				if (props.validateOnRuleChange) {
					validate(() => ({}))
				}
			}
		)

		formMitt.on<FormItemCtx>(wdFormEvents.addField, (field) => {
			if (field) {
				fields.push(field)
			}
		})

		formMitt.on<FormItemCtx>(wdFormEvents.removeField, (field) => {
			if (field.prop) {
				fields.splice(fields.indexOf(field), 1)
			}
		})

		// form的验证，比如点击提交按钮时验证
		const validate = (callback: Callback) => {
			console.log("form validate")
			if (!props.model) {
				console.warn("[Warn][Form]model is required for validate to work!")
				return
			}

			let promise: Promise<boolean> | undefined
			if (typeof callback !== "function") {
				promise = new Promise((resolve, reject) => {
					callback = function (valid, invalidFields) {
						if (valid) {
							resolve(true)
						} else {
							reject(invalidFields)
						}
					}
				})
			}

			if (fields.length === 0) {
				callback(true)
			}
			let valid = true
			let count = 0
			let invalidFields: any = {}
			for (const field of fields) {
				field.validate("", (message, field) => {
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

		// const validateField = (props: string|string[], cb: ValidateFieldCallback) => {
		//     props = [].concat(props)
		//     const fds = fields.filter(field => props.indexOf(field.prop) !== -1)
		//     if (!fields.length) {
		//         console.warn('[Element Warn]please pass correct props!')
		//         return
		//     }

		//     fds.forEach(field => {
		//         field.validate('', cb)
		//     })
		// }

		provide(wdFormKey, reactive({ ...toRefs(props), formMitt, emit }))

		return {
			validate,
			attrs
		}
	}
})
</script>
<style lang="less">
@import url(./style/index);
</style>
