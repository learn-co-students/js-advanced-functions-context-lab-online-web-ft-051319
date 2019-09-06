function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployees(nestedArray) {
    return nestedArray.map(arr => createEmployeeRecord(arr));
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1], 10),
        date: dateStamp.split(' ')[0]
    })
    return this;

    // other method
    // let [date, hour] = dateStamp.split(' ')
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1], 10),
        date: dateStamp.split(' ')[0]
    })
    return this;
}

function hoursWorkedOnDate(date) {
    let dateTimeIn = this.timeInEvents.find(event => event.date === date);
    let dateTimeOut = this.timeOutEvents.find(event => event.date === date);
    return (dateTimeOut.hour - dateTimeIn.hour)/100;
}

function wagesEarnedOnDate(date) {
    return (this.payPerHour) * (hoursWorkedOnDate.call(this, date))
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecords(nestedArray) {
    return nestedArray.map(array => createEmployeeRecord(array));
}

function findEmployeebyFirstName(array, firstName) {
    return array.find(obj => obj.firstName === firstName);
    // using .find() bc want return value to be the matching record or undefined. filter() will return an empty array if no matching record found.
}

function calculatePayroll(array) {
    return array.reduce( (total, empObj) => {
        return total + allWagesFor.call(empObj)
    }, 0)
}