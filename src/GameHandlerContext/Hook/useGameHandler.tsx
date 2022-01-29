import { useContext } from "react";
import { GameHandlerContext } from "../GameHandlerContext";

const useGameHandler = () => {
    return useContext(GameHandlerContext);
};

export default useGameHandler;