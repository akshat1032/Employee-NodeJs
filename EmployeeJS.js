// UC_1 Checking if employee is present or absent
{
    const IS_ABSENT = 0;
    let employeeCheck = Math.floor(Math.random() * 10) % 2;
    if (employeeCheck == IS_ABSENT) {
        console.log("Employee is Absent. Exiting the program");
        return;
    } else {
        console.log("Employee is Present");
    }
}

//  UC_6 Storing the daily wage alongwith total wage
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
    const MAX_HOURS_MONTHLY = 100;
    let employeeDailyWage = new Array();

    // Get working hours
    function getWorkingHours(employeeCheck) {
        switch (employeeCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
        }
    }

    // Get wage depending on hours
    function getWage(workingHours) {
        return workingHours * WAGE_PER_HOUR;
    }
    let employeeHours = 0;
    let employeeWorkingDays = 0;
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays <= NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 2;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyWage.push(getWage(employeeWorkingHours));
    }
    let employeeWage = getWage(employeeHours);
    console.log("Total Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + employeeWage);
}