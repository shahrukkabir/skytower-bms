export default function PaymentTableRow({ payment }) {
  return (
    <tr className="border-b border-[#e6bb9f]/30 hover:bg-[#fdf6f0] hide-scrollbar transition-colors duration-200">
      <td className="p-2 text-center text-[#2c241e] break-words">{payment.email || "undefined"}</td>
      <td className="p-2 text-center text-[#2c241e]">{payment.couponApplied ? "Yes" : "No"}</td>
      <td className="p-2 text-center text-[#2c241e]">${payment.finalRent?.toFixed(2) || "0.00"}</td>
      <td className="p-2 text-center text-[#2c241e] uppercase">{payment.appartment || "N/A"}</td>
      <td className="p-2 text-center text-[#2c241e]">{payment.month || "N/A"}</td>
      <td className="p-2 text-center text-[#2c241e]">{payment.cardLast4 || "N/A"}</td>
      <td className="p-2 text-center text-[#2c241e] break-all">{payment.transactionId || "N/A"}</td>
    </tr>
  );
}
