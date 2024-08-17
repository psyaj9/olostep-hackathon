import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleScrape = () => {
    setResponse('Scraping result will be displayed here...');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 bg-transparent border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
            placeholder="Input the url here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full p-3 bg-teal-500 hover:bg-teal-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            onClick={handleScrape}
          >
            Scrape it!
          </button>
        </div>
        <div>
          <textarea
            className="w-full p-3 bg-transparent border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white h-64 text-gray-200 placeholder-gray-500"
            readOnly
            value={response}
            placeholder="The scraped data will appear here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
