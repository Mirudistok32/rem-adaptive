import { FC } from "react";
import cs from "clsx";
import s from "./styles.module.scss";

interface Props {
  text: string;

  classNameWrap?: string;
}

export const Horse: FC<Props> = ({ text, classNameWrap }) => {
  return (
    <div className={cs(s.wrap, classNameWrap)}>
      <span className={s.text}>{text}</span>
      <div className={s.horse}>♞</div>
    </div>
  );
};
