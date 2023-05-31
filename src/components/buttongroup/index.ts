//
import type { App } from "vue"
import ButtonGroup from "../button/buttongroup.vue"

ButtonGroup.install = (app: App) => {
	app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
