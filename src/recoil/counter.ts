import { atom } from 'recoil';

export const counter = atom<number>({
  key: 'countState',
  default: 0,
});
