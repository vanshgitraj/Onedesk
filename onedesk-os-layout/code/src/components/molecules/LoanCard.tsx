import React from 'react';

interface LoanCardProps {
  lender: string;
  amount: number;
  interestRate: number;
}

const LoanCard: React.FC<LoanCardProps> = ({ lender, amount, interestRate }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md space-y-2">
      <h3 className="text-lg font-semibold">{lender}</h3>
      <p className="text-sm">Loan Amount: ₹{amount.toLocaleString()}</p>
      <p className="text-sm text-gray-600">Interest Rate: {interestRate}%</p>
    </div>
  );
};

export default LoanCard;