import { InputHTMLAttributes } from 'react';

export type ComboboxOptionType = {
  /**
   * The value of the option
   */
  value: string;
  /**
   * The display label of the option
   */
  label: string;
};

export interface ComboboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  /**
   * Maximum number of selections allowed
   *
   * @default 5
   */
  maxSelection?: number;
  options: ComboboxOptionType[];
  selectedOptions?: ComboboxOptionType[];
  emptyText?: string;
  onOptionToggle?: (option: ComboboxOptionType, selected: boolean) => void;
}
