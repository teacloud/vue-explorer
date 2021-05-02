import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// Tailwind styling
import './index.css';
// PrimeVue Styling 
import PrimeVue from 'primevue/config';
import TabMenu from 'primevue/tabmenu';
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('TabMenu', TabMenu);
app.component('Toolbar', Toolbar);

app.use(store).use(router);
app.mount("#app");
