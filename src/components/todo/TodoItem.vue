<template>
    <li class="item-todo">
        {{ getItemIdWithSign(")") }}
        {{ item.title }}
        <div class="item-todo__btns">
            <ui-button @click="changeItemComplete(item.id)" class="default">
                {{ item.completed ? "uncompleted" : "completed" }}
            </ui-button>
            <ui-button
                @click="removeItem(item.id)"
                class="item-todo__button-remove default"
                >remove
            </ui-button>
        </div>
    </li>
</template>

<script lang="ts">
import UiButton from "@/components/ui/UiButton.vue";
import { useStoreTodo } from "@/store/todo";
import { defineComponent } from "vue";

export default defineComponent({
    components: { UiButton },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const todoStore = useStoreTodo();
        const { changeItemComplete, removeItem } = todoStore;

        return { changeItemComplete, removeItem };
    },
    methods: {
        getItemIdWithSign(sign) {
            return `${this.item.id} ${sign}`;
        },
    },
});
</script>

<style lang="scss" scoped>
.item-todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    border: 1px solid var(--color-green);
    // .item-todo__btns
    &__btns {
        display: flex;
        align-content: inherit;
        justify-content: center;
        column-gap: 10px;
    }
    // .item-todo__button-remove
    &__button-remove {
        color: red;
    }
}
</style>
