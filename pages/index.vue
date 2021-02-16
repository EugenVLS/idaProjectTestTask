<template>
    <catalog/>
</template>

<script>
    import Catalog     from '~/components/catalog/Catalog';
    import { mapActions } from 'vuex';

    export default {
        components: {
            Catalog,
        },
        async asyncData( { store } ) {
            await store.dispatch( 'getItems' );
        },
        methods: {
            ...mapActions( [ 'getItems' ] ),
        },
    };
</script>
