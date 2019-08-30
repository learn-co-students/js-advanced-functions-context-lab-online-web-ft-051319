/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(person) {
    return {
        firstName: person[0],
        familyName: person[1],
        title: person[2],
        payPerHour: person[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(people) {
    return people.map((person) => {
        return createEmployeeRecord(person)
    })
}

function createTimeInEvent(timeIn) {
    let [date, hour] = timeIn.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),date
    })

    return this
}

function createTimeOutEvent(timeOut) {
    let [date, hour] = timeOut.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10), date
    })

    return this
}

function hoursWorkedOnDate(date) {
    let timeInEvent = this.timeInEvents.find((event) => {
        return event.date === date
    })

    let timeOutEvent = this.timeOutEvents.find((event) => {
        return event.date === date
    })

    return (timeOutEvent.hour - timeInEvent.hour) / 100
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

function calculatePayroll(employeeRecords) {
    // take all the records and grab the allWagesFor for each record and sum, starting at 0
    return employeeRecords.reduce(((sum,record) => sum + allWagesFor.call(record)),0)
}

function createEmployeeRecords(people) {
    return people.map(person => createEmployeeRecord(person))
}

function findEmployeebyFirstName(employeeArray, firstName) {
    return employeeArray.find(person => person.firstName === firstName)
}
