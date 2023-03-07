import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="App">
      <h1>Gif Explorer App</h1>
      <hr />

      <AddCategory categories={categories} setCategories={setCategories} />

      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              type="button"
              className="btn btn-outline-primary"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {selectedCategory && <GifGrid category={selectedCategory} />}
    </div>
  );
}

export default App;
