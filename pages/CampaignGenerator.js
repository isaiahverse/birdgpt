import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [ideas, setIdeas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/generate_campaign_ideas', { prompt });
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
      <h1>Welcome to the Twitter Marketing Expert</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a prompt for the marketing campaign"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Generate Campaign Ideas</button>
      </form>
      <div className="ideas">
        {ideas.map((idea, index) => (
          <div key={index} className="idea">
            {index + 1}. {idea}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
