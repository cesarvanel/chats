import { X } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../hooks/useClikOutSide";
import "./modale.scss";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string | null;
  handleSubmmit?: any;
}

export const Modale = ({
  open,
  title,
  onClose,
  children,
  handleSubmmit,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(open, onClose, ref);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  if (!open) {
    return null;
  }
  return createPortal(
    <div className="Modal">
      <div className="container" ref={ref}>
        <form onSubmit={handleSubmmit}>
          <div className="header">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="headerss">
              <div role="button" onClick={onClose}>
                <X size={24} weight="fill" />
              </div>
            </div>
          </div>
          <div className="body">{children}</div>

          <div className="footer">
            <div className="btn">
              <button type="button" className="btnDanger" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btnPrimary">
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modale;
