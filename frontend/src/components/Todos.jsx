import { useEffect } from "react";

/* eslint-disable react/prop-types */
export function Todos({ todos }) {
  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = (id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async function (res) {
      const json = await res.json();
      console.log(json._id);
      alert("todo marked as complete, please refresh the page");
    });
  };

  console.log(todos);
  return (
    <div className="container">
      {todos.map(function (todo, i) {
        return (
          <div key={i} className="card">
            <div className="card-content">
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={() => handleClick(todo._id)}>
                {todo.completed == true ? "Completed" : "Mark as complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
