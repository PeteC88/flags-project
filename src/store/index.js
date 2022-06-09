import { createStore } from 'vuex'
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default createStore({
    namespaced: true,
    state() {
        return {
            isDark: false,
            nations: [
                /* {
                    id: "n1",
                    name: "Italy",
                    population: "60 millions",
                    region: "Europe",
                    capital: "Rome"
                },
                {
                    id: "n2",
                    name: "France",
                    population: "80 millions",
                    region: "Europe",
                    capital: "Paris"
                }, */
            ]
        }
    },
    mutations,
    actions,
    getters
});