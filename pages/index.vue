<template>
    <catalog/>
</template>

<script>
    import Catalog        from '~/components/catalog/Catalog'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Catalog,
        },
        async asyncData ({ store, error }) {
            try {
                await store.dispatch('getItems')
            } catch ( e ) {
                console.log( e );
                error( e );
            }
        },
        methods: {
            ...mapActions(['getItems']),
        },
    }
</script>
