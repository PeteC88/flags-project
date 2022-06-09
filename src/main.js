import { createApp } from 'vue'
import router from './router.js';

//import fontawesome library and the icons we need
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(faMoon);
library.add(fas);
library.add(far);
dom.watch();




//import the store in order to use it
import store from './store/index.js';


//main entry point of the app
import App from './App.vue'


//import the components that will be used in differents places of the app
import BaseButton from "./components/UI/BaseButton.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import NotFound from "./pages/NotFound.vue"

const app = createApp(App);


app.use(router)
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("not-found", NotFound);


app.mount('#app');
