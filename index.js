// Your code here
const employees = [
  ["a", "b", "c", 3],
  ["d", "e", "f", 4],
];
function createEmployeeRecord(array) {
  let newObj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return newObj;
}

// console.log(createEmployeeRecord(employees));

function createEmployeeRecords(array) {
  // map(employee => createEmployeeRecord(employee)));
  return array.map(createEmployeeRecord);
}

console.log(createEmployeeRecords(employees));

function createTimeInEvent(obj, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  hour = parseInt(hour);
  let type = "TimeIn";
  obj.timeInEvents.push({ type, hour, date });
  return obj;
  // let newTime = {
  //   type: "TimeIn",
  //   hour: parseInt(dateStamp.slice(10, 15)),
  //   date: dateStamp.slice(0, 10),
  // };

  // console.log(this.createEmployeeRecords(obj));

  // const thisObj = this.createEmployeeRecords(obj);
  // let newTime = {
  //   type: "TimeIn",
  //   hour: parseInt(dateStamp.slice(10, 15)),
  //   date: dateStamp.slice(0, 10),
  // };
  // thisObj.map((obj) => obj.timeInEvents.push(newTime));
  // return thisObj;
}

function createTimeOutEvent(obj, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  hour = parseInt(hour);
  let type = "TimeOut";
  obj.timeOutEvents.push({ type, hour, date });
  return obj;
}

// console.log(createTimeInEvent(employees[0], "2112-30-21 1000"));
// console.log(createTimeOutEvent(employees[0], "2112-30-21 2000"));

// function isDate(object, workDate) {
//   if (object.date === workDate) return object.hour;
// }

function hoursWorkedOnDate(obj, workDate) {
  // console.log(obj.timeInEvents);
  let inTime = obj.timeInEvents
    .filter((element) => element.date === workDate)
    .map((element) => element.hour);

  let outTime = obj.timeOutEvents
    .filter((element) => element.date === workDate)
    .map((element) => element.hour);

  return (outTime - inTime) / 100;
}
// hoursWorkedOnDate(createEmployeeRecord(employee[0]));
// console.log(
//   hoursWorkedOnDate(createEmployeeRecords(employees[0]), "2112-30-21")
// );

function wagesEarnedOnDate(obj, date) {
  return obj.payPerHour * hoursWorkedOnDate(obj, date);
}

function allWagesFor(obj) {
  // console.log(obj);
  console.log(obj.timeInEvents);
  obj.timeInEvents
    .map((element) => wagesEarnedOnDate(element, element.date))
    .reduce((a, b) => a + b, 0);
  console.log(obj.timeInEvents)

  // let allWage = [];
  // // const array = .timeInEvents;
  // for (const element of array) {
  //   allWage.push(wagesEarnedOnDate(array[element], array[element].date));
  // }
  // return allWage.reduce((a, b) => a + b);
}

function findEmployeeByFirstName(srcArray, fName) {
  for (let element of srcArray) {
    if (element.firstName === fName) {
      return element;
    }
  }
}

function findEmployeeByFirstName(srcArray, fName) {
  srcArray.filter((array) => array.firstName === fName);
}

console.log(findEmployeeByFirstName(createEmployeeRecords(employee), "d"));

function calculatePayroll(arrays) {
  arrays.map(wagesEarnedOnDate(array)).reduce((a, b) => (a = a + b), 0);
}
