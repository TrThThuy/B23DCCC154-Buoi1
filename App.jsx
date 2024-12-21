import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <TodoList />
      <ImageSearch />
      <RandomColor />
    </div>
  );
}

// Todo List Component
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nội dung công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

// Image Search Component
function ImageSearch() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = () => {
    // API logic here (mocked for simplicity)
    if (query.trim()) {
      setImages(["https://via.placeholder.com/150"]);
    } else {
      setImages([]);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>Tìm kiếm hình ảnh</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm hình ảnh"
      />
      <button onClick={searchImages}>Tìm</button>
      <div>
        {images.length > 0 ? (
          images.map((img, index) => <img key={index} src={img} alt="Result" style={{ width: "100%" }} />)
        ) : (
          <p>Không tìm thấy hình ảnh.</p>
        )}
      </div>
    </div>
  );
}

// Random Color Component
function RandomColor() {
  const [color, setColor] = useState("white");
  const [history, setHistory] = useState([]);

  const changeColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
    setHistory([newColor, ...history]);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>Random Color</h2>
      <button onClick={changeColor}>Change Background Color</button>
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          height: "50px",
          backgroundColor: color,
          border: "1px solid #000",
        }}
      ></div>
      <h4>Color History:</h4>
      <ul>
        {history.map((c, index) => (
          <li key={index} style={{ color: c }}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


