<template>
    <ul v-if="todos.length" class="list-todo">
        <todo-item
            v-for="item in todos"
            :key="item.id"
            :item="item"
            class="list-todo__item"
        />
    </ul>
    <div v-else class="list-todo-empty">list empty</div>
</template>

<script lang="ts">
import TodoItem from "@/components/todo/TodoItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { TodoItem },
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.list-todo {
    // .todo__item
    &__item {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
}
</style>
