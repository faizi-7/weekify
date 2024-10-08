function calculateWeeks(dob: string, expectedAge : number) : number {
  let birthDate= new Date(dob)
  let deathDate= new Date(dob)
  deathDate.setFullYear(deathDate.getFullYear() + expectedAge)
  const diffInMs = deathDate.getTime() - birthDate.getTime();
  const weeksLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
  return weeksLeft;
}