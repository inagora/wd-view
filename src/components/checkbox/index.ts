//
import { App } from "vue"
import Checkbox from "./checkbox.vue"
import CheckboxGroup from "./checkbox-group.vue"

Checkbox.install = (app: App) => {
	app.component(Checkbox.name, Checkbox)
	app.component(CheckboxGroup.name, CheckboxGroup)
}

export default Checkbox
