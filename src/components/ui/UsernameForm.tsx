import React, { useState } from 'react';
import RepoList from './RepoList';
import CommitsChart from './CommitsChart';

export default function UsernameForm() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          className=" text-white flex-1 px-4 py-2 rounded-md border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          onClick={() => setSubmitted(true)}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
        >
          Analyze
        </button>
      </div>
      {submitted && (
        <div className="space-y-6 flex flex-row gap-20 bg-gradient-to-tr from-black to-blue-950 border rounded-2xl">
          <RepoList username={username} />
          <CommitsChart username={username} />
        </div>
      )}
    </div>
  );
}
