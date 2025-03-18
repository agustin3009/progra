
export let employees: string[]  = ['Fernando', 'Melissa', 'Eduardo'];
export let salaries: number[]   = [1500, 2400, 3200];

//for( let i = 1; i < flowers.length; i++ ) {
//    console.log(flowers [i]);
//}

for ( let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let salary = salaries[i]

    console.log( employee, ' tiene un salario de ', salary );
    } 
   