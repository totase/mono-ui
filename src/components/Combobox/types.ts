import { InputHTMLAttributes } from 'react';

export type ComboboxOptionType = {
  value: string;
  label: string;
};

export interface ComboboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  maxSelection?: number;
  options: ComboboxOptionType[];
  selectedOptions?: ComboboxOptionType[];
  emptyText?: string;
  onOptionToggle?: (option: ComboboxOptionType, selected: boolean) => void;
}
