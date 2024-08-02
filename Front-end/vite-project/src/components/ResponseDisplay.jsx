import { useState } from 'react';

function ResponseDisplay({ data }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Response Data</h2>
      <select
        multiple
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleOptionChange}
      >
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_alphabet">Highest Alphabet</option>
      </select>
      {selectedOptions.includes('alphabets') && (
        <div>
          <h3 className="font-bold">Alphabets</h3>
          <p>{JSON.stringify(data.alphabets)}</p>
        </div>
      )}
      {selectedOptions.includes('numbers') && (
        <div>
          <h3 className="font-bold">Numbers</h3>
          <p>{JSON.stringify(data.numbers)}</p>
        </div>
      )}
      {selectedOptions.includes('highest_alphabet') && (
        <div>
          <h3 className="font-bold">Highest Alphabet</h3>
          <p>{JSON.stringify(data.highest_alphabet)}</p>
        </div>
      )}
    </div>
  );
}

export default ResponseDisplay;