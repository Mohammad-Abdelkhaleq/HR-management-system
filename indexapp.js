'use strict'

function employee(ID, name, deprtment, level, image) {
    this.ID = ID;
    this.name = name;
    this.deprtment = deprtment;
    this.level = level;
    this.image = image;
    this.salary = 0;
    this.netSalray();
    this.render()
}
// #######################################################################################
employee.prototype.netSalray = function () {
    let beforeSalary = 0;
    let netSalray = 0;
    let maxSalary;
    let miniSalary;
    function calSalary() {
        beforeSalary = (1 - Math.random()) * (maxSalary - miniSalary) + miniSalary;
        netSalray = beforeSalary - beforeSalary * 0.075;
        return netSalray;
    }
    if (this.level === "Senior") {
         maxSalary = 2000;
         miniSalary = 1500;
        this.salary = calSalary();

    } else if (this.level === "Mid-Senior") {
         maxSalary = 1500;
         miniSalary = 1000;
        this.salary = calSalary();
    } else {
         maxSalary = 1000;
         miniSalary = 500;
        this.salary = calSalary()
    }
    ourEmployees.push(this);
}
// ?######################################################################################
// approach number 1 for rendering 

// employee.prototype.render= function(){
//     let a=`<ol>`;
//     for(let i=0;i<ourEmployees.length;i++){
//         a+=`<li>employee name:${ourEmployees[i].name} <br> net salary =${ourEmployees[i].salary}</li><br>`;
//     }
//     a+=`</ol>`
//     document.getElementById("dom").innerHTML= a
// }
// ########################################################################################
// approach number 2 for rendering 
employee.prototype.render= function(){
    
         let box = document.createElement("div");
        
        let node = document.createTextNode(`employee name:${this.name} net salary =${this.salary}`);
         box.appendChild(node);
         let element = document.getElementById("dom");
         element.appendChild(box);
}

// ################################################################################################
let ourEmployees=[];
const GhaziSamer = new employee(1000, "Ghazi Samer", "Administration", "Senior");
const LanaAli = new employee(1001, "Lana Ali", "Finance", "Senior");
const TamaraAyoub = new employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const SafiWalid	= new employee(1003,"Safi Walid","Administration","Mid-Senior");
const OmarZaid = new employee(1004,"Omar Zaid","Development","Senior");
const RanaSaleh	= new employee(1005,"Rana Saleh","Development","Junior");
const HadiAhmad = new employee( 1006,"Hadi Ahmad","Finance","Mid-Senior");

console.log(ourEmployees);
// this solution will render each employee in the main section at the information entery point and will put each employee int its seperate element to makr it easier to eal with 

// #################################################################################################
// each one of those approach down render on value only which it the last one entered if combined with  document.getElementById("dom").innerHTML in the render function 
// 
// GhaziSamer.render();
// LanaAli.render();
// TamaraAyoub.render();


// for(let i=0;i<ourEmployees.length;i++){
//     document.getElementById("dom").innerHTML=`employee name ${ourEmployees[i].name} <br> employee salary ${ourEmployees[i].salary}`;
// }
// for(let i=0;i<ourEmployees.length;i++){
//     document.write(`employee name:${ourEmployees[i].name} <br> net salary =${ourEmployees[i].salary}<br>`)
// }
