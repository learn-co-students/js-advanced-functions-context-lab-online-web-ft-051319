/* Your Code Here */

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

function createEmployeeRecord(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(arrayOfEmployees){
    return arrayOfEmployees.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let date = dateStamp.split(" ")[0];
    let hour = parseInt(dateStamp.split(" ")[1], 10)
    this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let date = dateStamp.split(" ")[0];
    let hour = parseInt(dateStamp.split(" ")[1], 10)

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: date
    })
    return this
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(function(e){
        return e.date === date
    }) 
    let timeOutEvent = this.timeOutEvents.find(function(e){
        return e.date === date 
    })

    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date){
    return (this.payPerHour * hoursWorkedOnDate.call(this, date))
}

function findEmployeebyFirstName(employeeRecordsArray, firstName){
    return employeeRecordsArray.find(function(e) {
        return e.firstName === firstName
    })
}

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(employee => {
      return createEmployeeRecord(employee)
    })

}

function calculatePayroll(employeeRecordsArray){
    return employeeRecordsArray.reduce(function(total, record){
        return total + allWagesFor.call(record)
    }, 0)
}


