function Todo({ task, description, toggleDelete }) {

  return (
    <div className="todo-card">
      <h2>{task}</h2>
      <p>{description}</p>
      <button onClick={() => toggleDelete()}>Delete</button>
    </div>
  );
}

export default Todo;
