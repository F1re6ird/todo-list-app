import { create } from "zustand";
import { nanoid } from "nanoid";

const useTodoListStore = create((set) => ({
  todos: [
    {
      id: 928893829,
      todo: "Reread Recommended books again",
      completed: false,
      isEditing: false,
    },
    {
      id: 100001,
      todo: "Write in journal for 20 minutes",
      completed: false,
      isEditing: false,
    },
    {
      id: 100004,
      todo: "Study two chapters of AI textbook",
      completed: false,
      isEditing: false,
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      // maybe set all todos to completed before adding this...
      todos: [
        ...state.todos,
        { id: nanoid(), todo, completed: false, isEditing: false },
      ],
    })),
  toggleCompleted: (id) =>
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
  deleteChecked: () =>
    set((state) => ({ todos: state.todos.filter((todo) => !todo.completed) })),
}));

export default useTodoListStore;
