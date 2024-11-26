import { ChangeEvent, FC, memo } from "react";
import cs from "clsx";
import s from "./styles.module.scss";

interface Props {
  value: string;

  onChange: (value: string) => void;

  onClick: () => void;

  className?: string;
}

export const Display: FC<Props> = memo((props) => {
  const { value, onChange, className, onClick } = props;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("event.target", event.target);

    onChange(event.target.value);
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <div className={cs(s.wrap, className)} onClick={handleClick}>
      <span className={s.value}>{value}</span>
      <textarea
        className={s.area}
        value={value}
        onChange={handleChange}
        readOnly
      />
    </div>
  );
});
