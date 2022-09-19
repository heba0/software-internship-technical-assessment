export function luhn(creditCardNo: string): boolean {
  let sum = 0;
  let even = false;
  for (let i: number = (creditCardNo.length - 1); i >= 0; i--) {
    let digit = Number(creditCardNo.charAt(i));

    if (even) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    even = !even;
  }

  if (sum % 10 == 0) {
    return true;
  }
  return false;
}
