import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Structure from '../components/Structure.vue';
import Dig from '../components/functions/Dig.vue';
import Hot from '../components/functions/Hot.vue';
import Deal from '../components/functions/Deal.vue';
import Home from '../components/functions/Home.vue';

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        // { path: '/', component: Structure },
        { path: '/', component: Dig },
        { path: '/Hot', component: Hot },
        { path: '/Deal', component: Deal },
        { path: '/Home', component: Home },
    ]
})

export default router;