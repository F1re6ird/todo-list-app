import { create } from "zustand";

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
      id: 100002,
      todo: "Refactor portfolio project code",
      completed: true,
      isEditing: false,
    },
    {
      id: 100003,
      todo: "Schedule doctor’s appointment",
      completed: false,
      isEditing: false,
    },
    {
      id: 100004,
      todo: "Study two chapters of AI textbook",
      completed: false,
      isEditing: true,
    },
    {
      id: 100005,
      todo: "Reply to pending emails",
      completed: true,
      isEditing: false,
    },
    {
      id: 100006,
      todo: "Go for a 30-minute run",
      completed: false,
      isEditing: false,
    },
    {
      id: 100007,
      todo: "Backup local files to cloud storage",
      completed: false,
      isEditing: false,
    },
    {
      id: 100008,
      todo: "Post quote on Instagram page",
      completed: true,
      isEditing: false,
    },
    {
      id: 100009,
      todo: "Brainstorm Substack article ideas",
      completed: false,
      isEditing: false,
    },
    {
      id: 100010,
      todo: "Practice SQL queries for 1 hour",
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
