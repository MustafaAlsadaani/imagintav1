export const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

export const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[0-9\s-]{5,15}$/;

export function isValidEmail(value: string) {
  return emailPattern.test(value);
}

export function isValidPhone(value: string) {
  if (!value) return true;
  return phonePattern.test(value);
}

