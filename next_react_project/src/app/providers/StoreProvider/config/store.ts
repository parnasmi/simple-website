import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { userReducer } from '../../../../entities/User/model/slice/userSlice';
import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
