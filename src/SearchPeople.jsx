import { memo } from "react";

function SearchPeople({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search for people"
        onChange={(event) => handleSearch(event.target.value)}
        className="border-4 border-black-950 bg-blue-600 text-white p-2 mb-8"
      />
    </div>
  );
}

export default memo(SearchPeople);
