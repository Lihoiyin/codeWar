//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const nameInitials = (name) => {
  return name.split(' ')[0][0].toUpperCase() + '.' + name.split(' ')[1][0].toUpperCase()
}

console.log(nameInitials('nathaniel li'));
