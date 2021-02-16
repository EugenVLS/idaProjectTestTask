<template>
    <div :class="[$style.control,$style.theme]">
        <svg-icon name="moon" width="24" height="24"/>
        <span :class="$style.text">Night mod</span>
    </div>
</template>

<script>
    export default {
        name: 'ThemeToggle',
    };
</script>

<style module lang="scss">
    .theme {
        flex-grow: 1;

        @media (max-width: $mobile) {
            flex-grow: 0;
        }
    }

    .text {
        color: $grey;
        margin-left: 16px;

        @media (max-width: $mobile) {
            display: none;
        }
    }
</style>
