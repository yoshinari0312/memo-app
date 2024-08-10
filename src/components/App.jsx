import { MemoFrag } from "./MemoFrag";
import { useMemoList } from "../hooks/useMemoList";


function App() {
  const {textRef, memoList, addClick, deleteMemo} = useMemoList();
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <input
          style={{margin: "8px", width: "20vw", height: "18px", fontSize: "16px"}}
          type="text"
          ref = {textRef}
        />
        <button
          style={{margin: "8px"}}
          onClick={addClick}>
          追加
        </button>
        <MemoFrag memoList={memoList} deleteMemo={deleteMemo}/>
      </div>
    </>
  );
};

export default App;
