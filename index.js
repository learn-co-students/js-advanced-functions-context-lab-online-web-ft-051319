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

function createEmployeeRecord(array){
  let ans = {}
  ans.firstName = array[0]
  ans.familyName = array[1]
  ans.title = array[2]
  ans.payPerHour = array[3]
  ans.timeInEvents=[]
  ans.timeOutEvents=[]
  return ans
}

function createEmployees(arrays){
  return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(date){
  let timeRecord = {}
  timeRecord.type = "TimeIn"
  timeRecord.date = date.split(' ')[0]
  timeRecord.hour = Number(date.split(' ')[1])
  this.timeInEvents.push(timeRecord)
  return this
}

function createTimeOutEvent(date){
  let timeRecord = {}
  timeRecord.type = "TimeOut"
  timeRecord.date = date.split(' ')[0]
  timeRecord.hour = Number(date.split(' ')[1])
  this.timeOutEvents.push(timeRecord)
  return this
}

function hoursWorkedOnDate(date){
  let timeOut=this.timeOutEvents.find(function(e){
    return e.date === date
  })
  let timeIn=this.timeInEvents.find(function(e){
    return e.date === date
  })
  return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this,date)*this.payPerHour
}

function calculatePayroll(recordsArray){
  let wages = recordsArray.map(record=>allWagesFor.call(record))
  return wages.reduce((total,element)=>total+element)
}

function createEmployeeRecords(arrays){
  return arrays.map(employee => createEmployeeRecord(employee))
}

function findEmployeebyFirstName(array,firstName){
  return array.find(record => record.firstName === firstName)
}
