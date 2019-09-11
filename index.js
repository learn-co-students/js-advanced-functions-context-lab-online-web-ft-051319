/* Your Code Here */

const createEmployeeRecord = function (inputArray) {
  let empRecord = {
    firstName: inputArray[0],
    familyName: inputArray[1],
    title:inputArray[2],
    payPerHour: inputArray[3],
    timeInEvents:[],
    timeOutEvents:[]

  }
  return empRecord
}

const createEmployees = function(inputArray) {
  let returnArray = inputArray.map((row) => createEmployeeRecord(row))
  return returnArray;
}

const createTimeInEvent = function (datestamp) {
  /*
  let timeEvent= {
                type: "TimeIn"
              }
  timeEvent.date = datestamp.split(' ')[0];
  timeEvent.hour = parseInt(datestamp.split(' ')[1]);
  */
  this.timeInEvents.push({
              type:"TimeIn",
              date: datestamp.split(' ')[0],
              hour: parseInt(datestamp.split(' ')[1])
  })


  return this
}

const createTimeOutEvent = function (datestamp) {

  this.timeOutEvents.push({
                type: "TimeOut",
                date: datestamp.split(' ')[0],
                hour: parseInt(datestamp.split(' ')[1])
              })
  return this
}

const hoursWorkedOnDate = function(datestr) {
  let timeInTime= this.timeInEvents.find(function(e) { return e.date === datestr})
  let timeOutTime=this.timeOutEvents.find((e) => e.date === datestr)
  return (timeOutTime.hour - timeInTime.hour)/100
}

const wagesEarnedOnDate = function(datestr) {
  return (this.payPerHour * hoursWorkedOnDate.call(this, datestr))
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

let calculatePayroll = function (employees) {
  let emplrowsum = employees.map(function(employeerow) {return allWagesFor.call(employeerow)})
  let emplsum = emplrowsum.reduce((a,b) => a+b)
  return emplsum
}
/*

let createEmployeeRecords = function(dataEmployees) {
  return dataEmployees.map(row => createEmployeeRecord(row))
}
*/
const createEmployeeRecords = function (dataEmployees) {
  let returnEmployees = dataEmployees.map(row => createEmployeeRecord(row))
  return returnEmployees;
}

let findEmployeebyFirstName = function (employees, firstNameString) {
  return employees.find(employee => employee.firstName === firstNameString)
}
