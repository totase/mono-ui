import { createContext } from 'react';

export interface PopoverContextProps {
  close: () => void;
}

export const PopoverContext = createContext<PopoverContextProps | null>(null);
