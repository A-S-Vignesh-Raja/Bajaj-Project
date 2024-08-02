import  { useState } from 'react';
import axios from 'axios';

function InputForm({ setResponseData }) {
  
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setError('');
      const parsedData = JSON.parse(inputData);
      const response = await axios.post('https://localhost:3000/bfhl', parsedData);
      setResponseData(response.data);
    } catch (err) {
      setError('Invalid JSON input or request failed.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="5"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder='{"data": ["A", "B", "1"]}'
      />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default InputForm;