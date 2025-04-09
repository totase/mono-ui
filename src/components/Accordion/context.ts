import { createContext } from 'react';

export interface AccordionContextProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
}

export const AccordionContext = createContext<AccordionContextProps | null>(null);
