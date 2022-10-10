<template>

    <select v-model="modeValue" @change="changeOptions" class="form-control">
        <option disabled value="">Category</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}</option>
    </select>

</template>

<script>
export default {
    name: 'my-select',
    props: {
        modalValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value);

        }
    }
}
</script>