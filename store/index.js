import { getVehicles } from '~/api/request'

export const state = () => ({
    items: [],
})

export const getters = {
    catalogItems: state => state.items,

}

export const mutations = {
    setCatalogItems(state, items) {
        state.items = items;
    },
}

export const actions = {
    async getItems({ state, commit }) {
        if ( state.items.length ) {
            return;
        }

        const items = await getVehicles();

        commit('setCatalogItems', items);
    },
    async getItem({ state, commit, dispatch }, { id }) {
        if ( !state.items.length ) {
            await dispatch('getItems');
        }

        const item = state.items.find(item => item.id === id);
        return item;
    },
}
