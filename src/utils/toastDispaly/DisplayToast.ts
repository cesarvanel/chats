import { toast, ToastPosition, Theme } from "react-toastify";

export interface DisplayToastInterface {
  message?: string;
  position?: ToastPosition;
  autoClose?: number | false;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: string | number;
  theme?: Theme;
}

export class DisplayToast {
  public static Success = ({
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  }: DisplayToastInterface) => {
    toast.success(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  };

  /**
   * static Error
   */
  public static Error = ({
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  }: DisplayToastInterface) => {
    toast.error(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  };

  /**
   * stactic Infos
   */
  public static Infos = ({
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  }: DisplayToastInterface) => {
    toast.info(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  };

  /**
   * static Warning =
   */
  public static Warning = ({
    message,
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  }: DisplayToastInterface) => {
    toast.warning(message, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
      theme: theme,
    });
  };
}
