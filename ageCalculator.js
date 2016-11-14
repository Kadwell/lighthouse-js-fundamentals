function ageCalculator(name,yearOfBirth,currentYear){
  var age = currentYear - yearOfBirth;
  var string = name + " is " + age + " years old.";
  return string;
}