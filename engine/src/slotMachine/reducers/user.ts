import { ACTION_SIGN_IN, ACTION_BALANCE_CHANGED, ACTION_GET_BALANCE } from "./actionTypes"

export const user = (state: any = {}, action) => {
    switch (action.type) {
        case ACTION_SIGN_IN:
            return {
                //update name, is test accounr, currency
            }
        case ACTION_GET_BALANCE:
            return {    //map currency and amount {'rmb': 100}
                ...state,
                amount: action.amount,
                currency: action.currency
            }
        case ACTION_BALANCE_CHANGED: 
            return {    //update amount by current currency
                ...state,
                amount: action.amount,
            }
        default:
            return state
    }
}

export const userInitialState = {
    memberName: 'w88',
    currency: 'RMB',
    isTestAccount: 'true',
    amount: 0
}