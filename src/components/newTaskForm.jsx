import ButtonAdd from "./buttonAdd";

const newTaskForm = ({ value, onChange, onSubmit }) => {
  return (
    <form className="newTaskForm" onSubmit={onSubmit}>
      <textarea
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a new task"
        maxLength={200}
      />
      <ButtonAdd />
    </form>
  );
};

export default newTaskForm;
