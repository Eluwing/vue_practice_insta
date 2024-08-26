import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
// グローバルでライブラリー設定
app.config.globalProperties.emitter = emitter;

app.mount('#app')
