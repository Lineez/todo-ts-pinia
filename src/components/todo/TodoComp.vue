<template>
    <section class="todo">
        <h1 class="todo__header">TODO List created via VUE 3, pinia, ts</h1>

        <todo-list class="todo__list" :todos="todos" />
        <ui-loader
            v-intersection="fetchTodos"
            v-show="!isLoading && totalPages !== page"
            class="todo__loading"
            >loading ...</ui-loader
        >
    </section>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import TodoList from "@/components/todo/TodoList.vue";
import { useStoreTodo } from "@/store/todo";
import UiLoader from "@/components/ui/UiLoader.vue";

export default defineComponent({
    components: { TodoList, UiLoader },
    data() {
        return {};
    },
    setup() {
        const todoStore = useStoreTodo();
        const { fetchTodos } = todoStore;
        const { todos, totalPages, page, isLoading } = toRefs(todoStore);

        return { fetchTodos, todos, totalPages, page, isLoading };
    },
    // methods: {
    //     loading() {
    //         setTimeout(() => {
    //             this.fetchTodos();
    //         }, 0);
    //     },
    // },
});
</script>

<style lang="scss" scoped>
.todo {
    @include x-container();
    margin: 0 auto;
    // .todo__header
    &__header {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        text-align: center;
        color: var(--color-green);
    }
    // .todo__list
    &__list {
    }
    // .todo__loading
    &__loading {
        padding: 20px 0;
    }
}
</style>
