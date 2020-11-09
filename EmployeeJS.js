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

//  UC_8 Storing the day and daily wage alongwith total wage
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
    const MAX_HOURS_MONTHLY = 100;
    var employeeDailyWage = new Array();
    var employeeDailyWageMap = new Map();

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
    var employeeHours = 0;
    var employeeWorkingDays = 0;
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays <= NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 2;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyWage.push(getWage(employeeWorkingHours));
        employeeDailyWageMap.set(employeeWorkingDays,getWage(employeeWorkingHours));
    }
    let employeeWage = getWage(employeeHours);
    console.log("Total Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + employeeWage);
    console.log(employeeDailyWageMap);
}

// UC_7A Calculating total wage using foreach traversal or reduce
let totalWage=0;
function sum(dailyWage){
    return totalWage+=dailyWage;
}
employeeDailyWage.forEach(sum);
console.log("UC_7A\nTotal Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + totalWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC_7A\nEmployee Wage with reduce : "+employeeDailyWage.reduce(totalWages,0));

//  UC_7B Show day alongwith daily wage
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter+" "+dailyWage;
}
let mapDayWithWageArray = employeeDailyWage.map(mapDayWithWage);
console.log("UC_7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//  UC_7C Show days when full time wage was earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let mapFullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC_7C Daily wage when full day worked \n"+mapFullDayWageArray);

//  UC_7D Find first occurrence when full time wage was earned
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC_7D\n First time full time wage was earned : "+mapDayWithWageArray.find(findFullTimeWage));

//  UC_7E Check if every element of full time wage is holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC_7E\n Check if every element is full time wage : "+mapDayWithWageArray.every(isAllFullTimeWage));

//  UC_7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC_7E\n Check if any element is part time wage : "+mapDayWithWageArray.some(isAnyPartTimeWage));

//  UC_7G Find the number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage>0)
        return numberOfDays+1;
    return numberOfDays;
}
console.log("UC_7G Find number of days employee worked :"+employeeDailyWage.reduce(totalDaysWorked,0));