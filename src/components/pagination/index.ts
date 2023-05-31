//
import { App } from "vue"
import WdPagination from "./pagination.vue"
import WdSelect from "../select/index"
WdPagination.install = (app: App) => {
	app.component(WdPagination.name, WdPagination)
	app.component((WdSelect as any).name, WdSelect)
}

export default WdPagination
