type GameHandlerContextType = {
    playerPos: PositionType,
    mapData: MapDataType,
    changePlayerPos: (x: number, y: number) => void,
    setMap: (mapData: MapDataType) => void
};

export type PositionType = {
    x: number,
    y: number
}

export type MapRowType = {
    id: number,
    cells: Array<MapCellType>
}

export type MapCellType = {
    id: number,
    value: number
}

export type MapDataType = Array<MapRowType>;

export default GameHandlerContextType;