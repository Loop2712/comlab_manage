'use client';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Dashboard</h1>
      <div>
        <button>Feedback</button>
        <img
          src="/profile.jpg" // Replace with profile image
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
}
