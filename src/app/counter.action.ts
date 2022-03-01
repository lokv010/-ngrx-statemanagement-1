import{createAction} from '@ngrx/store'

export const increment =createAction('[hello] Increment')
export const decrement =createAction('[hello] Decrement')
export const reset =createAction('[hello] Reset')