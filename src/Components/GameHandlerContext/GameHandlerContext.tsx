import { createContext, FC, useState } from "react";
import GameHandlerContextType, {
  MapDataType,
  PositionType,
  GameObjectType,
} from "./GameHandlerContextType";

const defaultValue = {
  playerPos: {
    x: 0,
    y: 0,
  },
  mapData: [],
  changePlayerPos: () => {},
  setMap: () => {},
};

const GameHandlerContext = createContext<GameHandlerContextType>(defaultValue);

const GameHandlerContextProvider: FC = ({ children }) => {
  const [playerPos, setPlayerPos] = useState<PositionType>({ x: 3, y: 0 });
  const [mapData, setMapData] = useState<MapDataType>([]);

  const changeObjectPosition = (
    position: PositionType,
    changePositionFunction: (position: PositionType) => void
  ) => {
    let collide = false;
    mapData.forEach((mapRow, rowIndex) => {
      mapRow.cells.forEach((mapCell, cellIndex) => {
        if (typeof mapCell.value === "object") {
          if (
            mapCell.value.isSolid &&
            position.x === cellIndex &&
            position.y === rowIndex
          ) {
            collide = true;
          }
        }
      });
    });

    if (position.y >= mapData.length || position.y < 0 || position.x < 0 || position.x >= mapData[position.y].cells.length ) {
      collide = true;
    }

    if (!collide) {
      changePositionFunction(position);
    }
  };

  const changePlayerPos = (position: PositionType) => {
    changeObjectPosition(position, setPlayerPos);
  };

  const setMap = (mapData: MapDataType) => {
    setMapData(mapData);
  };

  return (
    <GameHandlerContext.Provider
      value={{
        playerPos,
        mapData,
        changePlayerPos,
        setMap,
      }}
    >
      {children}
    </GameHandlerContext.Provider>
  );
};

export { GameHandlerContext, GameHandlerContextProvider };
