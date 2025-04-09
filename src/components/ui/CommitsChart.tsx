import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function CommitsChart({ username }: { username: string }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const mockData = [
      { date: '2024-04-01', commits: 4 },
      { date: '2024-04-02', commits: 6 },
      { date: '2024-04-03', commits: 2 },
      { date: '2024-04-04', commits: 8 },
    ];
    setData(mockData);
  }, [username]);

  return (
    <div className='p-8'>
      <h2 className="text-3xl font-bold text-white mb-3">Daily Commits (Sample)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="commits" stroke="#1e3a8a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
