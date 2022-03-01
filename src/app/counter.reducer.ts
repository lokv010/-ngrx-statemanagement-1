import{createReducer,on} from '@ngrx/store'
import{increment,decrement,reset} from '././counter.action'

export const initialState=0;
const _counterreducer=createReducer(initialState,
    on(increment,(state)=>state+1),
    on(decrement,(state)=>state-1),
    on(reset,(state)=>0));

    export function counterreducer(state,action){
      return _counterreducer(state,action)
    }
