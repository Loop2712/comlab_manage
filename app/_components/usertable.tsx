'use client';

import { useState, useEffect } from 'react';
import EditUserModal from './EditUserModal';

interface User {
  id: number;
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Load users from API
  const refreshUsers = () => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteClick = async (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      await fetch(`/api/users/${id}`, { method: 'DELETE' });
      refreshUsers(); // Refresh users after deletion
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div>
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
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && selectedUser && (
        <EditUserModal user={selectedUser} onClose={closeModal} onSave={refreshUsers} />
      )}
    </div>
  );
}
