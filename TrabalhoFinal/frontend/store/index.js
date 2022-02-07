import { createStore } from 'vuex';
import Axios from 'axios';

const state = {
    reservas: [],
    acoes: [],


}
const getters = {}
const mutations = {
    setReservas(state, reservas) {
        state.reservas = reservas;
    },
    setAcoes(state, acoes){
        state.acoes = acoes;
    }

}

const actions = {
    async getReservas({ commit }) {
        try {
            const response = await axios.get('/reservas')
            commit('setReservas', response.data)
        } catch(error) {
            console.log(error);
        }
    },
    async getAcoes({ commit }){
        try {
            const response = await axios.get('/reservas')
            commit('setReservas', response.data)
        } catch(error) {
            console.log(error);
        }
    },
}

export const store = createStore({
    stage: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});

export const axios = Axios.create({
    baseURL: 'http://localhost:2222/',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }
})