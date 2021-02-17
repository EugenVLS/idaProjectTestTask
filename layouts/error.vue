<template>
    <div :class="$style['error-container']">
        <div :class="$style.title">
            An error has occurred
        </div>

        <div :class="$style.text">
            Please refresh the page
        </div>

        <a :href="$route.path" class="button">
            Reload page
        </a>
    </div>
</template>

<script>
    export default {
        name: 'NuxtError',
        props: {
            error: {
                type: Object,
                default: null
            },
        },
    }
</script>

<style module lang="scss">
    .error-container {
        flex-grow: 1;
        padding: 56px 64px;
        border-radius: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        @include bg-color(bg-secondary);

        @media (max-width: $mobile) {
            padding: 24px 16px;
            border-radius: 24px;
        }
    }

    .title {
        font-size: 40px;
        font-weight: bold;
        @include color(title);
        margin-bottom: 24px;

        @media (max-width: $mobile) {
            font-size: 24px;
            margin-bottom: 16px;
        }
    }

    .text {
        font-size: 14px;
        @include color(text-primary);
        margin-bottom: 40px;

        @media (max-width: $mobile) {
            margin-bottom: 32px;
        }
    }
</style>
