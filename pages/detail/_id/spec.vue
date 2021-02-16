<template>
    <div>
        <p :class="$style.info">
            {{ description }}
        </p>

        <h2 :class="$style.title">
            Features:
        </h2>

        <div :class="$style.feature">
            <div :class="$style.image">
                <svg-icon name="cup" width="32" height="32"></svg-icon>
            </div>

            <div class="desc">
                <h3 :class="$style['desc-title']">
                    A challenge for a true champion
                </h3>

                <p :class="$style['desc-text']">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
        </div>

        <div :class="$style.feature">
            <div :class="$style.image">
                <svg-icon name="portrait" width="32" height="32"></svg-icon>
            </div>

            <div :class="$style.desc">
                <h3 :class="$style['desc-title']">
                    Pilot's sweaty hands
                </h3>

                <p :class="$style['desc-text']">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'spec',
    props: {
      description: {
        type: String,
        reqired: true,
      },
    }
  }
</script>

<style module lang="scss">
    .text {
        font-size: 14px;
        color: $grey;
    }

    .info {
        composes: text;
        margin-bottom: 32px;

        @media (max-width: $mobile) {
            margin-bottom: 20px;
        }
    }

    .title {
        font-size: 24px;
        color: $black;
        margin-bottom: 32px;

        @media (max-width: $mobile) {
            font-size: 20px;
            margin-bottom: 20px;
        }
    }

    .feature {
        display: flex;
        margin-bottom: 16px;

        @media (max-width: $mobile) {
            margin-bottom: 12px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 24px ;
        min-width: 80px;
        height: 96px;
        background-color: $grey-lighten-2;
        border-radius: 16px;

        svg {
            @media (max-width: $mobile) {
                min-width: 24px;
                height: 24px;
            }
        }

        @media (max-width: $mobile) {
            min-width: 64px;
            height: 80px;
            padding: 28px 20px;
            margin-right: 16px;
        }
    }

    .desc-title {
        font-weight: bold;
        color: $black;
        margin-top: 12px;
        margin-bottom: 8px;

        @media (max-width: $mobile) {
            margin: 4px 0;
        }
    }

    .desc-text {
        font-size: 14px;
        color: $grey;
    }
</style>
