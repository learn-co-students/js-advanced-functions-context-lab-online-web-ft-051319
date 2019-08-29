/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeArr) {
    let record = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
}

function createEmployees(arrayCollection) {
    return arrayCollection.map(array => { return createEmployeeRecord(array) })
}

function createTimeInEvent(dateTimeString) {
    let hour = parseInt(dateTimeString.split(" ")[1], 10);
    let date = dateTimeString.split(" ")[0];
    this.timeInEvents.push({ "date": date, "hour": hour, "type": "TimeIn" })
    return this;
}

function createTimeOutEvent(dateTimeString) {
    let hour = parseInt(dateTimeString.split(" ")[1], 10);
    let date = dateTimeString.split(" ")[0];
    this.timeOutEvents.push({ "date": date, "hour": hour, "type": "TimeOut" })
    return this;
}

function hoursWorkedOnDate(date) {
    let timeOutObj = this.timeOutEvents.find(timeRecord => {
        return timeRecord.date === date
    });
    let timeInObj = this.timeInEvents.find(timeRecord => {
        return timeRecord.date === date
    });

    return (timeOutObj.hour - timeInObj.hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeesArr) {
    let payroll = employeesArr.reduce(function(total, employeeObj) {
        return total += allWagesFor.call(employeeObj)
    }.bind(this), 0);

    return payroll;
}

function createEmployeeRecords(arrayCollection) {
    return createEmployees(arrayCollection);
}

function findEmployeebyFirstName(employeesArr, firstName) {
    return employeesArr.find(employeeObj => { return employeeObj.firstName === firstName })
}