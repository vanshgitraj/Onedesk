import React from 'react';
import LoanCard from '../molecules/LoanCard';

const Dashboard = () => {
  const loanOffers = [
    { lender: 'HDFC Bank', amount: 250000, interestRate: 11.5 },
    { lender: 'Bajaj Finserv', amount: 150000, interestRate: 13.25 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {loanOffers.map((offer, idx) => (
        <LoanCard key={idx} {...offer} />
      ))}
    </div>
  );
};

export default Dashboard;