'use client';

import { useState } from 'react';

interface CreateUserModalProps {
  onClose: () => void;
  onSave: () => void;
}

export default function CreateUserModal({ onClose, onSave }: CreateUserModalProps) {
  const [formData, setFormData] = useState({
    student_id: '',
    first_name: '',
    last_name: '',
    profile_image: '',
    username: '',
    password: '',
    email: '',
    email_verified: false,
    role: 'Student',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // POST data to API
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    onSave(); // Refresh the user table
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Student ID:
            <input
              name="student_id"
              value={formData.student_id}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            First Name:
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Profile Image (URL):
            <input
              name="profile_image"
              value={formData.profile_image}
              onChange={handleChange}
            />
          </label>
          <label>
            Username:
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email Verified:
            <input
              type="checkbox"
              name="email_verified"
              checked={formData.email_verified}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Teacher">Teacher</option>
            </select>
          </label>
          <button type="submit">Create</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
