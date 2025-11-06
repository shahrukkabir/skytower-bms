import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import ManageRow from "./ManageRow";

export default function ManageTable({ searchTerm }) {
  const { users } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (!users) return;

    if (searchTerm === "") {
      setFilteredUsers(users || []);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = (users || []).filter((user) => {
        const name = user?.name?.toLowerCase() || "";
        const email = user?.email?.toLowerCase() || "";
        const position = user?.position?.toLowerCase() || "";
        return (
          name.includes(lowerSearch) ||
          email.includes(lowerSearch) ||
          position.includes(lowerSearch)
        );
      });
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
      <table className="w-full table-fixed border-collapse border">
        <thead>
          <tr className="bg-[#504211] text-white uppercase">
            <th className="p-3 w-[80px] text-center rounded-tl-lg">Image</th>
            <th className="p-3 w-[180px] text-center">Name</th>
            <th className="p-3 w-[250px] text-center">Email</th>
            <th className="p-3 w-[140px] text-center">Status</th>
            <th className="p-3 w-[100px] text-center">Remove</th>
            <th className="p-3 w-[130px] text-center rounded-tr-lg">Action</th>
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
