<template>
    <button>
        <slot>button</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "UiButton",
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
