'use client';

import { useState, useEffect } from 'react';
import EditUserModal from './EditUserModal';
import CreateUserModal from './CreateUserModal';

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
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

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
    setShowEditModal(true);
  };

  const handleDeleteClick = async (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      await fetch(`/api/users/${id}`, { method: 'DELETE' });
      refreshUsers(); // Refresh users after deletion
    }
  };

  const closeModals = () => {
    setShowEditModal(false);
    setShowCreateModal(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setShowCreateModal(true)}>Create User</button>
      </div>
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

      {/* Edit Modal */}
      {showEditModal && selectedUser && (
        <EditUserModal user={selectedUser} onClose={closeModals} onSave={refreshUsers} />
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <CreateUserModal onClose={closeModals} onSave={refreshUsers} />
      )}
    </div>
  );
}
