// The first problem to solve is determining how many hours of sleep the user got each night of the week. We are using Math.random() to create a set of test hours or each day of the week. 

const getSleepHours = (day) => {
  day = day.toLowerCase()

  switch(day) {
    case 'monday':
      return Math.floor(Math.random()*8);
      break;
    case 'tuesday':
      return Math.floor(Math.random()*8);
      break;
    case 'wednesday':
      return Math.floor(Math.random()*8);
      break;
    case 'thursday':
      return Math.floor(Math.random()*8);
      break;
    case 'friday':
      return Math.floor(Math.random()*8);
      break;
    case 'saturday':
      return Math.floor(Math.random()*10);
      break;
    case 'sunday':
      return Math.floor(Math.random()*10);
  }
}

// The getActualSleepHours function's purpose is to add the number of hours slept each day based on the information from the getSleepHours function
const getActualSleepHours = () => {

  let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  let hoursSleptByDay = week.map((ele) => { return getSleepHours(ele)})

let  totalHoursSlept = hoursSleptByDay.reduce((acc, ele) => {return acc + ele}, 0)

 return totalHoursSlept
}

console.log("The Number of Hours of Sleep that You Got Last Week: ", getActualSleepHours())



// The user would be able to submit the number of hours they would like to sleep each night, ideally.
const getIdealSleepHours = () => {
  let idealHours = 8

  return idealHours * 7
}
console.log("The Number of Hours You Should be Sleeping: ", getIdealSleepHours())



//The function runs the getActualSleepHours and getIdealSleepHours and uses a conditional to determine if the user has a sleep debt 
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours =  getIdealSleepHours()

  if(actualSleepHours === idealSleepHours){
    console.log(`Perfect! You got the perfect amount of sleep last week! Current Sleep Debt: ${actualSleepHours-idealSleepHours}`)
    }
else if(actualSleepHours > idealSleepHours) {
  console.log(`You slept more than you needed to. Current Sleep Debt: ${actualSleepHours-idealSleepHours}`)
  }
else {
  console.log(`You need to get more rest. Current Sleep Debt: ${actualSleepHours-idealSleepHours}`)
  }

}

calculateSleepDebt()

