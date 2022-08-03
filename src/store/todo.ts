import axios from "axios";
import { defineStore } from "pinia";

interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const useStoreTodo = defineStore("todo", {
    state: () => ({
        todos: [] as TodoItem[],
        totalPages: NaN,
        page: 0,
        limit: 10,
        isLoading: false,
    }),
    getters: {
        // getPage(): number {
        //     return this.page;
        // },
        // getLimit(): number {
        //     return this.limit;
        // },
        // getTotalPages(): number {
        //     return this.totalPages;
        // },
        // getTodos(): Array<TodoItem> {
        //     return this.todos;
        // },
    },
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
        setTodos(data: Array<TodoItem>) {
            this.todos.push(...data);
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

                this.totalPages = Math.ceil(
                    Number(response.headers["x-total-count"]) / this.limit
                );

                this.todos = [...this.todos, ...response.data];
            } catch (error: any) {
                throw new Error(error.message);
            } finally {
                this.isLoading = false;
            }
        },
        changeItemComplete(id: number) {
            this.todos.forEach((item: TodoItem) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
            });
        },
        removeItem(id: number) {
            this.todos = this.todos.filter((item: TodoItem) => item.id !== id);
        },
    },
});
