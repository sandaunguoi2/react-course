function Todo({ task, description}) {
  function handleDelete() {
    console.log("Delete todo:", task);
  }

  return (
    <div className="todo-card">
      <h2>{task}</h2>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
