import { action, createStore } from 'easy-peasy';
import { generate } from "random-words";

export const store = createStore({
  words: [],
  correctWord : "",
  tries : 6,
  win : false,
  lose : false,
  Start : action((state)=> {
    state.correctWord = generate({ minLength: 5, maxLength: 5 })
    console.log("new word : ", state.correctWord);
  }),
  Verify : action((state, payload)=> {
    if (payload === state.correctWord)
      state.win = true;
    else if (state.tries - 1 === 0) {
      state.lose = true;
      state.tries--;
    }
    else if (payload.length === 5) {
        state.words.push(payload);
        state.tries--;
    }
  }),
  Reset : action((state)=> {
    state.words = [];
    state.tries = 6;
    state.win = false;
    state.lose = false;
  })
});