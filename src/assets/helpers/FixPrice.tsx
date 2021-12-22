export const FixPrice = (price: number) => (Math.ceil(price * 100) / 100).toFixed(2).toString().replaceAll('.', ',')
