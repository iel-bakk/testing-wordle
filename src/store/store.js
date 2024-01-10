import { action, createStore } from 'easy-peasy';

export const store = createStore({
  words: [],
  tries : 0,
  win : false,
  Verify : action((state, payload)=> {
    if (payload.length === 5) {
        state.words.push(payload);
        state.tries++;
    }
  })
});