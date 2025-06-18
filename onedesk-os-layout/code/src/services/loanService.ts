export const fetchLoanSuggestions = async (userId: string) => {
  // Dummy logic for now
  return [
    { lender: 'ICICI', product: 'Personal Loan', amount: 200000 },
    { lender: 'Kotak', product: 'Overdraft', amount: 100000 },
  ];
};