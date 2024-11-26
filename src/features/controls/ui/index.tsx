import { FC, memo } from "react";
import { OnChangeValueRadioInputProps, Radio } from "@/enteties/radio";

interface Props {
  className?: string;

  valueRadioInput: number;

  onChangeValueRadioInput: (props: OnChangeValueRadioInputProps) => void;
}

export const Controls: FC<Props> = memo(
  ({ className, onChangeValueRadioInput, valueRadioInput }) => {
    return (
      <div className={className}>
        <Radio
          valueRadioInput={valueRadioInput}
          onChangeValueRadioInput={onChangeValueRadioInput}
        />
      </div>
    );
  }
);
