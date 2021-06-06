

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

const getActualSleepHours = () => {

  let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  let hoursSleptByDay = week.map((ele) => { return getSleepHours(ele)})

let  totalHoursSlept = hoursSleptByDay.reduce((acc, ele) => {return acc + ele}, 0)

 return totalHoursSlept
}

console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 8

  return idealHours * 7
}
console.log(getIdealSleepHours())


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours =  getIdealSleepHours()

  if(actualSleepHours === idealSleepHours){
    console.log(`Perfect! You got the perfect amount of sleep last week! Sleep Debt: ${actualSleepHours-idealSleepHours}`)
    }
else if(actualSleepHours > idealSleepHours) {
  console.log(`You slept more than you needed to. Sleep Debt: ${actualSleepHours-idealSleepHours}`)
  }
else {
  console.log(`You need to get more rest. Sleep Debt: ${actualSleepHours-idealSleepHours}`)
  }

}

console.log(calculateSleepDebt())

