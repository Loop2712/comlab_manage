
import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      {/* <Sidebar /> */}
      <div className="main-content">
        {/* <Navbar /> */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
