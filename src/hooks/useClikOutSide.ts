import { useEffect } from "react";

export const useClickOutside = (
  isOpen: any,
  setIsOpen: any,
  ref: any,
  active = true
) => {
  useEffect(() => {
    const clickOutSideEvent = (event: MouseEvent) => {
      if (!active) return;

      if (!ref.current?.contains(event.target)) {
        return setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", clickOutSideEvent);

      return () => {
        window.removeEventListener("mousedown", clickOutSideEvent);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, active]);

  return null;
};
