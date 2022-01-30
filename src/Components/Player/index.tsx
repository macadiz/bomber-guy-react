import { useCallback, useEffect, useRef } from "react";
import useGameHandler from "../GameHandlerContext/Hook/useGameHandler";
import GameObject from "../GameObject";

const Player = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { playerPos, changePlayerPos } = useGameHandler();

  const upKeyPress = useCallback(() => {
    const newPlayerPos = { ...playerPos, y: playerPos.y - 1 };
    changePlayerPos(newPlayerPos);
  }, [playerPos, changePlayerPos]);

  const downKeyPress = useCallback(() => {
    const newPlayerPos = { ...playerPos, y: playerPos.y + 1 };
    changePlayerPos(newPlayerPos);
  }, [playerPos, changePlayerPos]);

  const leftKeyPress = useCallback(() => {
    const newPlayerPos = { ...playerPos, x: playerPos.x - 1 };
    changePlayerPos(newPlayerPos);
  }, [playerPos, changePlayerPos]);

  const rightKeyPress = useCallback(() => {
    const newPlayerPos = { ...playerPos, x: playerPos.x + 1 };
    changePlayerPos(newPlayerPos);
  }, [playerPos, changePlayerPos]);

  useEffect(() => {
    const keyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp": {
          upKeyPress();
          break;
        }
        case "ArrowDown": {
          downKeyPress();
          break;
        }
        case "ArrowLeft": {
          leftKeyPress();
          break;
        }
        case "ArrowRight": {
          rightKeyPress();
          break;
        }
      }
    };

    console.log("?", ref);
    
    document.addEventListener("keydown", keyPress);

    return () => {
        document.removeEventListener("keydown", keyPress);
    }

  }, [upKeyPress, downKeyPress, leftKeyPress, rightKeyPress]);

  return <GameObject type="player" position={playerPos} ref={ref} isSolid />;
};

export default Player;
