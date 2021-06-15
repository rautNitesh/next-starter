import { Action } from 'redux'

type Post = {
  id: number
  title: string
}

type Posts = Post[]
export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  ADD_POSTS = 'ADD_POSTS',
  ADD_POST = 'ADD_POST',
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>
  | Action<CounterActionTypes.DECREMENT>
  | Action<CounterActionTypes.RESET>
  | { type: Action<CounterActionTypes.ADD_POSTS>; payload: Posts }
  | { type: Action<CounterActionTypes.ADD_POST>; payload: Post }

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT,
}

export const decrement: CounterAction = {
  type: CounterActionTypes.DECREMENT,
}

export const reset: CounterAction = {
  type: CounterActionTypes.RESET,
}

export const addPosts = (posts: Posts): any => ({
  type: CounterActionTypes.ADD_POSTS,
  payload: posts,
})

export const addPost = (post: Post): any => ({
  type: CounterActionTypes.ADD_POST,
  payload: post,
})
