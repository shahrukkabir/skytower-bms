import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import ManageRow from "./ManageRow";

export default function ManageTable({ searchTerm }) {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users || []);
    } 
    else {
      const filtered = (users || []).filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  if (!users) {
    return <div>Loading...</div>;
  }

  if (filteredUsers.length === 0) {
    return (
      <div className="w-full text-center text-[#2c241e]">No members found</div>
    );
  }

  return (
    <div className="min-w-[850px]">
      <table className="w-full table-fixed border-collapse border rounded-lg">
        <thead>
          <tr className="bg-[#504211] text-white uppercase">
            <th className="p-3 w-[80px] text-center rounded-l-lg">Image</th>
            <th className="p-3 w-[180px] text-center">Name</th>
            <th className="p-3 w-[250px] text-center">Email</th>
            <th className="p-3 w-[140px] text-center">Status</th>
            <th className="p-3 w-[100px] text-center">Remove</th>
            <th className="p-3 w-[130px] text-center rounded-r-lg">Action</th>
          </tr>
        </thead>

        <tbody>
          {[...filteredUsers].reverse().map((item) => (
            <ManageRow key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
