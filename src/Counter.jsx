import { useState } from "react";

function Counter() {


// User state: create a user state with name and age (object)

  const [user, setUser] = useState({ name: "Iman", age: 17 });
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Counter: {user.age} {user.name}
      </h1>

      {/* Update user age */}


      <button

// Increment user age by 1.
// ... means: keep the name property as it is, only update age.
// pass user to setUser (paramenter: prevUser)

        onClick={() => {
          setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1,
          }));
        }}
      >
        Change Age 
      </button>

      <div >
        <p>Count: {count}</p>

        {/* Increment */}
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

        {/* Decrement */}
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>

        {/* Reset */}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;