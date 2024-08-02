import { useState } from 'react';
import axios from 'axios';
import './InputForm.css'; // Make sure to import the new CSS file

function InputForm({ setResponseData }) {
  
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setError('');
      const parsedData = JSON.parse(inputData);
      const response = await axios.post('http://localhost:5000/bfhl', parsedData);
      setResponseData(response.data);
    } catch (err) {
      setError('Invalid JSON input or request failed.');
    }
  };

  return (
    <div className="input-form-container">
      <textarea
        className="input-textarea"
        rows="5"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder='{"data": ["A", "B", "1"]}'
      />
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default InputForm;
