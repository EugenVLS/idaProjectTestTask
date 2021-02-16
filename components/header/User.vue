<template>
    <div :class="$style.user">
        <div :class="$style.text">
            Bessie Cooper
        </div>
        <img :class="$style.avatar" src="~/assets/img/avatar.png" alt="avatar">
    </div>
</template>

<script>
    export default {
        name: 'User',
    };
</script>

<style module lang="scss">
    .user {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 18%;

        @media (max-width: $mobile) {
            width: auto;
        }
    }

    .text {
        color: $black;
        font-weight: bold;

        @media (max-width: $mobile) {
            display: none;
        }
    }

    .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: 16px;

        @media (max-width: $mobile) {
            width: 32px;
            height: 32px;
        }
    }
</style>
