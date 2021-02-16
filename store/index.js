import { getVehicles } from '~/api/request';

export const state = () => ( {
    items: [],
} );

export const getters = {
    catalogItems: state => state.items,
};

export const mutations = {
    setCatalogItems( state, items ) {
        state.items = items;
    },
};

export const actions = {
    async getItems( { commit } ) {
        return getVehicles()
            .then( res => {
                return res;
            } )
            .then( items => {
                commit( 'setCatalogItems', items );
            } )
            .catch( e => {
                console.log( e );
            } );
    },
    async getItem( { state, commit, dispatch }, { id } ) {
        if ( !state.items.length ) {
            await dispatch( 'getItems' );
        }

        const item = state.items.find( item => item.id === id );
        return item;
    },
};
