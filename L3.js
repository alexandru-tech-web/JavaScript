function getCurentDate() {
    return new Date();
}
console.log(getCurentDate());



function CalculatorNetSalary(grossSalaryRON, eurovalue) {

    //formula de calcul pentru returnarea salariului net
    const cas = 0.25 * grossSalaryRON;
    const cass = 0.1 * grossSalaryRON;
    const taxes = cass + cas;
    const income = grossSalaryRON - taxes;
    const incomeTax = 0.1 * income;
    const NetSalaryRON = income - incomeTax;
    //conversia in euro a venitului net

    const netsalaryeuro = NetSalaryRON/ eurovalue;

    console.log(netsalaryeuro)

}

CalculatorNetSalary(1000,4.88)
