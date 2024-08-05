import React from "react";
import NoteCard from "./note-card";
import { fakeData } from "@/lib/fake-data";
import type { NoteProps } from "@/components/note-card";

const notes: NoteProps[] = fakeData.map((note) => ({
  id: note.$id,
  body: JSON.parse(note.body),
  colors: JSON.parse(note.colors),
  position: JSON.parse(note.position),
}));

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesPage;
