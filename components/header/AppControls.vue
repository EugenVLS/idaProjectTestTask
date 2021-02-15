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
    name: 'AppUser',
  }
</script>

<style module lang="scss">
    .user {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 18%;
    }

    .text {
        color: $black;
        font-weight: bold;

        @media (max-width: 767px) {
            display: none;
        }
    }

    .avatar {
        border-radius: 50%;
        margin-left: 16px;
    }
</style>
