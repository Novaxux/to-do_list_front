import DeleteIcon from "../assets/icons/eraser.svg";
const ButtonDelete = ({ onClick }) => {
  return (
    <button className="deleteTaskBtn" onClick={onClick}>
      <img src={ DeleteIcon } alt="eraser" />
    </button>
  );
};
export default ButtonDelete;