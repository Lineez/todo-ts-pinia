<template>
    <section class="todo">
        <h1 class="todo__header">TODO List created via VUE 3, pinia, ts</h1>
        <!-- some component maybe -->
        <form @submit.prevent class="todo__nav">
            <ui-input
                v-model="input"
                class="todo__input default"
                placeholder="Enter some text"
            />
            <ui-button
                type="submit"
                @click="addNewTodo()"
                class="todo__button default"
                >Add</ui-button
            >
            <ui-button
                type="button"
                @click="removeCompleted()"
                class="todo__button default"
                >Remove completed</ui-button
            >
        </form>

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
import UiButton from "@/components/ui/UiButton.vue";
import { ITodoItem } from "@/components/todo/interface.todo";
import { mapActions } from "pinia";
import UiInput from "@/components/ui/UiInput.vue";

export default defineComponent({
    components: { TodoList, UiLoader, UiButton, UiInput },
    data() {
        return {
            input: "some todo",
        };
    },
    setup() {
        const todoStore = useStoreTodo();
        const { fetchTodos } = todoStore;
        const { todos, totalPages, page, isLoading } = toRefs(todoStore);

        return { fetchTodos, todos, totalPages, page, isLoading };
    },
    methods: {
        ...mapActions(useStoreTodo, ["setTodos"]),
        // можно вынести в стор
        removeCompleted() {
            const todos = this.todos.filter(
                (todo: ITodoItem) => !todo.completed
            );
            this.setTodos(todos);
        },
        // можно вынести в стор
        addNewTodo() {
            const newTodo = {
                userId: 1, // hard
                id: Date.now(),
                title: this.input,
                completed: false,
            };
            this.setTodos([...this.todos, newTodo]);
            this.input = "";
        },
    },
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
    // .todo__nav
    &__nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 40px;
        column-gap: 20px;
    }
    // .todo__input
    &__input {
        width: 100%;
    }
    // .todo__button
    &__button {
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
