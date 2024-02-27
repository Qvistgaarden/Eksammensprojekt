class Citizen{
    constructor(name, age, weight, height){
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
    }
  }
  let Emily = new Citizen("Emily", 18, 67, 165);
  function everyFrame(){ 
  document.getElementById("mainTitle").innerHTML = Emily.name;
  }
  requestAnimationFrame(everyFrame);