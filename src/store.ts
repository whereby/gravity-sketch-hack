import { atom, createStore } from "jotai";

export const participantListAtom = atom<any[]>([]);
export const isConnectedAtom = atom<boolean>(false);

const store = createStore();

store.set(participantListAtom, []);

export default store;
