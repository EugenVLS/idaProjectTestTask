<template>
    <div :class="$style.catalog">
        <div :class="$style.controls">
            <select>
                <option>Rent Whatever1</option>
                <option>Rent Whatever2</option>
            </select>

            <button type="button" class="button button--icon">
                <div class="button__text">
                    Add new
                </div>

                <div class="button__icon">
                    <svg-icon name="plus" width="24" height="24"/>
                </div>
            </button>
        </div>

        <div :class="$style['catalog-list']">
            <div v-for="item in catalogItems" :key="item.id"
                 :class="$style['catalog-item']">
                <card-preview v-bind="item"/>
            </div>
        </div>
    </div>
</template>

<script>
  import CardPreview    from '~/components/card/CardPreview';
  import { mapGetters } from 'vuex';

  export default {
    name: 'AppCatalog',
    components: { CardPreview },
    computed: {
      ...mapGetters(['catalogItems']),
    },
    mounted () {
      console.log(this.catalogItems);
    }
  }
</script>

<style module lang="scss">
    .catalog {
        padding: 56px 64px;
        background-color: $grey-lighten-2;
        border-radius: 48px;

        @media (max-width: $mobile) {
            padding: 24px 16px;
            border-radius: 24px;
        }
    }

    .catalog-list {
        display: flex;
        flex-wrap: wrap;
        margin: -16px;

        @media (max-width: $mobile) {
            margin: -6px;
        }
    }

    .catalog-item {
        flex-grow: 1;
        padding: 16px;
        width: 33.3333%;

        @media (max-width: $mobile) {
            padding: 6px;
            width: 100%;
        }
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;

        @media (max-width: $mobile) {
            margin-bottom: 24px;
        }
    }
</style>
