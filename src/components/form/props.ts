import type { Emitter } from "mitt";
import type FieldErrorList from "async-validator";

export interface WdFormProps {
  labelWidth: string;
  labelAlign: string;
  size: string;
  disabled: boolean;
  model: object;
  formMitt: Emitter;
}

export interface WdFormItemProps {
  labelWidth: string;
  labelAlign: string;
  size: string;
  disabled: boolean;
  required: boolean;
  prop: string;
  formMitt: Emitter;
}

export const wdFormKey: string = "wdForm";
export const wdFormItemKey: string = "wdFormItem";

export const wdFormEvents = {
  addField: "wd.form.addField",
  removeField: "wd.form.removeField",
} as const;

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: FieldErrorList): void;
}
export interface WdFormContext {
  registerLabelWidth(width: number, oldWidth: number): void;
  deregisterLabelWidth(width: number): void;
  autoLabelWidth: string | undefined;
  formMitt: Emitter;
  emit: (evt: string, ...args: any[]) => void;
  labelSuffix: string;
  inline?: boolean;
  model?: Record<string, unknown>;
  size?: string;
  showMessage?: boolean;
  labelPosition?: string;
  labelWidth?: string;
  rules?: Record<string, unknown>;
  statusIcon?: boolean;
  hideRequiredAsterisk?: boolean;
  disabled?: boolean;
  labelAlign: string;
  colon: boolean;
}

export interface WdFormItemContext {
  prop?: string;
  formItemMitt: Emitter;
  validateState: string;
  validate(trigger?: string, callback?: ValidateFieldCallback): void;
  updateComputedLabelWidth(width: number): void;
  addValidateEvents(): void;
  removeValidateEvents(): void;
  resetField(): void;
  clearValidate(): void;
  size: string;
  disabled: boolean;
}
