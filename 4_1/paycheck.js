function salary(grossSalary) {
  let aliquotINSS, aliquotIR, baseSalary;

  // INSS
  if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
  }
  else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
  }
  else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
  }
  else if (grossSalary > 5189.82) {
    aliquotINSS = 570.88;
  }

  baseSalary = grossSalary - aliquotINSS;
  
  // IR
  if (baseSalary <= 1903.98) {
    aliquotIR = 0;
  }
  else if (baseSalary <= 2826.65) {
    aliquotIR = (baseSalary * 0.075) - 142.8;
  }
  else if (baseSalary <= 3751.05) {
    aliquotIR = (baseSalary * 0.15) - 354.8;
  }
  else if (baseSalary <= 4664.68) {
    aliquotIR = (baseSalary * 0.225) - 636.13;
  }
  else {
    aliquotIR = (baseSalary * 0.275) - 869.36;
  }

  let netSalary = baseSalary - aliquotIR;
  
  console.log(`Net Salary: ${netSalary}`)
}

salary(3500)