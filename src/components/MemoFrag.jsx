export const MemoFrag = ({memoList, deleteMemo}) => {

  return (
    <div style={{border: "solid 1px #000", padding:"2px", margin:"16px"}}>
      <p style={{marginLeft:"10px"}}>メモ一覧</p>
      <ul>
        {memoList.map((memo, index) => (
          <li key={index}>
            <span>{memo}</span>
            <button onClick={() => deleteMemo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
