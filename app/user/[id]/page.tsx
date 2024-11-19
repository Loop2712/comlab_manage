'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export default function EditUserPage({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<Partial<User>>({});
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setFormData(data);
      });
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/users/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    router.push('/user');
  };

  const handleDelete = async () => {
    await fetch(`/api/users/${params.id}`, { method: 'DELETE' });
    router.push('/user');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input name="first_name" value={formData.first_name || ''} onChange={handleChange} />
        <input name="last_name" value={formData.last_name || ''} onChange={handleChange} />
        <input name="email" value={formData.email || ''} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
