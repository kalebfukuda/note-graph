"use client";

import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function OffCanvas({ open, onClose, title, children }) {
  return (
    <Drawer
      placement="left"
      open={open}
      onClose={onClose}
      className="p-4"
      size={400}
    >
      <div className="mb-4 flex items-center justify-between">
        <Typography variant="h5">{title}</Typography>
        <IconButton variant="text" onClick={onClose}>
          <XMarkIcon className="h-5 w-5" />
        </IconButton>
      </div>

      <div className="overflow-y-auto">{children}</div>
    </Drawer>
  );
}
