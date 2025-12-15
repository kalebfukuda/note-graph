import { Typography } from "@material-tailwind/react";

export default function CreateNote() {
  return (
    <>
      <Typography variant="h6" className="mb-2">
        Notes
      </Typography>
      <Typography color="gray">
        This content is loaded inside the offcanvas.
      </Typography>
    </>
  );
}
