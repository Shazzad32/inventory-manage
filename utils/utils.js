// export const calculateAmount=devices=>{
//     return devices.reduce((accumulator, currentValue) => accumulator + currentValue.device_price, 0);
// }

export const calculateAmount = (devices = []) => {
  return devices.reduce((acc, curr) => {
    const price = parseFloat(curr.device_price);
    return acc + (isNaN(price) ? 0 : price);
  }, 0);
};

export const monthlyAmount = (devices) => {
  return devices.reduce((accumulator, currentValue) => {
    const price = parseFloat(currentValue.device_price) || 0;
    return accumulator + price;
  }, 0);
};
