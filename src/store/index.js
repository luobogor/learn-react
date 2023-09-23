import { createStore } from 'redux'

const defaultState = 0;


// 之所有叫 reducer，是因为这个函数可以当作 reduce 方法的第一个参数
function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload
    case 'SUB':
      return state - action.payload
    default:
      return state
  }
}

const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 }
];


// export const store = createStore(counterReducer)
const total = actions.reduce(counterReducer, 0)

console.log(total)