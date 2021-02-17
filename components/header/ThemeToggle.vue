<template>
    <button type="button" :class="[$style.control,$style.theme]"
            @click="setTheme">

        <template v-if="$colorMode.preference === 'dark'">
            <svg-icon name="sun" width="24" height="24"/>
            <span :class="$style.text">Day mod</span>
        </template>

        <template v-else>
            <svg-icon name="moon" width="24" height="24"/>
            <span :class="$style.text">Night mod</span>
        </template>

    </button>
</template>

<script>
    export default {
        name: 'ThemeToggle',
        methods: {
            setTheme () {
                if ( this.$colorMode.preference === 'light' ) {
                    this.$colorMode.preference = 'dark';
                } else {
                    this.$colorMode.preference = 'light';
                }
            },
        },
    }
</script>

<style module lang="scss">
    .theme {
        flex-grow: 1;
        border: none;
        background: none;
        padding: 0;
        transition: opacity $animation_time ease;
        outline: none;
        cursor: pointer;

        &:hover,
        &:focus {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.9;
        }

        @media (max-width: $mobile) {
            flex-grow: 0;
        }
    }

    .text {
        @include color(text-primary);
        margin-left: 16px;

        @media (max-width: $mobile) {
            display: none;
        }
    }
</style>
