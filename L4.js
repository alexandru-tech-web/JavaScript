function calculatorNetSalaryWithTaxExemption(grossSalary, isTaxExempt) {
    const cas = 0.25 * grossSalary;
    const cass = 0.1 *  grossSalary;
    const taxes = cas + cass;
    const income = grossSalary - taxes;


    let incomeTax;
    if(isTaxExempt === "Yes") {
        incomeTax = 0;
    }

    if(isTaxExempt === "No") {
        incomeTax = 0.1 * income;
     }

     const netSalary = income - incomeTax;

     return netSalary;
}



console.log(calculatorNetSalaryWithTaxExemption(10000, "No"));
console.log(calculatorNetSalaryWithTaxExemption(10000, "Yes"));