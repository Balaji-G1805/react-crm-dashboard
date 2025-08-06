import LogoIcon from "../assets/Logo.svg";
import IncomeIcon from "../assets/wallet-money 2.svg";
import HelpIcon from "../assets/message-question 1.svg";
import PromoteIcon from "../assets/discount-shape 1.svg";
import ProductIcon from "../assets/3d-square 1.svg";
import CustomerIcon from "../assets/Customers.svg";
import DashboardIcon from "../assets/Dashboard.svg";
import UserIcon from "../assets/Ellipse 8.svg";

const Sidebar = () => {
  return (
    <aside className="w-20 md:w-64 min-h-screen shadow bg-white flex flex-col justify-between transition-all duration-300">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center md:justify-start gap-2">
        <img src={LogoIcon} alt="Logo" className="w-6 h-6" />
        <h1 className="text-xl font-semibold text-gray-900 hidden md:block">Dashboard</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center md:items-stretch px-2 md:px-4 space-y-4">
        <SidebarItem icon={DashboardIcon} label="Dashboard" />
        <SidebarItem icon={ProductIcon} label="Product" />
        <SidebarItem icon={CustomerIcon} label="Customers" active />
        <SidebarItem icon={IncomeIcon} label="Income" />
        <SidebarItem icon={PromoteIcon} label="Promote" />
        <SidebarItem icon={HelpIcon} label="Help" />
      </nav>

      {/* User Info */}
      <div className="p-4 flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-3">
        <img
          src={UserIcon}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="hidden md:block">
          <p className="text-sm font-medium text-gray-900">Evano</p>
          <p className="text-xs text-gray-500">Project Manager</p>
        </div>
      </div>
    </aside>
  );
};

type SidebarItemProps = {
  icon: string;
  label: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, active = false }: SidebarItemProps) => {
  return (
    <button
      className={`w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-2 py-2 md:px-4 rounded-lg transition text-sm font-medium ${
        active
          ? "bg-purple-100 text-purple-700"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );
};

export default Sidebar;
