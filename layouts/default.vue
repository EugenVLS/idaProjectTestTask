<template>
    <div class="container">
        <app-header/>
        <Nuxt/>
        <add-new-dialog/>
    </div>
</template>

<script>
    import AppHeader      from '~/components/header/AppHeader'
    import AddNewDialog   from '~/components/dialogs/AddNewDialog'

    export default {
        name: 'LayoutDefault',
        components: {
            AddNewDialog,
            AppHeader,
        },
    }
</script>
