import  { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">JSON Data Processor</h1>
      <InputForm setResponseData={setResponseData} />
      {responseData && <ResponseDisplay data={responseData} />}
    </div>
  );
}

export default App;