//
import { App } from "vue"
import Space from "./space.vue"

Space.install = (app: App) => {
	app.component(Space.name, Space)
}

export default Space
