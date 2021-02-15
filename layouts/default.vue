<template>
    <div :class="$style.container">
        <app-header/>
        <Nuxt/>
    </div>
</template>

<script>
  import AppHeader from '~/components/header/AppHeader'

  export default {
    name: 'LayoutDefault',
    components: {
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
