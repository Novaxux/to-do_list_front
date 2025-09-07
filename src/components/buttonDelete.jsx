const ButtonDelete = ({ onClick }) => {
  return (
    <button className="deleteTaskBtn" onClick={onClick}>
      <img src="icons/eraser.svg" alt="eraser" />
    </button>
  );
};
export default ButtonDelete;
