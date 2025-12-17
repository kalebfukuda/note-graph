import { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  Card,
  CardBody,
  Typography,
  IconButton,
  Input,
  List,
  ListItem,
} from "@material-tailwind/react";
import { getAllNotes, createNote } from "@/services/notes/note";
import { Note } from "@/services/notes/types";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function CreateNote() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  async function addNoteClick() {
    const note = { title, content }<Note>;
    const newNote = await createNote(note);
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  useEffect(() => {
    getAllNotes()
      .then((data: Note[]) => setNotes(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <IconButton onClick={toggleOpen}>
        <PlusIcon className="h-5 w-5" />
      </IconButton>

      <div className="flex">
        <Collapse open={open}>
          <Card className="my-2 w-100">
            <CardBody>
              <div className="mb-2">
                <Input
                  label="Note Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <Input
                  label="Note Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div>
                <Button onClick={addNoteClick} className="w-full">
                  Add Note
                </Button>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <List>
        {notes.map((note) => (
          <ListItem key={note.id} className="flex flex-col items-start">
            <strong className="text-sm">{note.title}</strong>
            <span className="text-sm text-blue-gray-500">{note.content}</span>
          </ListItem>
        ))}
      </List>
    </>
  );
}
