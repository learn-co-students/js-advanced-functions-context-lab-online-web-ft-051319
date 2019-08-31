function createEmployeeRecord(array){
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employee; 
}

function createEmployees(array){
    return array.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(timeString){
    let date = timeString.split(" ")[0];
    let hour = parseInt(timeString.split(" ")[1], 10);
    this.timeInEvents.push({ "date": date, "hour": hour, "type": "TimeIn"})
    return this;
}

function createTimeOutEvent(timeString){
    let date = timeString.split(" ")[0];
    let hour = parseInt(timeString.split(" ")[1], 10);
    this.timeOutEvents.push({"date": date, "hour": hour, "type": "TimeOut"})
    return this;
}

function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(timeEvent =>{
        return timeEvent.date === date
    });
    let timeOut = this.timeOutEvents.find(timeEvent =>{
        return timeEvent.date === date
    });

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

function calculatePayroll(dates){
    let wages = dates.map(date => allWagesFor.call(date))
    return wages.reduce((sum, currentValue) => sum + currentValue)
}

function createEmployeeRecords(data){
    return data.map(employee => createEmployeeRecord(employee))
}

function findEmployeebyFirstName(data, firstName){
    return data.find(employee => employee.firstName === firstName)
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