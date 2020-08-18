const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
  ];
  
  const names = [];
  users.map(user => names.push(user.firstName) );
  console.table(names);
  
  users.map((person) => person.firstName);
  
  
  
  console.table(names2);
  console.table(users); 