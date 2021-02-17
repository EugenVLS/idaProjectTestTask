<template>
    <card-detail v-bind="value"/>
</template>

<script>
    import { mapActions } from 'vuex'
    import CardDetail     from '~/components/card/CardDetail'

    export default {
        components: { CardDetail },
        async asyncData ({ store, params, error }) {
            try {
                const value = await store.dispatch('getItem', { id: params.id })

                return { value };
            } catch ( e ) {
                console.log(e)
                error(e)
            }
        },
        methods: {
            ...mapActions(['getItem']),
        },
    }
</script>
