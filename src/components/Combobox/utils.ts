import { ComboboxOptionType } from './types';

export const normalizeText = (text: string): string =>
  typeof text === 'string' ? text.toLocaleLowerCase().trim() : '';

export const getMatchingValuesFromList = (value: string, list: ComboboxOptionType[]) =>
  list.filter(({ label }) => normalizeText(label).includes(normalizeText(value ?? '')));

export const isSelected = (option: ComboboxOptionType, list: ComboboxOptionType[]) =>
  list.some(({ label, value }) => label === option.label && value === option.value);
