import React, { FC, ForwardedRef, forwardRef } from "react";
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

const GameObject: FC<GameObjectProps> = forwardRef(
  (
    { type, position, isSolid, tileValue },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const positionInline = calculatePosition(defaultSize, position);

    return (
      <div
        className="game-object-wrapper"
        style={{ ...positionInline }}
        ref={ref}
      >
        <div
          className={`game-object ${type} ${isSolid ? "solid" : ""} ${
            tileValue ? `tile-${tileValue}` : ""
          }`}
        />
      </div>
    );
  }
);

export default GameObject;
