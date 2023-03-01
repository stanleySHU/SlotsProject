import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { merge } from '../../core/lang';
import { Injector } from '../../core/injector';

import { user, userInitialState } from './user';
import { setting, settingInitialState } from './setting';
import { spin, spinInitialState } from './spin';
import { KEY_ACTION_REDUCERS, KEY_ACTION_REDUCERS_INIT, KEY_ACTION_USER, KEY_ACTION_USER_INIT, KEY_ACTION_SETTING, KEY_ACTION_SETTING_INIT,
    KEY_ACTION_SPIN, KEY_ACTION_SPIN_INIT } from './actionTypes';

import { sceneManager, sceneManagerInitialState } from '../../reducers/sceneManager';
import { KEY_ACTION_SCENE, KEY_ACTION_SCENE_INIT } from '../../reducers/actionTypes';

function getCombineReducers() {
    let injector = Injector.Obj;
    let r_user = injector.get(KEY_ACTION_USER) || user;
    let r_setting = injector.get(KEY_ACTION_SETTING) || setting;
    let r_spin = injector.get(KEY_ACTION_SPIN) || spin;
    let r_scene = injector.get(KEY_ACTION_SCENE) || sceneManager;
    let r: {[key: string]: any} = injector.get(KEY_ACTION_REDUCERS);
    return combineReducers({r_user, r_setting, r_spin, r_scene, ...r});
}

function getInitState() {
    let injector = Injector.Obj;
    let r_user = injector.get(KEY_ACTION_USER_INIT) || userInitialState;
    let r_setting = injector.get(KEY_ACTION_SETTING_INIT) || settingInitialState;
    let r_spin = injector.get(KEY_ACTION_SPIN_INIT) || spinInitialState;
    let r_scene = injector.get(KEY_ACTION_SCENE_INIT) || sceneManagerInitialState;
    let r = injector.get(KEY_ACTION_REDUCERS_INIT) || {};
    return merge(r_user, r_setting, r_spin, r_scene, ...r);
}

export function getStore() {
    return configureStore({
        reducer: getCombineReducers(),
        preloadedState: getInitState()
    });
}