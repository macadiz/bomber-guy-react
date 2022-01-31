import { ForwardedRef } from "react";
import { PositionType } from "../GameHandlerContext/GameHandlerContextType";

type GameObjectProps = {
    type: "obstacle" | "enemy" | "player",
    isSolid: boolean,
    position: PositionType,
    tileValue?: number,
    ref?: ForwardedRef<HTMLDivElement>
}

export default GameObjectProps;