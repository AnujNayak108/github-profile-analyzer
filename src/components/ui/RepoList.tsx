import React, { useEffect, useState } from 'react';

export default function RepoList({ username }: { username: string }) {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(setRepos);
  }, [username]);

  return (
    <div className='p-8'>
      <h2 className="text-3xl font-bold text-white mb-3">Repositories</h2>
      <ul className="space-y-2">
  {repos.map(repo => (
    <li key={repo.id}>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline transition"
      >
        {repo.name}
      </a>
    </li>
  ))}
</ul>
    </div>
  );
}