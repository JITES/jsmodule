const empData = [
    {
        "id": "583fd999a2a3a4121dd6b6fc",
        "name": "Brook Quigley",
        "employmentType": "HOURLY_FT",
        "dob": "1993-04-31",
        "identifiedGender": "FEMALE",
        "title": "Sales Development Rep",
        "compensation": {
          "currency": "USD",
          "annualSalary": "65000.00"
        },
        "department": "Sales",
        "workLocation": "San Francisco",
        "startDate": "2020-05-31"
    },
    {
        "id": "583fd982a2a3a4121dd6b429",
        "name": "John Grady",
        "employmentType": "HOURLY_FT",
        "dob": "1996-05-31",
        "identifiedGender": "MALE",
        "title": "Customer Support Associate",
        "compensation": {
          "currency": "USD",
          "annualSalary": "52000.00"
        },
        "department": "Customer Support",
        "workLocation": "San Francisco",
        "startDate": "2019-05-31"
      },
      {
        "id": "583fd982a2a3a4121dd6b429",
        "name": "John Grady",
        "employmentType": "HOURLY_FT",
        "dob": "1996-05-31",
        "identifiedGender": "MALE",
        "title": "Customer Support Associate",
        "compensation": {
          "currency": "USD",
          "annualSalary": "52000.00"
        },
        "department": "Customer Support",
        "workLocation": "San Francisco",
        "startDate": "2019-05-31"
      },
      {
        "id": "583fd982a2a3a4121dd6b429",
        "name": "John Grady",
        "employmentType": "HOURLY_FT",
        "dob": "1996-05-31",
        "identifiedGender": "MALE",
        "title": "Customer Support Associate",
        "compensation": {
          "currency": "USD",
          "annualSalary": "52000.00"
        },
        "department": "Customer Support",
        "workLocation": "San Francisco",
        "startDate": "2019-05-31"
      }
];

function minMax(obj) {
    const calc = {};

    const min = Math.min(...obj.map(e => e.compensation.annualSalary));
    const max = Math.max(...obj.map(e => e.compensation.annualSalary));

    calc.max = max;
    calc.min = min;
    var modeSal = 0;

    const mode = {};
    // avg
    var sum = 0;
    for (let i = 0; i < obj.length; i++) {
        const salary = parseInt(obj[i].compensation.annualSalary);
        sum += salary;
        if(salary in mode) {
            mode[salary]++; 
        }
        else {
            mode[salary] = 1;
        }
        
    }
    console.log(modeSal);
    const avg = sum/obj.length;
    calc.avg = avg;
    console.log(mode);
    console.log(calc);

}

minMax(empData);
 