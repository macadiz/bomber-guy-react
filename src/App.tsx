import React, { useEffect } from "react";
import "./App.css";
import useGameHandler from "./Components/GameHandlerContext/Hook/useGameHandler";
import GameObject from "./Components/GameObject";

const defaultMapData = [
  {
    id: 1,
    cells: [
      {
        id: 1,
        value: 100,
      },
      {
        id: 2,
        value: 110,
      },
      {
        id: 3,
        value: 100,
      },
      {
        id: 4,
        value: 110,
      },
    ],
  },
  {
    id: 2,
    cells: [
      {
        id: 1,
        value: 110,
      },
      {
        id: 2,
        value: 100,
      },
      {
        id: 3,
        value: 110,
      },
      {
        id: 4,
        value: 100,
      },
    ],
  },
];

function App() {
  const { setMap, mapData, playerPos } = useGameHandler();

  useEffect(() => {
    setMap(defaultMapData);
  }, [setMap]);

  return (
    <div className="map-grid">
      {mapData.map((mapRow) => {
        return (
          <div className="map-row" key={`map-row-${mapRow.id}`}>
            {mapRow.cells.map((mapCell) => {
              return (
                <div
                  className={`map-cell tile-${mapCell.value}`}
                  key={`map-row-${mapRow.id}-cell-${mapCell.id}`}
                />
              );
            })}
          </div>
        );
      })}
      <GameObject position={playerPos} type="player" isSolid={true} />
    </div>
  );
}

export default App;
