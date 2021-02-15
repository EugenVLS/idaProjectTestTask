<template>
    <nuxt-link :to="link" :class="$style.card">
        <img :class="$style.image" src="~/assets/img/card.png" alt="card preview image">

        <div>
            <h3 :class="$style.title">
                XR-74 «Cooper»
            </h3>

            <p :class="$style.desc">
                Brief description of the project,
                in a few lines.
            </p>

            <div :class="$style.price">
                1 278 $/h
            </div>
        </div>
    </nuxt-link>
</template>

<script>
  export default {
    name: 'CardPreview',
    props: {
      link: {
        type: String,
        default: '/detail',
      },
    },
  }
</script>

<style module lang="scss">
    .card {
        display: flex;
        padding: 22px 30px;
        background-color: $white;
        border-radius: 32px;
        text-decoration: none;
        border: 2px solid transparent;
        transition: border-color $animation_time ease;
        outline: none;

        &:hover,
        &:focus {
            border: 2px solid $blue;
        }

        @media (max-width: $mobile) {
            padding: 18px;
            border-radius: 24px;
        }
    }

    .image {
        width: 88px;
        height: 88px;
        border-radius: 24px;
        margin-right: 24px;

        @media (max-width: $mobile) {
            margin-right: 20px;
        }
    }

    .title {
        font-weight: bold;
        line-height: 1;
        margin-top: 16px;
        margin-bottom: 12px;
        color: $black;
    }

    .desc {
        font-size: 12px;
        color: $grey;
        margin-bottom: 16px;
    }

    .price {
        font-size: 14px;
        font-weight: bold;
        color: $pink;
    }
</style>
