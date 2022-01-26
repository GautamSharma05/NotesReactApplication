import * as React from 'react';
import Notes from './Notes';
import { Note } from '../models/note.model';
import { setSyntheticLeadingComments } from 'typescript';

interface INotesListProps {
  notes: Note[]
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes,setNotes }) => {
  const handleDelete = (id:string) =>{
      setNotes(notes.filter(note => note.id!==id));
  }
  const renderNotes = () => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }
  return (
    <>
      <h1 className='mt-5'>Notes List</h1>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
