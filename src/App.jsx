import { useState, useCallback } from "react";
import SearchPeople from "./SearchPeople";

const listOfNames = [
  "James Mower",
  "Tommie Theron",
  "Luke Brown",
  "Mary Cooper",
  "Richard Panman",
  "Rebecca McCarthy",
  "Anthony Bold",
  "Terry Proops",
  "Andrew Frost",
  "Chris Durham",
  "Brendan Sheehan",
];

function App() {
  const [people, setPeople] = useState(listOfNames);

  const handleSearch = useCallback(
    (searchString) => {
      const displayNames = listOfNames.filter((person) =>
        person.toLocaleLowerCase().includes(searchString)
      );
      setPeople(displayNames);
    },
    [people]
  );

  const addButton = () => {
    const bt = document.querySelector(".buttonContainer");
    const eb = document.createElement("button");
    eb.innerHTML = "X";
    bt.appendChild(eb);
  };

  return (
    <div className="grid justify-center content-center select-none w-screen">
      <SearchPeople handleSearch={handleSearch} />
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      <div className="buttonContainer">
        <button className="firstButton" onClick={addButton}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
