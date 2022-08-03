<template>
    <default-layer />
</template>

<script lang="ts">
import DefaultLayer from "@/layers/DefaultLayer.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { DefaultLayer },
});
</script>

<style lang="scss">
* {
    font-family: var(--font-family_Montserrat);
}
</style>
