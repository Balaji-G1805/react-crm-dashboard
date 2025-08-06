import type { Customer } from "../types/customer";

import AllCustomersIcon from "../assets/profile-2user.svg";
import MembersIcon from "../assets/monitor.svg";
import ActiveNowIcon from "../assets/profile-tick.svg";

type Props = {
  customers: Customer[];
};

const InfoCards = ({ customers }: Props) => {
  const total = customers.length;
  const active = customers.filter((c) => c.status === "Active").length;
  const members = customers.filter((c) => c.company !== "").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {/* Total Customers */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <img src={AllCustomersIcon} alt="Total Customers" className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Customers</p>
          <h2 className="text-xl font-semibold text-gray-800">{total}</h2>
        </div>
      </div>

      {/* Members */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full">
          <img src={MembersIcon} alt="Members" className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Members</p>
          <h2 className="text-xl font-semibold text-gray-800">{members}</h2>
        </div>
      </div>

      {/* Active Now */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <img src={ActiveNowIcon} alt="Active Now" className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Active Now</p>
          <h2 className="text-xl font-semibold text-gray-800">{active}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
