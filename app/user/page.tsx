'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  id: number;
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.student_id}</td>
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link href={`/user/${user.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
