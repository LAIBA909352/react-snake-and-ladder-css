import Board from "./Board";
import Overlay from "./Overlay";

export default function BoardContainer() {
  return (
<>
    <div className="board-container">
      <Board />
      <Overlay />
    </div>
    </>
  );
}