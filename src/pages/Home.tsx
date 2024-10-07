import React from "react";
import DictionaryCheck from "../components/DictionaryCheck";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-4xl font-bold text-white">Home</h1>
      <DictionaryCheck />
    </div>
  );
};

export default Home;
