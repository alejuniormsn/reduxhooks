import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    'ReactJS',
    'ReactNative',
    'NodeJs',
    'Redux'
  ]
}

function coursesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.payload.title] }
    default:
      return state
  }
}

const store = createStore(coursesReducer)

export default store