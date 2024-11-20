import UserTable from '@/app/_components/usertable';
import Layout from '@/app/dashboard/Layout';

export default function DashboardPage() {
  return (
    <Layout>
      <div className="dashboard-content">
        <div className="project-card">
          <UserTable />
        </div>
      </div>
    </Layout>
  );
}
