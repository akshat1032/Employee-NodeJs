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
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_HOURS_MONTHLY = 100;
var employeeDailyWage = new Array();
var employeeDailyWageMap = new Map();
var employeeDailyHoursMap = new Map();

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
    employeeDailyHoursMap.set(employeeWorkingDays, employeeWorkingHours);
    employeeDailyWageMap.set(employeeWorkingDays, getWage(employeeWorkingHours));
}
let employeeWage = getWage(employeeHours);
console.log("Total Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + employeeWage);
console.log(employeeDailyWageMap);

// UC_7A Calculating total wage using foreach traversal or reduce
let totalWage = 0;
function sum(dailyWage) {
    return totalWage += dailyWage;
}
employeeDailyWage.forEach(sum);
console.log("UC_7A\nTotal Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + totalWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC_7A\nEmployee Wage with reduce : " + employeeDailyWage.reduce(totalWages, 0));

//  UC_7B Show day alongwith daily wage
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " " + dailyWage;
}
let mapDayWithWageArray = employeeDailyWage.map(mapDayWithWage);
console.log("UC_7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//  UC_7C Show days when full time wage was earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let mapFullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC_7C Daily wage when full day worked \n" + mapFullDayWageArray);

//  UC_7D Find first occurrence when full time wage was earned
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC_7D\n First time full time wage was earned : " + mapDayWithWageArray.find(findFullTimeWage));

//  UC_7E Check if every element of full time wage is holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC_7E\n Check if every element is full time wage : " + mapDayWithWageArray.every(isAllFullTimeWage));

//  UC_7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC_7E\n Check if any element is part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage));

//  UC_7G Find the number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("UC_7G Find number of days employee worked :" + employeeDailyWage.reduce(totalDaysWorked, 0));

// UC_9 Performing operations using arrow functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
let totalSalary = employeeDailyWage.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC 9A : Wage with Arrow : " + "Total Hours: " + totalHours + " Total Wages: " + totalSalary);
let notWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
employeeDailyHoursMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else
        notWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + notWorkingDays);

//  UC_10 Ability to store the Day, Hours Worked and Wage Earned in a single object
{
    let employeeHours = 0;
    let employeeWorkingDays = 0;
    var employeeDailyHoursAndWageArray = new Array();
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays < NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyHoursAndWageArray.push(
            {
                dayCount: employeeWorkingDays,
                dailyHours: employeeWorkingHours,
                dailyWages: getWage(employeeWorkingHours),
                toString() {
                    return "\nDay" + this.dayCount + " => Working Hours is: " + this.dailyHours + " Wage earned = " + this.dailyWages
                },
            });
    }
    console.log("UC_10 Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);
}

//UC_11A - UC_11D Using Object Functions along with Arrow Functions
let totalWageEarned = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
console.log("Total wage UC11A - " + totalWageEarned);
let totalHour = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total hours UC11A - " + totalHour);
process.stdout.write("11B- Logging Full Work Days");
employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).
    forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDaysString = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n11C- Part Working Days" + partWorkingDaysString);

let noWorkingDays = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayCount);
console.log("11D- Non working days: " + noWorkingDays);
