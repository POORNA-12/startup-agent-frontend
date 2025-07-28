import React, { useState } from 'react';

const BlueprintPortal = () => {
  const [idea, setIdea] = useState('');
  const [industry, setIndustry] = useState('Technology');
  const [blueprint, setBlueprint] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlueprint({
      marketAnalysis: 'Analyzing market trends and competitors...',
      legalRequirements: 'Checking legal compliances and regulations...',
      fundingOptions: 'Exploring venture capital and grants...',
      technologyStack: 'Recommending tech stack based on idea...'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white font-sans">
      <div className="container mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-blue-700 to-blue-500 p-8 rounded-lg shadow-lg">
            Startup Blueprint Portal
          </h1>
          <p className="text-gray-600 mt-2">Transform your idea into a actionable business plan</p>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enter Your Startup Idea</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Describe your startup idea in 1-2 sentences (e.g., An AI-powered health app for remote monitoring)..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            ></textarea>
            <select
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Generate Blueprint
            </button>
          </form>
        </section>

        {blueprint && (
          <section className="bg-white p-8 rounded-lg shadow-xl mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Generated Startup Blueprint</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-100 rounded-lg">
                <h3 className="font-medium text-red-800">Market Analysis</h3>
                <p className="text-gray-700">{blueprint.marketAnalysis}</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg">
                <h3 className="font-medium text-green-800">Legal Requirements</h3>
                <p className="text-gray-700">{blueprint.legalRequirements}</p>
              </div>
              <div className="p-4 bg-blue-100 rounded-lg">
                <h3 className="font-medium text-blue-800">Funding Options</h3>
                <p className="text-gray-700">{blueprint.fundingOptions}</p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <h3 className="font-medium text-purple-800">Technology Stack</h3>
                <p className="text-gray-700">{blueprint.technologyStack}</p>
              </div>
              <button
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Download as PDF
              </button>
            </div>
          </section>
        )}

        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md flex items-center">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">AI</span>
              <div>
                <h3 className="font-semibold text-orange-700">AI-Powered Research</h3>
                <p className="text-gray-600">Leverages advanced AI for market and competitor analysis.</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">💡</span>
              <div>
                <h3 className="font-semibold text-blue-700">Instant Blueprint</h3>
                <p className="text-gray-600">Generate a blueprint in seconds based on your input.</p>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-md flex items-center">
              <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">🏛️</span>
              <div>
                <h3 className="font-semibold text-red-700">Custom Legal Insights</h3>
                <p className="text-gray-600">Tailored legal advice for your industry and region.</p>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md flex items-center">
              <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">📊</span>
              <div>
                <h3 className="font-semibold text-purple-700">Investor-Ready Output</h3>
                <p className="text-gray-600">Professional reports to impress investors.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlueprintPortal;