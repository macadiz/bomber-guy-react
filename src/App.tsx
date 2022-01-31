import React, { useEffect } from "react";
import "./App.css";
import { MapDataType } from "./Components/GameHandlerContext/GameHandlerContextType";
import useGameHandler from "./Components/GameHandlerContext/Hook/useGameHandler";
import GameObject from "./Components/GameObject";
import Player from "./Components/Player";

const defaultMapData: MapDataType = [
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
        value: {
          isSolid: true,
          value: 100,
        },
      },
      {
        id: 3,
        value: 110,
      },
      {
        id: 4,
        value: 100,
      },
      {
        id: 5,
        value: 110,
      },
    ],
  },
];

function App() {
  const { setMap, mapData } = useGameHandler();

  useEffect(() => {
    setMap(defaultMapData);
  }, [setMap]);

  return (
    <div className="map-grid">
      {mapData.map((mapRow, rowIndex) => {
        return (
          <div className="map-row" key={`map-row-${mapRow.id}`}>
            {mapRow.cells.map((mapCell, cellIndex) => {
              if (typeof mapCell.value === "number") {
                return (
                  <div
                    className={`map-cell tile-${mapCell.value}`}
                    key={`map-row-${mapRow.id}-cell-${mapCell.id}`}
                  />
                );
              } else {
                return (
                  <>
                    <div
                      className={`map-cell tile-${mapCell.value.value}`}
                      key={`map-row-${mapRow.id}-cell-${mapCell.id}`}
                    />
                    <GameObject
                      position={{ x: cellIndex, y: rowIndex }}
                      type="obstacle"
                      isSolid={mapCell.value.isSolid}
                      tileValue={mapCell.value.value}
                    />
                  </>
                );
              }
            })}
          </div>
        );
      })}
      <Player />
    </div>
  );
}

export default App;
