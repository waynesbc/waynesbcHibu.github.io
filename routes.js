import Home from './components/Home.vue';
import About from './components/About.vue';
import AppList from './components/AppList.vue';
import Policy from './components/Policy.vue';



export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/applist', component: AppList },
    { path: '/policy', component: Policy }
]