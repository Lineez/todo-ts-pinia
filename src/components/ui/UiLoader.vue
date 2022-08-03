<template>
    <div class="loader">
        <span class="loader__circle">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.loader {
    display: flex;
    align-items: center;
    justify-content: center;

    // .loader__circle
    &__circle {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        width: 150px;
        border: 1px dashed var(--color-green);
        border-radius: 50%;
        animation: walk 3s linear 0s infinite forwards;
    }
    @keyframes walk {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
