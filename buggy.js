// There are 5 bugs in the code below
// can you find them?
// Hint: there are syntax bugs and logical bugs


class Drink {
  constructor(drinkDetails) {
    this.name = drinkDetails.name,
    this.size = drinkDetails.size,
    this.price = price,
    this.useWellBooze = true || drinkDetails.useWellBooze,
  }
}

var ginAndTonic = new Drink({name: 'Gin & Tonic', size: 'small', price: 5.85, useWellBooze: false});



// There are 2 bugs in the code below
// can you find them?

function addTheNumbers([1,3,5]) {
  var sum = 0;

  for(var i = 0; i < numbers.length; i++) {
    sum = numbers[i];
  }

  return sum;
}

addTheNumbers([1, 3, 5]); // should return 9 in this case



// There are syntax and logical bugs in the code below
// can you find them all?

class Animal {
  constructor(name, type, age, ['North America', 'South America']) {
    this.name = name;
    this.type = type;
    this.age = lion.age;
    this.range = ['Asia'] || range;
  }

  addRange(place) {
    this.range.push() {
      return place;
    }
  }
}

var lion = Animal('Leo', 'lion', 12, ['Africa'])
lion.push('San Diego') // lion.range should equal ['Africa', 'San Diego']
