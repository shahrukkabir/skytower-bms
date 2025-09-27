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
            const filtered = (users || []).filter(
                (user) =>
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
        <div className="min-w-[700px]">
            <table className="w-full border-collapse rounded-lg  border">
                <thead className="grid grid-cols-10 py-2 bg-[#504211] rounded-t-lg">
                    <th className="w-full text-center uppercase text-white p-2 col-span-1 rounded-l-lg">
                        Image
                    </th>
                    <th className="w-full text-center uppercase text-white p-2 col-span-2">
                        Name
                    </th>
                    <th className="w-full text-center uppercase text-white p-2 col-span-3">
                        Email
                    </th>
                    <th className="w-full text-center uppercase text-white p-2 col-span-2">
                        Status
                    </th>
                    <th className="w-full text-center uppercase text-white p-2 col-span-1">
                        Remove
                    </th>
                    <th className="w-full text-center uppercase text-white p-2 col-span-1 rounded-r-lg">
                        Action
                    </th>
                </thead>

                <tbody className="w-full">
                    {[...filteredUsers].reverse().map((item) => (
                        <ManageRow key={item._id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
