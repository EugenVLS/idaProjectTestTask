<template>
    <div>
        <p :class="$style.info">
            {{ description }}
        </p>

        <h2 :class="$style.title">
            Additional conditions:
        </h2>

        <ul :class="$style.list">
            <li>
                <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </span>
            </li>

            <li>
                <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </span>
            </li>

            <li>
                <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </span>
            </li>
        </ul>
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
        @include color(text-primary);
    }

    .info {
        composes: text;
        margin-bottom: 24px;

        @media (max-width: $mobile) {
            margin-bottom: 16px;
        }
    }

    .title {
        font-size: 16px;
        @include color(title);
        margin-bottom: 24px;

        @media (max-width: $mobile) {
            margin-bottom: 16px;
        }
    }

    .list {
        margin: 0;
        padding: 0 0 0 16px;
        color: $pink;

        li {
            margin-bottom: 16px;

            @media (max-width: $mobile) {
                margin-bottom: 8px;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        span {
            font-size: 14px;
            @include color(text-primary);
        }
    }
</style>
