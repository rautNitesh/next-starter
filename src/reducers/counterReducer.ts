import { CounterAction, CounterActionTypes } from '../actions/counterActions'

type Post = {
  id: number
  title: string
}

type Posts = Post[]
export interface CounterState {
  readonly count: number
  readonly posts?: Posts
  readonly post?: Post
}

const initialCounterState = {
  count: 0,
}

/**
 * Counter Reducer
 */
export const counterReducer = (
  state: CounterState = initialCounterState,
  action: CounterAction
): CounterState => {
  const { count } = state

  const { payload } = action
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: count + 1,
      }
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0,
      }
    case CounterActionTypes.ADD_POSTS:
      return {
        ...state,
        posts: payload,
      }
    case CounterActionTypes.ADD_POST:
      return {
        ...state,
        post: payload,
      }
    case CounterActionTypes.RESET:
      return initialCounterState
    default:
      return state
  }
}
