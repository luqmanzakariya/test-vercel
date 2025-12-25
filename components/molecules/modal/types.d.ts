import { ReactNode } from "react";

export interface ModalProps {
  visible?: boolean;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  onClose: () => void;
}
