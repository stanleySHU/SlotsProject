import { ACTION_SOUND_OPEN, ACTION_VOLUME_CHANGED } from './actionTypes';

//soundOn 控制声音是否静音
//volume 音量

export const setting = (state: any = {}, action) => {
    switch(action.type) {
        case ACTION_SOUND_OPEN: 
            return {
                ...state
            }
        case ACTION_VOLUME_CHANGED:
            return {
                ...state
            }
        default:
            return state;
    }

}

export const settingInitialState = {
    soundOn: true,
    volume: 0.5
}