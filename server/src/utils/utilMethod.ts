function getMondayFromDOB(dob:string):string {
  let newDOB = new Date(dob);
  let dayOfWeek = newDOB.getDay();
  if (dayOfWeek !== 1) {
      newDOB.setDate(newDOB.getDate() + (1 - dayOfWeek + 7) % 7);
  }
  return newDOB.toISOString().split('T')[0]
}

export function getCurrentWeek(dob:string) : number {
  dob= getMondayFromDOB(dob)
  const currentDate= new Date(Date.now())
  const birthDate= new Date(dob)

  const diffInMs= currentDate.getTime() - birthDate.getTime()
  let weeksPassed= Math.floor(diffInMs /(1000 * 60 * 60 * 24 * 7)) + 1
  return weeksPassed
}