import  EraserIcon  from "../assets/icons/eraser.svg";

const ButtonDelete = ({ onClick }) => {
  return <button className="deleteTaskBtn" onClick={onClick}>
    <img src={EraserIcon} alt="eraser" />
  </button>;
};
export default ButtonDelete;
