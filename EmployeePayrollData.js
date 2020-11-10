//  UC15_CheckIdAndSalaryForValidityUsingRegex
const genderRegexPattern = RegExp('[M,F]{1}$');
class EmployeePayroll {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        if (!params[0] > 0) throw "Id is incorrect"
        {
            this.id = params[0];
        }
        this.name = params[1];
        if (!params[2] > 0) throw "Salary is incorrect"
        {
            this.salary = params[2];
        }
        if (!genderRegexPattern.test(params[3])) throw "Gender is incorrect"
        {
            this.gender = params[3];
        }
        if (params[4] > new Date()) throw "StartDate is incorrect"
        {
            this.startDate = params[4];
        }
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name Is Incorrect';
    }

    //method 
    toString() {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + empDate;
    }
}

//Check Name
try {
    let newEmployeePayroll2 = new EmployeePayroll(1, "Ter", 30000, "F", new Date());
    console.log(newEmployeePayroll2.toString());
} catch (e) {
    console.error(e);
}

//Check Id
try {
    let newEmployeePayroll3 = new EmployeePayroll(0, "Mark", 2000, "F", new Date());
    console.log(newEmployeePayroll3.toString());
} catch (e) {
    console.error(e);
}

//Check Salary
try {
    let newEmployeePayroll3 = new EmployeePayroll(2, "Mark", 0, "F", new Date());
    console.log(newEmployeePayroll3.toString());
} catch (e) {
    console.error(e);
}

//Check Gender
try {
    let newEmployeePayroll3 = new EmployeePayroll(2, "Mark", 2000, "K", new Date());
    console.log(newEmployeePayroll3.toString());
} catch (e) {
    console.error(e);
}

//Check Date
try {
    let newEmployeePayroll3 = new EmployeePayroll(2, "Mark", 2000, "M", new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayroll3.toString());
} catch (e) {
    console.log(e);
}
