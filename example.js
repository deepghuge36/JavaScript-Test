const dataset = [
  {
    lender: 'someone',
    borrower: 'sahil',
    loanAmount: 100,
    emi: 600,
    loanAmtPaid: 1000,
    dueDate: 2020 - 05 - 17,
    defaulter: true,
    loanSanctionedOnDate: 2009 - 01 - 02,
    annualIncome: 25000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cashless',
  },
  {
    lender: 'ram',
    borrower: 'shyam',
    loanAmount: 50000,
    emi: 650,
    loanAmtPaid: 2000,
    dueDate: 2 / 5 / 20,
    defaulter: true,
    loanSanctionedOnDate: 3 / 1 / 19,
    annualIncome: 20000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cashless',
  },
  {
    lender: 'ramesh',
    borrower: 'suresh',
    loanAmount: 5000,
    emi: 600,
    loanAmtPaid: 5000,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 25000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cashless',
  },
  {
    lender: 'radhe',
    borrower: 'maaa',
    loanAmount: 500000,
    emi: 600,
    loanAmtPaid: 5000,
    dueDate: 2 / 3 / 20,
    defaulter: true,
    loanSanctionedOnDate: 1 / 1 / 19,
    annualIncome: 25000,
    loantype: 'home',
    roi: '3.5%',
    transaction: 'cashless',
  },
];
// dataset.forEach(function (item, key) {
//   console.log(`The all the Lenders names are` + item.lender);
// });

// // 1.get data by the particular lender name
// dataset.forEach(function (item) {
//   console.log(`the lender name is ${item.lender}`);
// });
// // 2.get data by the  borrower name.
// dataset.forEach(function (item) {
//   console.log(`the lender name is ${item.borrower}`);
// });
// 3.get data whose loan amout is greater then 1 lakh


// 4.get data whose time period is been expired

// 5.get all the defaulter list with the amount remaning to be paid.
// dataset.forEach(function (item) {
//   const oustAmt = item.loanAmount - item.loanAmtPaid;
//   console.log(oustAmt);
//   if (amtZero === 0) {
//     console.log(item.borrower);
//   }
// });
// 6. get defaulter list whose outstanding amount is greater then 10k
// dataset.forEach(function (item) {
//   const oustAmt = item.loanAmount - item.loanAmtPaid;
//   console.log(oustAmt);
//   if (oustAmt > 10000) {
//     console.log(`${item.browwer}`);
//   }
// });
// 7.get total loan sanction amount
//

// 8.get total amount recovered,

// 9.get the data whose roi is greater then 5% and emi is greater then 2000
// 10.get the total amount which has to be recovered yet
// 11.get all the detail of cash based transaction and cashless transction
