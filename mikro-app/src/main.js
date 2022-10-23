import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router/router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBook, faGlobe, faTrophy, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBook, faGlobe, faTrophy, faGraduationCap)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
