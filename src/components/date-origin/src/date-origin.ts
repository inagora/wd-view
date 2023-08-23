import { PropType, ExtractPropTypes } from 'vue';

import { isString } from '@vue/shared';
export const dateProps = {
	type: {
		type: String,
		default: '',
	},
	modelValue: {
		type: [String, Number] as PropType<string | number>,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	size: {
		type: [Number, String] as PropType<number | string>,
		default: '',
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	// placeholder: {
	// 	type: String,
	// 	default: '',
	// },
	// startPlaceholder: {
	// 	type: String,
	// 	default: '',
	// },
	// endPlaceholder: {
	// 	type: String,
	// 	default: '',
	// },

	defaultValue: {
		// type: definePropType<SingleOrRange<Date>>([Date, Array]),
		// type: String,
		value: '',
	},
	format: {
		type: String,
		value: '',
	},
	valueFormat: {
		type: String,
		value: '',
	},
} as const;
export type DateProps = Partial<ExtractPropTypes<typeof dateProps>>;
export const dateEmits = {
	'update:modelValue': (value: string) => isString(value),
	input: (value: string) => isString(value),
	change: (value: string) => isString(value),
	focus: (e: FocusEvent) => e instanceof FocusEvent,
	blur: (e: FocusEvent) => e instanceof FocusEvent,
	clear: () => true,
};
