<template>
    <div :class="$style.controls">
        <theme-toggle :class="$style.control"/>

        <div :class="$style.control">
            <svg-icon name="messages" width="24" height="24"/>
        </div>

        <div :class="$style.control">
            <svg-icon name="bell" width="24" height="24"/>
        </div>
    </div>
</template>

<script>
    import ThemeToggle from '~/components/header/ThemeToggle';

    export default {
        name: 'User',
        components: { ThemeToggle },
    };
</script>

<style module lang="scss">
    .controls {
        display: flex;
        width: 23%;

        @media (max-width: $mobile) {
            width: auto;
        }
    }

    .control {
        display: flex;
        align-items: center;
        padding: 0 12px;

        svg {
            @media (max-width: $mobile) {
                width: 20px;
                height: 20px;
            }
        }

        @media (max-width: $mobile) {
            padding: 0 8px;
        }
    }
</style>
