export type Device = "mobile" | "desktop";

/** Возвращает размер девайся, вспомогательная функция для компоненты DefaultValue */
export const getDevice = (screenSize = 1440): Device => {
  return screenSize > 768 ? "desktop" : "mobile";
};
