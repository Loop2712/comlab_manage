import UserTable from '@/app/_components/usertable';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card">
        <div className="card-header">
          <h2>User Information</h2>
        </div>
        <div className="card-content">
          <UserTable />
        </div>
      </div>
    </div>
  );
}
