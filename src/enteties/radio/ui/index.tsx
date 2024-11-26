import { ChangeEvent, FC, useState } from "react";
import { FilterOption, OnChangeValueRadioInputProps } from "../model/types";
import cs from "clsx";
import s from "./styles.module.scss";

interface Props {
  className?: string;

  options?: FilterOption[];

  valueRadioInput: number;

  onChangeValueRadioInput: (props: OnChangeValueRadioInputProps) => void;
}

export const MAX_COUNT = 4000;
export const MIN_COUNT = 1;
export const DEFAULT_SCREEN_SIZE = 1440;

export const Radio: FC<Props> = (props) => {
  const {
    className,
    onChangeValueRadioInput,
    valueRadioInput,
    options: defaultOptions = [360, 1440],
  } = props;
  const [selected, setSelected] = useState<FilterOption>(DEFAULT_SCREEN_SIZE);

  const [options] = useState(defaultOptions);
  // const refPopup = useRef<HTMLDialogElement | null>(null);

  const handleChangeValueRadioInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    if (Number.isNaN(value)) {
      return;
    }

    if (value < MIN_COUNT) {
      onChangeValueRadioInput({ count: MIN_COUNT, screenSize: selected });

      return;
    }

    if (value > MAX_COUNT) {
      onChangeValueRadioInput({ count: MAX_COUNT, screenSize: selected });

      return;
    }

    onChangeValueRadioInput({ count: value, screenSize: selected });
  };

  const handleChangeOption = (selected: FilterOption) => {
    onChangeValueRadioInput({ count: valueRadioInput, screenSize: selected });
    setSelected(selected);
  };

  // const handleClickAdd = () => {
  //   if (refPopup.current) {
  //     refPopup.current.showModal();
  //   }
  // };

  // const closePopup = () => {
  //   if (refPopup) {
  //     refPopup.current?.close();
  //   }
  // };

  // const handleClickDialog = (e: MouseEvent<HTMLDialogElement>) => {
  //   const modal = e.currentTarget;
  //   const isClickOnBackdrop = e.target === modal;

  //   if (isClickOnBackdrop) {
  //     modal.close();
  //   }
  // };

  const renderOptions = () => {
    return options.map((option) => (
      <li key={option}>
        <label className={s.item}>
          <input
            type="radio"
            name="filter"
            value={option}
            checked={selected === option}
            onChange={() => handleChangeOption(option)}
          />
          {option}
        </label>
      </li>
    ));
  };

  return (
    <div className={cs(s.wrap, className)}>
      <ul className={s.list}>{renderOptions()}</ul>
      {/* <button className={s.add} onClick={handleClickAdd} title="Настройки">
        ⚙
      </button>
      <dialog ref={refPopup} onClick={handleClickDialog} className={s.popup}>
        <div className={s.popupWrapContent}>
          <span className={s.popupClose} onClick={closePopup}>
            ⊗
          </span>
          <div className={s.popupContent}>
            <span>Здесь будет доп функционал</span>
            <p>♞</p>
          </div>
        </div>
      </dialog> */}
      <input
        type="number"
        className={s.input}
        max={MAX_COUNT}
        min={MIN_COUNT}
        placeholder="px"
        value={valueRadioInput}
        onChange={handleChangeValueRadioInput}
        title={`Максимальное значение: ${MAX_COUNT}\nМинимальное значение: ${MIN_COUNT}\nЗначение в пикселях/px`}
      />
      px
    </div>
  );
};
