<template>
    <nuxt-link :to="link" :class="$style.card">
        <img :class="$style.image" :src="preview" alt="card preview image">

        <div>
            <h3 :class="$style.title">
                {{ name }}
            </h3>

            <p :class="$style.desc">
                {{ description }}
            </p>

            <div :class="$style.price">
                {{ rent }} $/h
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
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            preview: {
                type: String,
                required: true,
            },
            rent: {
                type: Number,
                required: true,
            },
        },
    };
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
