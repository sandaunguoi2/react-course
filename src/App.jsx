import { useState, useEffect, use } from "react";
import "./App.css";
import Counter from "./Counter.jsx";
import Todo from "./Todo.jsx";
import Popup from "./Popup.jsx";
import AddArray from "./AddArray.jsx";

function App() {
 
  const [popupOpen, setPopupOpen] = useState(false);

  function handleDelete() {
    return setPopupOpen(true);
  }

 


  return (  
    <>
     
      <AddArray />
      <Counter />
      <div>
        <h1>To Do Title</h1>

        {/* Text Input */}
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        {/* Button to open popup */}
        <button onClick={() => setPopupOpen(true)}>Add to do</button>

        {/* Todo Items */}
        <Todo toggleDelete={handleDelete} task="Learn React"  description="Learn the basics of React including components, state, and props." />
        <Todo toggleDelete={handleDelete} task="Finish ASAP Frontend" description="Complete the frontend tasks as soon as possible." />
        <Todo toggleDelete={handleDelete} task="Land a junior job" description="Secure a junior developer position to gain professional experience."/>
        <Todo toggleDelete={handleDelete} task="Earn 100k+" description="Aim to earn a six-figure salary through skill development and job opportunities." />

        {/* Conditional popup */}
        {popupOpen && 
          <Popup
            title="Are you 10000000% sure?"
            onConfirm={() => setPopupOpen(false)}
            onCancel={() => setPopupOpen(false)}
          />
        }
      </div>
    </>
  );
}

export default App;
