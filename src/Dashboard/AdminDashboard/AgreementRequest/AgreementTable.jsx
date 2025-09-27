import { useEffect, useState } from "react";
import AgreementTableRow from "./AgreementTableRow";
import useAgreements from "../../../hooks/useAgreements";

export default function AgreementTable({ searchTerm }) {
  const { agreements, AgreeRefetch } = useAgreements();
  const [filteredAgreements, setFilteredAgreements] = useState([]);

  useEffect(() => {
    if (!agreements) {
      setFilteredAgreements([]);
    } 
    else if (searchTerm === "") {
      setFilteredAgreements(agreements);
    } 
    else {
      const filtered = agreements.filter((agreement) =>
        agreement.User_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agreement.User_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agreement.Status.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAgreements(filtered);
    }
  }, [agreements, searchTerm]);

  if (!agreements) return <div>Loading...</div>;
  if (filteredAgreements.length === 0) return <div className="w-full text-center text-[#2c241e]">No agreements found</div>;

  return (
    <div className="min-w-[850px]">
      <table className="w-full table-fixed border-collapse rounded-lg border">
        <thead>
          <tr className="bg-[#504211] text-white uppercase">
            <th className="p-3 w-[150px] text-center rounded-l-lg">Name</th>
            <th className="p-3 w-[220px] text-center">Email</th>
            <th className="p-3 w-[70px] text-center">Floor</th>
            <th className="p-3 w-[70px] text-center">Block</th>
            <th className="p-3 w-[90px] text-center">Apartment</th>
            <th className="p-3 w-[90px] text-center">Rent</th>
            <th className="p-3 w-[110px] text-center">Date</th>
            <th className="p-3 w-[110px] text-center">Status</th>
            <th className="p-3 w-[120px] text-center rounded-r-lg">Action</th>
          </tr>
        </thead>

        <tbody>
          {[...filteredAgreements].reverse().map((agreement) => (
            <AgreementTableRow
              key={agreement._id}
              agreement={agreement}
              refetch={AgreeRefetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
