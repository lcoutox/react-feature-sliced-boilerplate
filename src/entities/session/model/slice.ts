import { atom, selector } from "recoil";

const sessionState = atom({
  key: 'session',
  default: {
    accessToken: '',
    user: null,
    isAuthorized: false
  }
})

export const isAuthorizedSelector = selector({
  key: 'isAuthorized',
  get: ({ get }) => {
    const session = get(sessionState);
    return session.isAuthorized;
  },
});

export const userSelector = selector({
  key: 'userId',
  get: ({ get }) => {
    const session = get(sessionState);
    return session.user;
  },
});