<template>
    <main>
        <todo-comp />
    </main>
</template>

<script lang="ts">
import TodoComp from "@/components/todo/TodoComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { TodoComp },
});
</script>

<style lang="scss"></style>
