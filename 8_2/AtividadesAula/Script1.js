
const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
  ]
  
  const firstPersonNonDriver = users.find(user => user.isDriver === false);
  console.log(firstPersonNonDriver);
  
  const peopleThatDontDrive = users.filter(user => !user.isDriver);
  console.table(peopleThatDontDrive);
  
  const peopleThatDrive = users.filter(user => user.isDriver);
  console.table(peopleThatDrive);