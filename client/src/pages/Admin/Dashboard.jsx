import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdTrendingUp, MdShoppingCart, MdAttachMoney, MdStar } from "react-icons/md";

const keyStats = [
  { title: "Total Sales", value: "$12,345", icon: <MdAttachMoney size={30} className="text-green-500" /> },
  { title: "Orders", value: "1,234", icon: <MdShoppingCart size={30} className="text-blue-500" /> },
  { title: "Products", value: "567", icon: <MdStar size={30} className="text-yellow-500" /> },
  { title: "Growth", value: "12%", icon: <MdTrendingUp size={30} className="text-red-500" /> },
];

const recentOrders = [
  { id: "13213213123", product: "Delicate Diamond Pendant", customer: "Sam Altman", date: "01/02/2024", amount: "$1234" },
  { id: "13213213124", product: "Elegant Diamond Ring", customer: "John Doe", date: "02/02/2024", amount: "$2345" },
];

const topProducts = [
  { id: "411018RINGAA001EA001", title: "Elegant Diamond Ring", sales: "120" },
  { id: "411018PNDTAA005EA005", title: "Delicate Diamond Pendant", sales: "150" },
];

export const Dashboard = ({ toggleDrawer }) => {
  return (
    <>
      <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100 mb-24">
        <button className="pl-1 pt-3 fixed">
          <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
        </button>
        <div className="px-12 pt-5 mt-5">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
        </div>
        <div className="px-12 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStats.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-700">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-12 pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
            <ul>
              {recentOrders.map((order) => (
                <li key={order.id} className="flex justify-between py-2 border-b">
                  <div>
                    <p className="text-gray-700 font-semibold">{order.product}</p>
                    <p className="text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700">{order.date}</p>
                    <p className="text-gray-900 font-bold">{order.amount}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Products</h2>
            <ul>
              {topProducts.map((product) => (
                <li key={product.id} className="flex justify-between py-2 border-b">
                  <p className="text-gray-700 font-semibold">{product.title}</p>
                  <p className="text-gray-900 font-bold">{product.sales} sales</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
