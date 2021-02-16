<template>
    <div>
        <p :class="$style.info">
            {{ description }}
        </p>

        <h2 :class="$style.title">
            Qualified specialists
        </h2>

        <div :class="$style.specialists">
            <div :class="$style['specialist-container']">
                <div :class="$style.specialist">
                    <img :class="$style.image" src="~/assets/img/specialist1.png" alt="specialist">

                    <div :class="$style.desc">
                        <h3 :class="$style['desc-title']">
                            Marvin McKinney
                        </h3>

                        <p :class="$style['desc-text']">
                            Pilot assistant
                        </p>
                    </div>
                </div>
            </div>

            <div :class="$style['specialist-container']">
                <div :class="$style.specialist">
                    <img :class="$style.image" src="~/assets/img/specialist2.png" alt="specialist">

                    <div :class="$style.desc">
                        <h3 :class="$style['desc-title']">
                            Savannah Nguyen
                        </h3>

                        <p :class="$style['desc-text']">
                            Mechanic
                        </p>
                    </div>
                </div>
            </div>

            <div :class="$style['specialist-container']">
                <div :class="$style.specialist">
                    <img :class="$style.image" src="~/assets/img/specialist3.png" alt="specialist">

                    <div :class="$style.desc">
                        <h3 :class="$style['desc-title']">
                            Courtney Henry
                        </h3>

                        <p :class="$style['desc-text']">
                            Stewardess
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div :class="$style.text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>

    </div>
</template>

<script>
  export default {
    name: 'team',
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

    .specialists {
        display: flex;
        flex-wrap: wrap;
        margin: -12.5px;
        margin-bottom: 19.5px;

        @media (max-width: $mobile) {
            margin: -6px;
            margin-bottom: 14px;
        }
    }

    .specialist-container {
        width: auto;
        padding: 12.5px;

        @media (max-width: $mobile) {
            padding: 6px;
            width: 100%;
        }
    }

    .specialist {
        @media (max-width: $mobile) {
            display: flex;
        }
    }

    .image {
        border-radius: 16px;
        margin-bottom: 16px;

        @media (max-width: $mobile) {
            margin-right: 16px;
            margin-bottom: 0;
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
