export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const UPDATE_LOGIN = 'UPDATE_LOGIN';

export const VALIDATE = 'VALIDATE';

export function updatePassword(payload) {
  return { type: UPDATE_PASSWORD, payload };
}
