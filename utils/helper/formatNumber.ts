export const thousandSeparatorWithCurrency = (x: string | number) => {
  return `IDR ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export const thousandSeparator = (x: string | number) => {
  return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export const thousandSeparatorComma = (x: string | number) => {
  return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
