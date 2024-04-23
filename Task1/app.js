function calculateBMI() {
    let john = {
        name: 'John',
        height: 1.75,
        weight: 75
    };

    let markHigerBMI;

    let mark = {
        name: 'Mark',
        height: 1.80,
        weight: 80
    };

    let johnBMI = john.weight / (john.height * john.height);
    let markBMI = mark.weight / (mark.height * mark.height);

    console.log(`John's BMI is ${johnBMI.toFixed(2)}`);
    console.log(`Mark's BMI is ${markBMI.toFixed(2)}`);

    if(johnBMI>markBMI)
        console.log(`John's BMI ${johnBMI.toFixed(2)} is higher than Mark's BMI ${markBMI.toFixed(2)}`);
    else    
        console.log(`Mark's BMI ${markBMI.toFixed(2)} is Higher than John's BMI ${johnBMI.toFixed(2)}`);

}