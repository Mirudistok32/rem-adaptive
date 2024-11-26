/** Создает массив заданной длины заполнены от 1 до count  */
export const createCountArray = (count: number) =>
  Array.from({ length: count }, (_, index) => ++index);
