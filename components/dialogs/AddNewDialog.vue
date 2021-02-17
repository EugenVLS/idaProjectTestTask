<template>
    <div v-show="display">
        <div :class="$style['modal-overlay']"
             @click="display = false"></div>

        <div :class="$style.modal">
            <div :class="$style['modal-container']">
                <button type="button" class="button button--icon"
                        @click="display = false">
                    <div :class="$style.close + ' button__icon'">
                        <svg-icon :class="$style['close-icon']" name="close" width="24" height="24"/>
                    </div>
                </button>

                <add-new-form @success="display = false"/>
            </div>
        </div>
    </div>
</template>

<script>
  import AddNewForm from '~/components/forms/AddNewForm'

  export default {
    name: 'AddNewDialog',
    components: { AddNewForm },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      display: {
        get: vm => vm.value,
        set( value ) {
          console.log( value );
          if ( value ) return;
          this.$emit( 'input', value );
        },
      },
    },
  }
</script>

<style module lang="scss">
    .modal {
        z-index: 2;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 600px;
        padding: 64px 72px;
        background-color: $white;
        @include bg-color(bg-primary);
        border-radius: 48px 0 0 48px;

        @media (max-width: $mobile) {
            top: auto;
            width: 100%;
            padding: 24px 16px 32px;
            border-radius: 24px 24px 0px 0px;
        }
    }

    .modal-overlay {
        z-index: 1;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        @include bg-color(overlay);
        backdrop-filter: blur(32px);
    }

    .modal-container {
        position: relative;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        @include bg-color(bg-secondary);
    }

    .close-icon {
        @include color(title);
    }
</style>
