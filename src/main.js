import { createApp } from 'vue'
import App from './App.vue'
import ProviderComponent from './components/ProviderComponent'
import NfsMainPage from './components/NfsMainPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', redirect: '/nfs'},
	{path: '/nfs', component: NfsMainPage},
	{path: '/provider/:providerId', component: ProviderComponent},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

createApp(App).use(router).mount('#app')
