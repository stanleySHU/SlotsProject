import { PixiComponent } from "@pixi/react";
import { Container } from "pixi.js";

export default PixiComponent('Scene', {
    create: props => {
        return new Container();
    }
});