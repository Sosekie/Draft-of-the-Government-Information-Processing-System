import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import Structure from '../components/Structure.vue';
import Dig from '../components/functions/Dig.vue';
import Hot from '../components/functions/Hot.vue';
import Deal from '../components/functions/Deal.vue';
import Home from '../components/functions/Home.vue';
import Search from '../components/functions/Search.vue';
import Deal1 from '../components/functions/dealpage/Deal1.vue';
import Deal2 from '../components/functions/dealpage/Deal2.vue';

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        // { path: '/', component: Structure },
        { path: '/Search', component: Search },
        { path: '/', component: Dig },
        { path: '/Hot', component: Hot },
        {
            path: '/Deal',
            component: Deal,
            children: [
                { path: '', component: Deal1 },
                {
                    path: ':deal2',
                    component: Deal2,
                }
            ]
        },
        { path: '/Home', component: Home },
    ]
})

export default router;