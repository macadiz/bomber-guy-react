import React, { FC } from "react";
import { PositionType } from "../GameHandlerContext/GameHandlerContextType";
import GameObjectProps from "./GameObjectProps";
import "./GameObject.css";

const defaultSize = 50;

const calculatePosition = (size: number, position: PositionType) => {
  return {
    top: `${defaultSize * position.y}px`,
    left: `${defaultSize * position.x}px`,
  };
};

const GameObject: FC<GameObjectProps> = ({ type, position, isSolid }) => {
  const positionInline = calculatePosition(defaultSize, position);

  return (
    <div className="game-object-wrapper" style={{ ...positionInline }}>
      <div
        className={`game-object ${type} ${isSolid ? "solid" : ""}`}
      />
    </div>
  );
};

export default GameObject;
