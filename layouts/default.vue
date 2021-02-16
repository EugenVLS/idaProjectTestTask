<template>
    <div :class="$style.container + ' theme--dark'">
        <app-header/>
        <Nuxt/>
        <add-new-dialog/>
    </div>
</template>

<script>
  import AppHeader    from '~/components/header/AppHeader'
  import AddNewDialog from '~/components/dialogs/AddNewDialog'

  export default {
    name: 'LayoutDefault',
    components: {
      AddNewDialog,
      AppHeader,
    },
  }
</script>

<style module lang="scss">
    .container {
        max-width: 1920px;
        margin: 0 auto;
        padding: 48px 64px;

        @media (max-width: $mobile) {
            padding: 20px 0;
        }
    }
</style>
