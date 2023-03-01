import { Stage } from "@pixi/react";
import { ReactReduxContext } from 'react-redux';

import { getStore } from './reducers';

function getCommonContext() {
    return {
        store: getStore(),
        subscription: null
    }
}

export const App: typeof Stage = (({children, ...props}) => {
    return <ReactReduxContext.Provider value={getCommonContext()}>
        <Stage {...props}>
            {children}
        </Stage>
    </ReactReduxContext.Provider>
}) as any;
