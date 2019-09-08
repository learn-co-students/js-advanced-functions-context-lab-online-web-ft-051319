/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(arr) {
    return arr.map(function(employee) {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.find(function(e) {
        return e.date === dateStamp
    })
    let timeOut = this.timeOutEvents.find(function(e) {
        return e.date === dateStamp
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateStamp) {
    let hours = hoursWorkedOnDate.call(this, dateStamp)
    return hours * this.payPerHour
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

function createEmployeeRecords(arr) {
    return arr.map(function(e) {
        return createEmployeeRecord(e)
    })
}

function findEmployeebyFirstName(srcArray, firstName) {
    return srcArray.find(function(e) {
       return e.firstName === firstName
    })
}

function calculatePayroll(arr) {
    return arr.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
}