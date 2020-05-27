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
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 100000,
    loantype: 'home',
    roi: '5%',
    transaction: 'cashless',
  },
];

function LoanDetails(data) {
  return {
    data,
    // 1.get data by the particular lender name,
    lenderName(name) {
      return data.filter((data) => data.lender === name);
    },
    // 2.get data by the  borrower name.
    borrowerName(name) {
      return data.find((data) => data.borrower === name);
    },
    // 3.get data whose loan amout is greater then 1 lakh
    amountOneLakh() {
      return data.map((data) => {
        return data.loanAmount > 100000 ? data.borrower : null;
      });
    },
    // 4.get data whose time period is been expired
    timeExpired() {
      return data.filter((data) => {
        return data.defaulter !== false ? data.borrower : null;
      });
    },
    // 5.get all the defaulter list with the amount remaning to be paid.
    defaulterAmount() {
      return data.map((data) => {
        return data.defaulter == true
          ? `${data.loanAmount}` - `${data.loanAmtPaid}`
          : data.borrower;
      });
    },
    // 6. get defaulter list whose outstanding amount is greater then 10k
    defaulterAmountTenK() {
     for(var key in data.defaulter){

     }
    },
  };
}
var Loanrecord = LoanDetails(Loandataset);
// console.log(Loanrecord.amountOneLakh());
// console.log(Loanrecord.timeExpired());
// console.log(Loanrecord.defaulterAmount());
console.log(Loanrecord.defaulterAmountTenK());
// 7.get total loan sanction amount
// 8.get total amount recovered,
// 9.get the data whose roi is greater then 5% and emi is greater then 2000
// 10.get the total amount which has to be recovered yet
// 11.get all the detail of cash based transaction and cashless transaction
