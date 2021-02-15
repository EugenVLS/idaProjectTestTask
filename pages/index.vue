<template>
    <app-catalog/>
</template>

<script>
  import AppCatalog from '~/components/catalog/AppCatalog'
  import { mapActions } from 'vuex'

  export default {
    components: {
      AppCatalog,
    },
    async asyncData ( { store } ) {
      await store.dispatch( 'getItems' );
    },
    methods: {
      ...mapActions(['getItems']),
    },
  }
</script>
