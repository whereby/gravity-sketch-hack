import { atom, createStore } from "jotai";

export const participantListAtom = atom([]);

const store = createStore();

store.set(participantListAtom, []);

export default store;
