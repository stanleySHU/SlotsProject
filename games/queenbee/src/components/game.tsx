import { App } from '../../../../engine/src/slotMachine/App';
import { PreloadScene } from './preload';

export const Game = () => {
    return <App width={960} height={540} >
        <PreloadScene></PreloadScene>
    </App>
}