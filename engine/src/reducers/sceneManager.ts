import { ACTION_SCENE_PUSH, ACTION_SCENE_POP, ACTION_SCENE_REPLACE, ACTION_SCENE_TO_ROOT } from './actionTypes';

export const sceneManager = (state: any = {}, action) => {
    switch (action.type) {
        case ACTION_SCENE_PUSH: 
            return {
                ...state
            }
        case ACTION_SCENE_POP:
            return {
                ...state
            }
        case ACTION_SCENE_REPLACE: 
            return {
                ...state
            }
        case ACTION_SCENE_TO_ROOT:
            return {
                ...state
            }
        default:
            return state
    }
}

export const sceneManagerInitialState = {
    scenes: []
}