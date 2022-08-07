<template>
    <input :value="modelValue" @input="checkField($event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "UiInput",
    props: {
        modelValue: String,
    },
    methods: {
        checkField(event: Event) {
            this.$emit(
                "update:modelValue",
                (event.target as HTMLInputElement).value
            );
        },
    },
});
</script>

<style lang="scss" scoped>
.default {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    height: 50px;
    border: 1px solid var(--color-green);
}
</style>
