import { atom, createStore } from "jotai";

export const participantListAtom = atom<any[]>([]);

const store = createStore();

store.set(participantListAtom, []);

export default store;
