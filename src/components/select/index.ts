//
import { App } from "vue"
import WdSelect from "./select.vue"
import WdPopper from "../popper/src/index.vue"

WdSelect.install = (app: App) => {
	app.component(WdSelect.name, WdSelect)
	app.component(WdPopper.name, WdPopper)
}

export default WdSelect
