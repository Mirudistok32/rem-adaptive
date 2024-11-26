import { FC, memo } from "react";
import cs from "clsx";
import { calcRem } from "@/shared/utils/calcRem";
import { createCountArray } from "@/shared/utils/createArray";
import { Device, getDevice } from "@/shared/utils/getDeviceю";
import { copyText } from "@/shared/utils/copyText";
import s from "./styles.module.scss";

interface Props {
  className?: string;

  /** Количество значений в таблице, по умолчанию 100 */
  defaultValue?: number;

  /** Размер экрана, по умолчанию 1440 */
  screenSize?: number;

  /** Принимает значение, элемента на который нажали */
  onClickItem?: (
    px: number,
    rem: string,
    screenSize: number,
    device: Device
  ) => void;
}

export const DefaultValue: FC<Props> = memo((props) => {
  const {
    onClickItem,
    defaultValue = 100,
    screenSize = 1440,
    className,
  } = props;

  const handleClick = (count: number) => {
    const rem = calcRem(count, screenSize);

    copyText(`${rem}rem`);

    if (onClickItem) {
      onClickItem(count, rem, screenSize, getDevice(screenSize));
    }
  };

  const renderList = createCountArray(defaultValue).map((count) => {
    return (
      <li
        key={defaultValue + count}
        className={s.item}
        onClick={() => handleClick(count)}
        title="Кликни и скопируй в rem"
      >
        {count}
      </li>
    );
  });

  return (
    <div className={cs(s.wrap, className)}>
      <span className={s.title}>
        Нажми и скопируй. Размеры для экрана {screenSize}, значения в px:
      </span>
      <ul className={s.list}>{renderList}</ul>
    </div>
  );
});
