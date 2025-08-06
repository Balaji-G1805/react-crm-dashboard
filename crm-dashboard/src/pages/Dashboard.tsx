import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import InfoCards from "../components/InfoCards";
import CustomerTable from "../components/CustomerTable";
import customerData from "../data/customers.json";
import type { Customer } from "../types/customer";

const Dashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setCustomers(customerData as Customer[]);
  }, []);

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6">
      <Topbar />
      <InfoCards customers={customers} />
      <CustomerTable customers={customers} />
    </div>
  );
};

export default Dashboard;
