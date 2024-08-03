import { useRef, useState } from "react";

export const useMemoList = () => {
  const [memoList, setMemoList] = useState([])

  const textRef = useRef()

  const addClick = () => {
    if (textRef.current.value === "") return;
    setMemoList([...memoList, textRef.current.value]);
    textRef.current.value = null;
  };

  const deleteMemo = (index) => {
    const newMemos = [...memoList];
    newMemos.splice(index,1);
    setMemoList(newMemos);
  }

  return {textRef, memoList, addClick, deleteMemo}
}
