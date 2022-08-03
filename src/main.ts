import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./registerServiceWorker";
import directives from "@/directives/index";
import router from "@/router/index";

const app = createApp(App);
const pinia = createPinia();

// register global directives
directives.forEach((directive) => {
    app.directive(directive.name, directive);
});

// // global store prop
// function SecretPiniaPlugin() {
//     return { secret: "the cake is a lie" };
// }
// pinia.use(SecretPiniaPlugin);

// // in another file
// const store = useStore()
// store.secret // 'the cake is a lie'

app.use(router).use(pinia).mount("#app");
