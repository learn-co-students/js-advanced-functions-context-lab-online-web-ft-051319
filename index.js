/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function (d) {
     return {
         firstName: d[0],
         familyName: d[1],
         title: d[2],
         payPerHour: d[3],
         timeInEvents: [],
         timeOutEvents: []
     };
 };

 let createEmployees = function (d) {
    return d.map(e => {
        return createEmployeeRecord(e);
    });
 };

 let createTimeInEvent = function (dateString) {
    let [date, time] = dateString.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date
    });

    return this;
 };

 let createTimeOutEvent = function (dateString) {
    let [date, time] = dateString.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date
    });

    return this;
 };

 let hoursWorkedOnDate = function (dateString) {
    let timeIn = this.timeInEvents.find(function(event){
        return event.date === dateString;
    });

    let timeOut = this.timeOutEvents.find(function(event){
        return event.date === dateString;
    });

    return (timeOut.hour - timeIn.hour) / 100;
 }

 let wagesEarnedOnDate = function (dateString) {
     return hoursWorkedOnDate.call(this, dateString) * this.payPerHour;
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

let calculatePayroll = function (records) {
    return records.reduce(function(total, record){
        return total + allWagesFor.call(record);
    }, 0);
};

let createEmployeeRecords = function (data) {
    return data.map(record => {
        return createEmployeeRecord(record);
    });
};

let findEmployeebyFirstName = function(records, name) {
    return records.find(record => {
      return record.firstName === name;
    });
};