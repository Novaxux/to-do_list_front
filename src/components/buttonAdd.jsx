import SubmitIcon from "../assets/submit.svg";
const buttonAdd = () => {
  return (
    <button type="submit" className="addBtn">
      <img src={SubmitIcon} alt="submit" />
    </button>
  );
};

export default buttonAdd;
