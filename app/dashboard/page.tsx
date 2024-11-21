import UserTable from '@/app/dashboard/_components/usertable';
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
