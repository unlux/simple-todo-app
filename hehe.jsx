/* eslint-disable react/prop-types */
import { useEffect } from "react";
export function Todos({ todos }) {
    useEffect(() => {
        handleClick()
    }, [todos]);
    // }

    const handleClick = (id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({ id: id }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async function (res) {
                const json = await res.json();
                console.log(json._id);
                alert("todo marked as complete");
            })
            .catch((error) => {
                console.error("Error marking todo as complete:", error);
            });
    }
    console.log(todos);
    return (
        <div>
            {todos.map(function (todo, i) {
                return (
                    <div key={i}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={handleClick(todo._id)}>
                            {todo.completed == true ? "Completed" : "Mark as complete"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
