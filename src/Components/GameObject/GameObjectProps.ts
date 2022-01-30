import { PositionType } from "../GameHandlerContext/GameHandlerContextType";

type GameObjectProps = {
    type: "obstacle" | "enemy" | "player",
    isSolid: boolean,
    position: PositionType
}

export default GameObjectProps;