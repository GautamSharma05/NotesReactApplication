import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
  notes: Note[]
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes,setNotes }) => {
  const [error,setError] = React.useState<string>("");  
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void =>{
      e.preventDefault();
      if(titleRef.current?.value === "" || textRef.current?.value === ""){
        return setError("All Fields are Mandatory");
      }
      setError("");
      setNotes([...notes,{
          id:new Date().toDateString(),
          title:(titleRef.current as HTMLInputElement).value,
          text:(textRef.current as HTMLTextAreaElement).value,
          color:(colorRef.current as HTMLInputElement).value,
          date:new Date().toDateString()
      }]);
      (titleRef.current as HTMLInputElement).value = "";
      (textRef.current as HTMLTextAreaElement).value="";

  }
  return (
      <>
      <h2>Create Notes</h2>
      {error &&<Alert variant='danger'>{error}</Alert>}
      <Form action="" onSubmit={(e)=>handleSubmit(e)} className="mt-3 mb-3">
        <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter Title for the Note' ref={titleRef}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Text</Form.Label>
            <Form.Control placeholder='Enter Your Notes' rows={3} as="textarea" ref={textRef}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicColor'>
            <Form.Label>Notes Color</Form.Label>
            <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf' title='Choose your color' ref={colorRef}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </>
  );
};

export default CreateNotes;
