import { useState } from "react";

export const useDialog = () => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return {
    open,
    close,
    toggleOpen,
    setOpen,
  };
};
