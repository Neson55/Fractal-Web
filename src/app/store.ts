import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { githubApiSlice } from "../features/Slice/GitHubApiSlice"
import { storageSlice } from "../features/Slice/storageSlice"


const rootReducer = combineSlices( githubApiSlice, storageSlice)

export type RootState = ReturnType<typeof rootReducer>


export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(githubApiSlice.middleware)
    },
    preloadedState,
  })
  
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()


export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]

