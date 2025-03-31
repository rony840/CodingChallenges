export const formatMoney = (amount) => {
    return "$" + amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
let amt = 1231312412.3242
  console.log(formatMoney(amt))