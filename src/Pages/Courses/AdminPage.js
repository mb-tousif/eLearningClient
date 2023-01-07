import React from "react";
import { useGetAllUserQuery } from "../../RTK/features/api/userApi";
import Loader from "../../ShareCompnt/Loader";

export default function AdminPage() {
  const { data, isLoading} = useGetAllUserQuery();
  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <div className="mx-auto text-[#1b167b] my-auto">
      <h1 className="mb-4 mt-4 font-medium text-xl">Admin Page</h1>
      <div className="w-full max-w-2xl mb-6 bg-gradient-to-l from-[#165e9c] to-[#ADCDED] shadow-xl rounded-xl border border-gray-200">
        <div className="font-semibold mt-2 text-gray-800">Manage Users</div>
        <div className="p-3 overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs font-semibold uppercase bg-gray-50">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">User Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Avatar</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Role</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {
              data.data.map(user=><tbody key={user._id} className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2">
                  <div className="font-medium">{user.fullName}</div>
                </td>
                <td className="p-2">
                  <img src={user.image} alt="User images" className="h-12 w-12 rounded-full" />
                </td>
                <td className="p-2">
                  <div className="text-left font-medium">{user.role}</div>
                </td>
                <td className="p-2">
                  <div className="flex justify-center">
                    <button>
                      <svg
                        className="w-8 h-8 hover:text-[#dba309] rounded-full hover:bg-gray-100 p-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>)
            }
          </table>
        </div>
        <div className="text-center font-bold text-[#740160] space-x-4 text-base border-t border-gray-100 px-5 py-4">
          <h1>Only admin can mange users</h1>
        </div>
      </div>
    </div>
  );
}
