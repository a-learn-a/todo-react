import { createStore } from 'redux'
import rootReducer from '../reducers'
import { IState } from '../types'

function saveToLocalStorage(state: IState) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export const store = createStore(rootReducer, loadFromLocalStorage())
store.subscribe(() => saveToLocalStorage(store.getState()))
