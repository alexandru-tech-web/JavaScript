function Calculator(grossSalary) {
    const cas = 0.25 * grossSalary;
    const cass = 0.1 * grossSalary;
    const taxes = cass + cas;
    const income = grossSalary - taxes;
    const incomeTax = 0.1 * income;
    const NetSalary = income - incomeTax;

    return NetSalary;
}
console.log(Calculator(10000));



function CalculatorNetSalary(grossSalaryRON, eurovalue) {
    const netSalaryRON = Calculator(grossSalaryRON);

    const netsalaryeuro = netSalaryRON/ eurovalue;

    return netsalaryeuro;

}

console.log(CalculatorNetSalary(10000, 4.88));