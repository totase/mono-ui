import { createContext } from 'react';

export interface ModalContextProps {
  close: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);
