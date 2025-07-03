import { createContext, ReactNode, useMemo, useState } from 'react';

import { ComboboxOptionType } from './types';
import { getMatchingValuesFromList, isSelected } from './utils';

export interface ComboboxOptionsContextProps {
  inputValue: string;
  maxSelection: number;
  limitReached: boolean;
  selectedOptions: ComboboxOptionType[];
  filteredOptions: ComboboxOptionType[];
  handleSelect: (option: ComboboxOptionType) => void;
  removeSelectedOption: (option: ComboboxOptionType) => void;
}

interface ComboboxOptionsProviderProps {
  children: ReactNode;
  value: Pick<ComboboxOptionsContextProps, 'inputValue' | 'maxSelection'> & {
    options: ComboboxOptionType[];
    selectedOptions?: ComboboxOptionType[];
    onOptionToggle?: (option: ComboboxOptionType, selected: boolean) => void;
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export const ComboboxOptionsContext = createContext<ComboboxOptionsContextProps | null>(null);

const ComboboxOptionsProvider = ({ children, value }: ComboboxOptionsProviderProps) => {
  const { inputValue, maxSelection, options, selectedOptions: externalSelectedOptions, onOptionToggle } = value;

  const [internalSelectedOptions, setSelectedOptions] = useState<ComboboxOptionType[]>([]);

  const selectedOptions = useMemo(
    () => externalSelectedOptions ?? internalSelectedOptions,
    [externalSelectedOptions, internalSelectedOptions],
  );

  const limitReached = selectedOptions.length >= maxSelection;
  const filteredOptions = useMemo(() => getMatchingValuesFromList(inputValue, options), [inputValue, options]);

  const removeSelectedOption = (option: ComboboxOptionType) => {
    setSelectedOptions((prev) => prev.filter((selectedOption) => selectedOption !== option));
    onOptionToggle?.(option, false);
  };

  const handleSelect = (option: ComboboxOptionType) => {
    if (isSelected(option, selectedOptions)) {
      removeSelectedOption(option);
    } else if (limitReached) {
      return;
    } else {
      setSelectedOptions((prev) => [...prev, option]);
      onOptionToggle?.(option, true);
    }
  };

  return (
    <ComboboxOptionsContext.Provider
      value={{
        maxSelection,
        filteredOptions,
        selectedOptions,
        inputValue,
        limitReached,
        handleSelect,
        removeSelectedOption,
      }}
    >
      {children}
    </ComboboxOptionsContext.Provider>
  );
};

export default ComboboxOptionsProvider;
