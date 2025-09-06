import  EraserIcon  from "../assets/eraser.svg";

const ButtonDelete = ({ onClick }) => {
  return <button className="deleteTaskBtn" onClick={onClick}>
    <img src={EraserIcon}  />
  </button>;
};
export default ButtonDelete;
