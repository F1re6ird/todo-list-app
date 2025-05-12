import { create } from "zustand";

const useTodoListStore = create((set) => ({
  todos: [
    {
      id: 928893829,
      todo: "Reread Recommended books again",
      completed: false,
      isEditing: false,
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      // maybe set all todos to completed before adding this...
      todos: [...state.todos, { id: Date.now(), todo, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      // maybe set all todos to completed before toggling
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      // maybe set all todos to completed before removing
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleIsEditing: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      ),
    })),

  updateTodoText: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, todo: newText } : todo
      ),
    })),
}));

export default useTodoListStore;
