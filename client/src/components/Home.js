import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('http://localhost:5002/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, userId }),
      });

      const data = await response.json();
      console.log('Server response:', data); // Log the response to check its structure
      setResponse(data.scrapedData); 
    } catch (err) {
      setError('Failed to scrape the website. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 bg-transparent border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
            placeholder="Input the URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full p-3 bg-teal-500 hover:bg-teal-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            onClick={handleScrape}
            disabled={loading}
          >
            {loading ? 'Scraping...' : 'Scrape it!'}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {response && (
          <div className="bg-gray-800 p-4 rounded mt-4">
            <h2 className="text-xl font-bold mb-4">Scraped Data</h2>
            <div>
              <h3 className="text-lg font-semibold">Title:</h3>
              <p className="mb-2">{response.pageTitle || 'No title found'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Headings:</h3>
              {response.headings.length > 0 ? (
                <ul className="list-disc list-inside mb-2">
                  {response.headings.map((heading, index) => (
                    <li key={index}>{heading}</li>
                  ))}
                </ul>
              ) : (
                <p>No headings found</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Paragraphs:</h3>
              {response.paragraphs.length > 0 ? (
                <ul className="list-disc list-inside mb-2">
                  {response.paragraphs.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              ) : (
                <p>No paragraphs found</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Links:</h3>
              {response.links.length > 0 ? (
                <ul className="list-disc list-inside mb-2">
                  {response.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No links found</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Images:</h3>
              {response.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {response.images.map((image, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={image.src}
                        alt={image.alt || 'No alt text'}
                        className="max-w-full h-auto mb-2"
                      />
                      <p className="text-sm text-gray-400">{image.alt || 'No alt text'}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No images found</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
