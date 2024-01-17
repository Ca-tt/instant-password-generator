// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { naive } from './addons/naive-components/naive-components';

/* Global components & their props */
import { globalComponents } from './addons/globalComponents';
import { propsToClasses } from './addons/custom-props/propsToClasses';

/* control console log */
import { customLog } from './addons/global/helpers/customConsoleLog';


const app = createApp(App)

// import _ from 'lodash';
// window._ = _;
window.console.log = customLog;


/* App & global components*/
for (let key in globalComponents) {
    app.component(key, globalComponents[key]);
}

/* Vue Router */
app.use(createPinia())
app.use(router)

app.use(propsToClasses);
app.use(naive);


app.mount('#app')



