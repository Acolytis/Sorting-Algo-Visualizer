numbers = [];
const rectWidth = 5;
const timeBetweenSorting = .1 * 1000;
lastSortTime = 0;
i = 0;

function setup() {
  createCanvas(2000, 600);

  lastSortTime = millis();


  for (let i = 0; i < 1000; i++) {
    numbers.push(RandomRange(1, 500));
  }
}


function draw() {
  background(20);

  if (i < numbers.length && millis() > lastSortTime) 
  {
    for(let x = 0; x < numbers.length - i -1; x++)
    {
      if(numbers[x] > numbers[x+1])
      {
        let temp = numbers[x];
        numbers[x] = numbers[x+1]
        numbers[x+1] = temp;
      }
    }
    
    i++;
    lastSortTime = millis() + timeBetweenSorting;
  }

  for (let i = 0; i < numbers.length; i++) {
    rect(i * rectWidth, height, rectWidth, -numbers[i]);
  }
}

function RandomRange(min, max) {
  number = (Math.random() * (max - min) + min);
  return number;
}
