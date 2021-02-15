<template>
    <header :class="$style.header">
        <div :class="$style['header-container']">
            <div :class="$style.logo">
                <svg-icon name="logo" width="170" height="48"/>
            </div>

            <div :class="$style.label">World's first affordable airsharing</div>

            <div :class="$style.controls">
                <div :class="[$style.control,$style.theme]">
                    <svg-icon name="moon" width="24" height="24"/>
                    <span :class="$style['theme-text']">Night mod</span>
                </div>

                <div :class="$style.control">
                    <svg-icon name="messages" width="24" height="24"/>
                </div>

                <div :class="$style.control">
                    <svg-icon name="bell" width="24" height="24"/>
                </div>
            </div>

            <app-user/>
        </div>
    </header>
</template>

<script>
  import AppUser from './AppUser'

  export default {
    name: 'Header',
    components: {
      AppUser,
    },
  }
</script>

<style module lang="scss">
    .header {
        margin-bottom: 40px;

        @media (max-width: 767px) {
            margin-bottom: 8px;
        }
    }

    .header-container {
        display: flex;
        align-items: center;
    }

    .text {
        color: $grey;
    }

    .label {
        composes: text;
        width: 41%;

        @media (max-width: 767px) {
            display: none;
        }
    }

    .logo {
        width: 18%;
    }

    .controls {
        display: flex;
        width: 23%;
    }

    .control {
        display: flex;
        align-items: center;
        padding: 0 12px;
    }

    .theme {
        flex-grow: 1;

        @media (max-width: 767px) {
            flex-grow: 0;
        }
    }

    .theme-text {
        composes: text;
        margin-left: 16px;

        @media (max-width: 767px) {
            display: none;
        }
    }
</style>
