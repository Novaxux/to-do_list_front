const newTaskInput = ({ value, onChange }) => {
  return (
    <input className="newTaskInput"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Add a new task"
    />
  );
};

export default newTaskInput;
