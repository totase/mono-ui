import Chips from '../../Chips';
import { ChipOptionType } from '..';

export interface ChipsInputSelectedOptionsProps {
  selectedOptions: ChipOptionType[];
  removeSelectedOption: (option: ChipOptionType) => void;
}

const ChipsInputSelectedOptions = ({ selectedOptions, removeSelectedOption }: ChipsInputSelectedOptionsProps) => {
  return (
    <Chips className="mono-ui-chips-input__selected-options">
      {selectedOptions.map((option) => (
        <Chips.Removable
          key={`option-${option}`}
          className="mono-ui-chips-input__selected-option"
          onClick={(e) => {
            e.stopPropagation();
            removeSelectedOption(option);
          }}
        >
          <span className="mono-ui-chips-input__selected-option-label">{option}</span>
        </Chips.Removable>
      ))}
    </Chips>
  );
};

export default ChipsInputSelectedOptions;
