<template>
    <div :class="$style.catalog">
        <div :class="$style.controls">
            <select v-model="filterType">
                <option v-for="( type, index ) in types" :key="index"
                        :value="type">
                    {{ type }}
                </option>
            </select>

            <button type="button" class="button button--icon"
                    @click="openDialog">
                <div class="button__text">
                    Add new
                </div>

                <div class="button__icon">
                    <svg-icon name="plus" width="24" height="24"/>
                </div>
            </button>

            <add-new-dialog v-model="addDialog"/>
        </div>

        <div :class="$style['catalog-list']">
            <div v-for="item in items" :key="item.id"
                 :class="$style['catalog-item']">
                <card-preview :link="`/detail/${item.id}/spec`"
                              v-bind="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CardPreview from '~/components/card/CardPreview'
    import { mapGetters } from 'vuex'
    import AddNewDialog from '~/components/dialogs/AddNewDialog'

    export default {
        name: 'Catalog',
        components: {
            AddNewDialog,
            CardPreview,
        },
        data: () => ({
            filterType: '',
            addDialog: false,
        }),
        computed: {
            ...mapGetters(['catalogItems']),
            types: vm => {
                const types = vm.catalogItems.map(item => item.type)
                const filteredTypes = types.filter((item, index) => {
                    return types.indexOf(item) === index;
                })
                vm.filterType = filteredTypes[0]
                return filteredTypes
            },
            items: vm => vm.catalogItems.filter(item => item.type === vm.filterType),
        },
        methods: {
            openDialog () {
                this.addDialog = true
            },
        },
    }
</script>

<style module lang="scss">
    .catalog {
        flex-grow: 1;
        padding: 56px 64px;
        border-radius: 48px;
        @include bg-color(bg-secondary);

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
