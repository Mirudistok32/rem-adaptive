/** Рассчитываем rem на основе пикселей и размера экрана */
export const calcRem = (count: number, screenSize: number) => {
  return (count / (screenSize / 100)).toFixed(6);
};
