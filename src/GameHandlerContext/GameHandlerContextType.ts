type GameHandlerContextType = {
    playerPos: PlayerPosType,
    mapData: MapDataType,
    changePlayerPos: (x: number, y: number) => void
};

export type PlayerPosType = {
    x: number,
    y: number
}

export type MapDataType = Array<Array<number>>;

export default GameHandlerContextType;