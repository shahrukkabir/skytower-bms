import { useEffect, useState } from "react";
import PaymentTableRow from "./PaymentTableRow";
import usePayment from "../../../hooks/usePayment";
import useAuth from "../../../hooks/useAuth";

export default function PaymentTable({ searchTerm }) {
    const { payments } = usePayment();
    const { user } = useAuth();
    const [filteredPayments, setFilteredPayments] = useState([]);

    useEffect(() => {
        if (!payments) {
            setFilteredPayments([]);
        } else {
            const filtered = payments.filter(
                (payment) => payment.email === user?.email
            );
            setFilteredPayments(filtered);
        }
    }, [payments, user]);


    if (!payments) {
        return <div>Loading...</div>;
    }

    if (filteredPayments.length === 0) {
        return (
            <div className="w-full text-center text-[#2c241e]">No Payments found</div>
        );
    }
    return (
        <div className="w-full">
            <table className="w-full border-collapse border border-[#e6bb9f]/30 rounded-lg text-base">
                <thead>
                    <tr className="bg-[#504211] text-white uppercase">
                        <th className="p-2 text-center rounded-tl-lg">Email</th>
                        <th className="p-2 text-center">Coupon</th>
                        <th className="p-2 text-center">Amount</th>
                        <th className="p-2 text-center">Apartment</th>
                        <th className="p-2 text-center">Month</th>
                        <th className="p-2 text-center">Card</th>
                        <th className="p-2 text-center rounded-tr-lg">TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {[...filteredPayments].reverse().map((payment) => (
                        <PaymentTableRow key={payment._id} payment={payment} />
                    ))}
                </tbody>
            </table>
        </div>
    );  
}
