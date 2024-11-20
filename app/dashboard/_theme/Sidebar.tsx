'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link href="/dashboard">All Projects</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Account</Link>
        </li>
        <li>
          <Link href="/dashboard/security">Security</Link>
        </li>
        <li>
          <Link href="/dashboard/logs">Audit Logs</Link>
        </li>
      </ul>
    </div>
  );
}
