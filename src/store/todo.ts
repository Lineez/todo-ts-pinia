import { ITodoItem } from "@/components/todo/interface.todo";
import axios from "axios";
import { defineStore } from "pinia";

export const useStoreTodo = defineStore("todo", {
    state: () => ({
        todos: [] as ITodoItem[],
        totalPages: 2, // hard
        page: 0,
        limit: 10,
        isLoading: false,
    }),
    getters: {},
    actions: {
        setPage(value: number) {
            this.page = value;
        },
        setLimit(value: number) {
            this.limit = value;
        },
        setTotalPages(value: number) {
            this.totalPages = value;
        },
        setTodos(data: Array<ITodoItem>) {
            this.todos = data;
        },
        async fetchTodos() {
            try {
                this.isLoading = true;
                this.page += 1;

                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos",
                    {
                        params: {
                            _limit: this.limit,
                            _page: this.page,
                        },
                    }
                );

                // this.totalPages = Math.ceil(
                //     Number(response.headers["x-total-count"]) / this.limit
                // );

                this.todos = [...this.todos, ...response.data];
            } catch (error: any) {
                throw new Error(error.message);
            } finally {
                this.isLoading = false;
            }
        },
        changeItemComplete(id: number) {
            this.todos.forEach((item: ITodoItem) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
            });
        },
        removeItem(id: number) {
            this.todos = this.todos.filter((item: ITodoItem) => item.id !== id);
        },
    },
});
