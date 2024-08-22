// 1. Create a constructor function named Bank
function Bank (bankName, location, ifscCode, branchCode) {
        this.bankName = bankName;
        this.location = location;
        this.ifscCode = ifscCode;
        this.branchCode = branchCode;
    }


console.log ("======================================================")

const yesBank = new Bank('Yes Bank', 'Mumbai', 'YES0001234', '001');
const sbiBank = new Bank('SBI', 'Delhi', 'SBIN0005678', '002');
const mahBank = new Bank('mah Bank', 'Pune', 'MAH0009101', '003');
const axisBank = new Bank('Axis Bank', 'Bangalore', 'AXIS0001121', '004');

console.log(`bank details is:${yesBank.bankName}, ${yesBank.location},${yesBank.ifscCode} ${yesBank.branchCode}`)
console.log(`bank details is:${sbiBank.bankName}, ${sbiBank.location},${sbiBank.ifscCode} ${sbiBank.branchCode}`)
console.log(`bank details is:${mahBank.bankName}, ${mahBank.location},${mahBank.ifscCode} ${mahBank.branchCode}`)
console.log(`bank details is:${axisBank.bankName}, ${axisBank.location},${axisBank.ifscCode} ${axisBank.branchCode}`)

console.log ("======================================================")

Bank.prototype.openTime = '9 AM IST';

console.log ("======================================================")

Bank.prototype.closeTime = '6 PM IST';

console.log ("======================================================")

console.log(`The open time of ${sbiBank.bankName} is ${sbiBank.openTime} and the close time is ${sbiBank.closeTime}`);

console.log ("======================================================")

console.log(`The bank name is ${axisBank.bankName} and the close time is ${axisBank.closeTime}`);

console.log ("======================================================")

console.log(`Bank Details: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);