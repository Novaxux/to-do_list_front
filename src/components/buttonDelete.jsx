const ButtonDelete = ({ onClick }) => {
  return (
    <button className="deleteTaskBtn" onClick={onClick}>
      🗑
    </button>
  );
}
export default ButtonDelete;
