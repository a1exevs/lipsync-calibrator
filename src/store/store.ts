import {
  configureStore,
  createAsyncThunk,
  createDraftSafeSelector,
  createDraftSafeSelectorCreator,
  weakMapMemoize,
} from '@reduxjs/toolkit';

import appReducer, { APP_SLICE_NAME } from 'src/store/slices/app/app.slice';

const store = configureStore({
  reducer: {
    [APP_SLICE_NAME]: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStore = typeof store;
export type AsyncThunkConfig = { state: RootState; dispatch: AppDispatch };
type CreateAsyncThunkParams<InputParams, ReturnValues> = Parameters<
  typeof createAsyncThunk<ReturnValues, InputParams, AsyncThunkConfig>
>;
export const createAppAsyncThunk = <InputParam = void, ReturnValues = void>(
  ...arg: CreateAsyncThunkParams<InputParam, ReturnValues>
) => createAsyncThunk<ReturnValues, InputParam, AsyncThunkConfig>(...arg);

// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.reactStore = store;

export const createTypedDraftSafeSelector = createDraftSafeSelector.withTypes<RootState>();
export const createWeakMapDraftSafeSelector = createDraftSafeSelectorCreator(weakMapMemoize);
export const selectSelf = (state: RootState) => state;

export default store;
