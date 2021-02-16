<template>
    <div :class="$style.detail">
        <img :class="$style.image" :src="image" alt="card detail image">

        <div :class="$style.desc">
            <h1 :class="$style.title">
                {{ name }}
            </h1>

            <div :class="$style.tabs">
                <div :class="$style['tab-links']">
                    <nuxt-link :to="`/detail/${id}/spec`" :class="$style.tab">
                        Specifications
                    </nuxt-link>

                    <nuxt-link :to="`/detail/${id}/team`" :class="$style.tab">
                        Team
                    </nuxt-link>

                    <nuxt-link :to="`/detail/${id}/terms`" :class="$style.tab">
                        Rent terms
                    </nuxt-link>
                </div>

                <nuxt-child/>
            </div>

            <div :class="$style['banner-overlay']">
                <div :class="$style.banner">
                    <div :class="$style['banner-price']">
                        Rent for
                        <span>{{ rent }} $/h</span>
                    </div>

                    <button type="button" class="button">
                        Rent now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardDetail',
        props: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                reqired: true,
            },
            image: {
                type: String,
                reqired: true,
            },
            rent: {
                type: Number,
                reqired: true,
            },
            specifications_text: {
                type: String,
                reqired: true,
            },
            team_text: {
                type: String,
                reqired: true,
            },
            term_text: {
                type: String,
                reqired: true,
            },
        }
    };
</script>

<style module lang="scss">
    .detail {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: $mobile) {
            padding: 0 16px;
        }
    }

    .image {
        width: 54%;
        border-radius: 24px;

        @media (max-width: $mobile) {
            width: 100%;
            margin-bottom: 22px;
            border-radius: 16px;
        }
    }

    .desc {
        padding-left: 64px;
        padding-top: 56px;
        width: 46%;

        @media (max-width: $mobile) {
            width: 100%;
            padding: 0;
        }
    }

    .title {
        font-size: 40px;
        font-weight: bold;
        color: $black;
        margin-bottom: 32px;

        @media (max-width: $mobile) {
            font-size: 24px;
            margin-bottom: 16px;
        }
    }

    .tabs {
        margin-bottom: 45px;

        @media (max-width: $mobile) {
            margin-bottom: 132px;
        }
    }

    .tab-links {
        margin-bottom: 32px;

        @media (max-width: $mobile) {
            margin-bottom: 20px;
        }
    }

    .tab {
        font-size: 16px;
        font-weight: bold;
        line-height: 14px;
        color: $grey;
        text-decoration: none;
        margin-right: 32px;
        transition: color $animation_time ease;

        &:last-child {
            margin-right: 0;
        }
    }

    .banner-overlay {
        @media (max-width: $mobile) {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 0 16px 32px 16px;
            background: $white;

            &::before {
                content: "";
                z-index: -1;
                position: absolute;
                bottom: 100%;
                width: 100%;
                height: 32px;
                background: linear-gradient(180deg, rgba(252, 252, 252, 0) 0%, $white 100%);
            }
        }
    }

    .banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;
        border-radius: 16px;
        background-color: $grey-lighten-2;

        @media (max-width: $mobile) {
            margin-top: -8px;
            padding: 12px 24px;
        }
    }

    .banner-price {
        font-size: 20px;
        font-weight: bold;
        color: $black;

        span {
            color: $pink;
        }

        @media (max-width: $mobile) {
            font-size: 16px;
        }
    }
</style>
