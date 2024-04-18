import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import { naive } from "./developer-ui/addons/naive-components/naive-components"

/* Global components & their props */
import { globalComponents } from "./developer-ui/addons/globalComponents"
import { propsToClasses } from "./developer-ui/addons/custom-props/propsToClasses"

/* control console log */
import { customLog } from "./developer-ui/addons/global/helpers/customConsoleLog"

const app = createApp(App)

// import _ from 'lodash';
// window._ = _;
window.console.log = customLog

/* App & global components*/
for (let key in globalComponents) {
  app.component(key, globalComponents[key])
}

/* Vue Router */
app.use(createPinia())
app.use(router)

app.use(propsToClasses)
app.use(naive)

app.mount("#app")
