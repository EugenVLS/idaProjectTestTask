<template>
    <form :class="$style.form" @submit.prevent="onSubmit">
        <div :class="$style.title">
            Add new vehicle
        </div>

        <label>
            <div :class="$style['file-loader']">
                <div :class="$style['file-loader-icon']">
                    <svg-icon name="upload" width="24" height="24"/>
                </div>
            </div>
            <input type="file" name="image">
        </label>

        <input v-model="name" type="text" name="name" placeholder="Name" :class="$style['text-field']">

        <input v-model="description" type="text" name="description" placeholder="Description" :class="$style['text-field']">

        <div :class="$style['rent-input']">
            <input v-model="rent" type="text" name="rent" placeholder="Rent price" :class="$style['text-field']">
        </div>

        <button type="submit" :class="$style.submit + ' button'">
            Complete
        </button>
    </form>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'AddNewForm',
    data: () => ( {
      name: '',
      description: '',
      rent: null,
    } ),
    computed: {
      ...mapGetters( [ 'catalogItems' ] ),
    },
    methods: {
      ...mapMutations( [ 'setCatalogItems' ] ),
      onSubmit() {
        const newItem = {
          ...this.catalogItems[0],
        };

        newItem.name = this.name;
        newItem.type = 'custom';
        newItem.description = this.description;
        newItem.rent = this.rent;

        this.setCatalogItems( [ ...this.catalogItems, newItem ]);

        this.$emit( 'success' );
      },
    }
  }
</script>

<style module lang="scss">
    .title {
        font-size: 40px;
        font-weight: bold;
        @include color(title);
        margin-bottom: 40px;

        @media (max-width: $mobile) {
            font-size: 24px;
            margin-bottom: 24px;
        }
    }

    .file-loader {
        display: flex;
        width: 456px;
        height: 348px;
        margin-bottom: 24px;
        border-radius: 24px;
        @include bg-color(bg-secondary);
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color $animation_time ease;

        &:hover,
        &:focus {
            border: 2px solid $blue;
        }

        @media (max-width: $mobile) {
            width: 100%;
            height: 260px;
            margin-bottom: 16px;
            border-radius: 16px;
        }
    }

    .file-loader-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin: auto;
        border-radius: 16px;
        @include bg-color(bg-primary);

        @media (max-width: $mobile) {
            width: 32px;
            height: 32px;
            border-radius: 8px;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    .text-field {
        display: block;
        width: 100%;
        padding: 19px 22px;
        font-size: 16px;
        font-weight: 300;
        @include color(text-primary);
        margin-bottom: 24px;
        border-radius: 12px;
        @include bg-color(bg-secondary);
        border: 2px solid transparent;
        transition: border-color $animation_time ease;
        outline: none;

        &:hover,
        &:focus {
            border: 2px solid $blue;
        }

        @media (max-width: $mobile) {
            margin-bottom: 16px;
        }
    }

    .rent-input {
        position: relative;
        margin-bottom: 40px;

        input {
            margin-bottom: 0;
        }

        &::after {
            position: absolute;
            top: 21px;
            right: 24px;
            @include color(text-secondary);
            line-height: 1;
            content: "$/h";
        }

        @media (max-width: $mobile) {
            margin-bottom: 24px;
        }
    }

    .submit {
        justify-content: center;
        width: 100%;
    }
</style>
