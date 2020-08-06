// middleware/localStorageLoad.js
import AsyncStorage from '@react-native-community/async-storage'

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    const result = JSON.parse(serializedState)
    delete result.router
    return result
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    AsyncStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}
