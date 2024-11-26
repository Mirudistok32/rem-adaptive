import { DefaultValue } from "@/enteties/default-value";
import { Display } from "@/enteties/display";
import { FC, useCallback, useState } from "react";
import s from "./styles.module.scss";
import { Device, getDevice } from "@/shared/utils/getDeviceю";
import { copyText } from "@/shared/utils/copyText";
import { Controls } from "@/features/controls";
import { OnChangeValueRadioInputProps } from "@/enteties/radio";
import { calcRem } from "@/shared/utils/calcRem";
import { Horse } from "@/enteties/horse";

export const Main: FC = () => {
  const [valueRem, setValueRem] = useState("");
  const [valueVar, setValueVar] = useState("");
  const [valueFullVar, setValueFullVar] = useState("");
  const [valueRadioInput, setValueRadioInput] = useState(1);

  const handleChangeValueRadioInput = ({
    count,
    screenSize,
  }: OnChangeValueRadioInputProps) => {
    console.log("count", count);

    const rem = calcRem(count, screenSize);

    handleClickDefaultValue(count, rem, screenSize, getDevice(screenSize));

    setValueRadioInput(count);
  };

  const handleChangeRem = (value: string) => {
    setValueRem(value);
  };

  const handleChangeVar = (value: string) => {
    setValueVar(value);
  };

  const handleClickDefaultValue = useCallback(
    (px: number, rem: string, screenSize: number, device: Device) => {
      const remStr = `${rem}rem;`;

      if (remStr === valueRem) return;

      setValueRem(remStr);
      setValueVar(`
      --rem-${device}-${screenSize}-in-${px}px: ${rem}rem;\n
      `);
      setValueFullVar(`
      var(--rem-${device}-${screenSize}-in-${px}px);\n
      `);
    },
    [valueRem]
  );

  const handleClickRemBtn = () => {
    if (valueRem === "") return;

    copyText(valueRem);
  };

  const handleClickVarBtn = () => {
    if (valueVar === "") return;

    copyText(valueVar);
  };

  const handleClickFullVarBtn = () => {
    if (valueFullVar === "") return;

    copyText(valueFullVar);
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.wrapDisplay}>
          <Display
            className={s.display}
            onChange={handleChangeRem}
            value={valueRem}
            onClick={handleClickRemBtn}
          />
          <Display
            className={s.display}
            onChange={handleChangeVar}
            value={valueVar}
            onClick={handleClickVarBtn}
          />
          <Display
            className={s.display}
            onChange={handleClickFullVarBtn}
            value={valueFullVar}
            onClick={handleClickFullVarBtn}
          />
        </div>
        <Controls
          className={s.controls}
          valueRadioInput={valueRadioInput}
          onChangeValueRadioInput={handleChangeValueRadioInput}
        />
        <DefaultValue
          onClickItem={handleClickDefaultValue}
          className={s.wrapDefaultLeft}
        />
        <DefaultValue
          onClickItem={handleClickDefaultValue}
          screenSize={360}
          className={s.wrapDefaultRight}
        />
      </div>

      <Horse text="Мобилки нет" classNameWrap={s.wrapHorse} />
    </>
  );
};

/**
 * Экраны 1440 и 360
 * ввожу пиксиль он мне:
 * rem и шаблон переменной в css
 * хочу задавать свой шаблон
 * хочу задавать свои расширения
 * список частых от 1 до 100
 *
 * var(--)
 * --
 * 0
 */

//  --rem-desktop-1440-in-800px: 55.5555555rem;
// --rem-mobile-360-in-1px: 0.27777778rem;
