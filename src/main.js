import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store.js';

const app = createApp(App)
app.use(store).mount('#app')

// import axios from 'axios'

// axios.get('http://localhost:1337/api/restaurants').then(response => {
//   console.log(response);
// });

