import Chips from '../../Chips';
import { ChipOptionType } from '..';

export interface ChipsInputSelectedOptionsProps {
  selectedOptions: ChipOptionType[];
  removeSelectedOption: (option: ChipOptionType) => void;
}

const ChipsInputSelectedOptions = ({ selectedOptions, removeSelectedOption }: ChipsInputSelectedOptionsProps) => {
  return (
    <Chips>
      {selectedOptions.map((option) => (
        <Chips.Removable
          key={`option-${option}`}
          onClick={(e) => {
            e.stopPropagation();
            removeSelectedOption(option);
          }}
        >
          {option}
        </Chips.Removable>
      ))}
    </Chips>
  );
};

export default ChipsInputSelectedOptions;
