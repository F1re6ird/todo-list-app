import { create } from "zustand";
import { nanoid } from "nanoid";

const useNoteStore = create((set) => ({
  notes: [
    {
      id: nanoid(),
      title: "Why Focus is a Superpower",
      content:
        "In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarity knowing what matters most, and ignoring everything else. Master your focus, and you master your direction.",
      lastEdited: "March 25, 2025.",
    },
    {
      id: nanoid(),
      title: "Why Focus is a Superpower",
      content:
        "In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarity knowing what matters most, and ignoring everything else. Master your focus, and you master your direction.",
      lastEdited: "March 25, 2025.",
    },
    {
      id: nanoid(),
      title: "Why Focus is a Superpower",
      content:
        "In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarity knowing what matters most, and ignoring everything else. Master your focus, and you master your direction.",
      lastEdited: "March 25, 2025.",
    },
    {
      id: nanoid(),
      title: "Why Focus is a Superpower",
      content:
        "In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarity knowing what matters most, and ignoring everything else. Master your focus, and you master your direction.",
      lastEdited: "March 25, 2025.",
    },
  ],
  addToNotes: (title, content) =>
    set((state) => ({
      notes: [
        ...state.notes,
        { id: nanoid(), title, content, lastEdited: "March 25, 2025" },
      ],
    })),
  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
  updateNote: (id, title, content) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      ),
    })),
}));

export default useNoteStore;
