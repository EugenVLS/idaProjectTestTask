<template>
    <header :class="$style.header">
        <div :class="$style['header-container']">
            <nuxt-link to="/" :class="$style.logo">
                <svg-icon v-if="$colorMode.preference === 'dark'" name="logo-dark" width="170" height="48"/>
                <svg-icon v-else name="logo" width="170" height="48"/>
            </nuxt-link>

            <div :class="$style.label">World's first affordable airsharing</div>

            <controls/>

            <user/>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';
    import User     from '~/components/header/User';
    import Controls from '~/components/header/Controls';

    export default {
        name: 'Header',
        components: {
            User,
            Controls,
        },
        computed: {
            ...mapGetters(['appTheme']),
        }
    };
</script>

<style module lang="scss">
    .header {
        margin-bottom: 40px;

        @media (max-width: $mobile) {
            margin-bottom: 8px;
        }
    }

    .header-container {
        display: flex;
        align-items: center;

        @media (max-width: $mobile) {
            padding: 12px;
        }
    }

    .label {
        @include color(text-primary);
        width: 41%;

        @media (max-width: $mobile) {
            display: none;
        }
    }

    .logo {
        width: 18%;

        svg {
            @media (max-width: $mobile) {
                width: 113px;
                height: 32px;
            }
        }

        @media (max-width: $mobile) {
            width: auto;
            flex-grow: 1;
        }
    }
</style>
