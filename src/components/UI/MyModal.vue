<template>
    <div class="modal" v-if="show" @click.stop="hideModal">
        <div @click.stop class="modal_content">
            <slot></slot>
        </div>

    </div>
</template>


<script>
export default {
    name: 'my-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal() {
            this.$emit("update:show", false);
        }
    }
}
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 10;
    display: flex;


}

.modal_content {
    margin: auto;
    background: #fff;
    border-radius: 15px;
    padding: 20;
    width: 50%;
    min-height: 100px;

}
</style>