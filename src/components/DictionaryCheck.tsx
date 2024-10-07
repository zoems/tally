import React, { useState } from "react";
import { fetchWordDefinition } from "./fetchWordDefinition";

const DictionaryCheck: React.FC = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const result = await fetchWordDefinition(word);
      setDefinition(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching word definition:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Check Word</button>
      {definition && (
        <div>
          <ul>
            Definitions:
            {definition.shortdef.map((def: string, index: number) => (
              <li key={index}>{def}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DictionaryCheck;
