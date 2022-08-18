import { API_Constructor } from "@/api/constructor";
import { ITodoItem } from "@/components/todo/interface.todo";
const API_URL = new URL(process.env.VUE_APP_API_TODO);

export const ApiTodo = new API_Constructor<ITodoItem>(API_URL);
