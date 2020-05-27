const Loandataset = [
  {
    lender: 'Axis',
    borrower: 'Krutika',
    loanAmount: 5000,
    emi: 600,
    loanAmtPaid: 1000,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 25000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cash',
  },
  {
    lender: 'Axis',
    borrower: 'Sangam',
    loanAmount: 4000,
    emi: 500,
    loanAmtPaid: 900,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 22000,
    loantype: 'home',
    roi: '3.8%',
    transaction: 'cashless',
  },
  {
    lender: 'Axis',
    borrower: 'Sara',
    loanAmount: 12000,
    emi: 3000,
    loanAmtPaid: 5000,
    dueDate: 26 / 5 / 20,
    defaulter: false,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 35000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cash',
  },
  {
    lender: 'Axis',
    borrower: 'Snehal',
    loanAmount: 115000,
    emi: 9000,
    loanAmtPaid: 30000,
    dueDate: 26 / 5 / 20,
    defaulter: false,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 70000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cashless',
  },
  {
    lender: 'SBI',
    borrower: 'Minal',
    loanAmount: 9000,
    emi: 900,
    loanAmtPaid: 2000,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 27000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cashless',
  },
  {
    lender: 'SBI',
    borrower: 'Pallavi',
    loanAmount: 4000,
    emi: 500,
    loanAmtPaid: 900,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 22000,
    loantype: 'home',
    roi: '3.8%',
    transaction: 'cashless',
  },
  {
    lender: 'SBI',
    borrower: 'Zayra',
    loanAmount: 12000,
    emi: 3000,
    loanAmtPaid: 5000,
    dueDate: 26 / 5 / 20,
    defaulter: false,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 35000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cash',
  },
  {
    lender: 'SBI',
    borrower: 'Komal',
    loanAmount: 115000,
    emi: 9000,
    loanAmtPaid: 30000,
    dueDate: 26 / 5 / 20,
    defaulter: false,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 70000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cashless',
  },
  {
    lender: 'kotak',
    borrower: 'Anjeli',
    loanAmount: 150000,
    emi: 5000,
    loanAmtPaid: 9000,
    dueDate: 23 / 5 / 20,
    defaulter: false,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 100000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cashless',
  },
];

function LoanRecord(data) {
  return {
    data,
    lenderName(lender) {
      return data.filter((data) => data.lender === lender);
    },
    particularBorrowerName(borrower) {
      return data.filter((data) => data.borrower === borrower);
    },
    totalAmount() {
      return data.reduce((acc, val) => {
        return acc + val.loanAmount;
      }, 0);
    },
    amountTobePaid() {
      return data.map((data) => {
        return data.loanAmount - data.loanAmtPaid;
      });
    },
    rateofInterest() {
      return data.map((data) => {
        return data.roi === '3.5%' ? `${data.lender}=${data.roi}` : null;
      });
    },
  };
}

var loanDetails = LoanRecord(Loandataset);
console.log(loanDetails.lenderName('SBI'));
// console.log(loanDetails.particularBorrowerName('Komal'));
// console.log(loanDetails.totalAmount());
// console.log(loanDetails.amountTobePaid());
// console.log(loanDetails.rateofInterest());
