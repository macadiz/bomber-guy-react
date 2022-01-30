import { createContext, FC, useState } from "react";
import GameHandlerContextType, {
  MapDataType,
  PositionType,
} from "./GameHandlerContextType";

const defaultValue = {
  playerPos: {
    x: 0,
    y: 0,
  },
  mapData: [],
  changePlayerPos: () => {},
  setMap: () => {}
};

const GameHandlerContext = createContext<GameHandlerContextType>(defaultValue);

const GameHandlerContextProvider: FC = ({ children }) => {
  const [playerPos, setPlayerPos] = useState<PositionType>({ x: 3, y: 0 });
  const [mapData, setMapData] = useState<MapDataType>([]);

  const changePlayerPos = (position: PositionType) => {
    setPlayerPos(position);
  };

  const setMap = (mapData: MapDataType) => {
    setMapData(mapData);
  }

  return (
    <GameHandlerContext.Provider
      value={{
        playerPos,
        mapData,
        changePlayerPos,
        setMap
      }}
    >
      {children}
    </GameHandlerContext.Provider>
  );
};

export { GameHandlerContext, GameHandlerContextProvider };
