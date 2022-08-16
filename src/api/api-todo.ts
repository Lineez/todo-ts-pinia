import { API_Constructor } from "@/api/constructor";
const API_URL = new URL(process.env.VUE_APP_API_TODO);

export const ApiTodo = new API_Constructor(API_URL);
