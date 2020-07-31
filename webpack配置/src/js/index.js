
import Vue from 'vue';
import Vuex, { mapState } from 'vuex';
Vue.use(Vuex);
import App from '../components/App.vue';
/* import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {router} from './router.js'; */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import '../css/global.css';


   const store = new Vuex.Store({
    state:{
        count:7
    },
    mutations:{
        add(state){
            state.count++;
        },
        sub(state){
            state.count--;
        }
    }
})
const vm = new Vue({
    el:'#app',
    render:c=>c(App),
    store,
    computed:mapState(['count'])
    /* router:router */
});



