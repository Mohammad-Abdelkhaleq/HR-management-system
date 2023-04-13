'use strict';
console.log(Object.keys(localStorage));
let retreivedArr = [];
let keyArray = Object.keys(localStorage);
function getData() {
    if (keyArray !== null) {
        for (let i = 0; i < keyArray.length; i++) {
            let retreivedData = JSON.parse(localStorage.getItem(keyArray[i]));
            retreivedArr.unshift(retreivedData);
        }
    }
    console.log("this is the retreieved array",retreivedArr)
}
getData();
// #################################################################################
let depatments=[];
let Administration=[];
let Marketing=[];
let Finance=[];
let Development=[];
for(let i =0;i<retreivedArr.length;i++){
    if(retreivedArr[i].deprtment==="Administration"){
        Administration.push(retreivedArr[i]);
        if (depatments.includes("Administration")===false) {
        depatments.push("Administration");
        }
    }else if(retreivedArr[i].deprtment==="Marketing"){
        Marketing.push(retreivedArr[i]);
        if (depatments.includes("Marketing")===false) {
            depatments.push("Marketing");
            }
    }else if(retreivedArr[i].deprtment==="Finance"){
        Finance.push(retreivedArr[i]);
        if (depatments.includes("Finance")===false) {
            depatments.push("Finance");
            }
       
    }else if (retreivedArr[i].deprtment==="Development"){
        Development.push(retreivedArr[i]);
        depatments.push("Development");
    }
}
console.log("addmin",Administration);
console.log("market",Marketing);
console.log(depatments);
// #########################################################################################


function calcoverAllSalary(){
    let overallSalary=0

    for(let i=0;i<retreivedArr.length;i++){
        overallSalary=overallSalary+retreivedArr[i].salary;
    }
    return overallSalary;
}


function calcTotalSalary(arr){
    let tSalary=0;
    for(let i=0;i<arr.length;i++){
        tSalary=tSalary+arr[i].salary;
    }
    return tSalary;
}
function calcAverageSalary(arr){
    let tSalary=0
    for(let i=0;i<arr.length;i++){
        tSalary=tSalary+arr[i].salary;
    }
    let averageSalary=Math.round(tSalary/arr.length);
    return averageSalary
}


function render(dep){
    let newRow=document.createElement("tr")
    newRow.id="row"
    let departmentData = document.createElement("td");
    departmentData.textContent=dep
    newRow.appendChild(departmentData);
    let numberOFEmployee=document.createElement("td");
    if(dep==="Marketing"){
        numberOFEmployee.textContent=Marketing.length;
    }else if (dep==="Administration"){
        numberOFEmployee.textContent=Administration.length;
    }else if (dep==="Finance"){
        numberOFEmployee.textContent=Finance.length;
    }else if (dep==="Development"){
        numberOFEmployee.textContent=Development.length;
    }
    newRow.appendChild(numberOFEmployee);
    let totalSalary = document.createElement("td");
    // totalSalary.textContent=calcTotalSalary()
    if(dep==="Marketing"){
        totalSalary.textContent=calcTotalSalary(Marketing);
    }else if (dep==="Administration"){
        totalSalary.textContent=calcTotalSalary(Administration);
    }else if (dep==="Finance"){
        totalSalary.textContent=calcTotalSalary(Finance);
    }else if (dep==="Development"){
        totalSalary.textContent=calcTotalSalary(Development);
    }
    newRow.appendChild(totalSalary);
    let averageSalary = document.createElement("td");
    if(dep==="Marketing"){
        averageSalary.textContent=calcAverageSalary(Marketing);
    }else if (dep==="Administration"){
        averageSalary.textContent=calcAverageSalary(Administration);
    }else if (dep==="Finance"){
        averageSalary.textContent=calcAverageSalary(Finance);
    }else if (dep==="Development"){
        averageSalary.textContent=calcAverageSalary(Development);
    }
    newRow.appendChild(averageSalary);

    let accountTable=document.getElementsByTagName("table")[0];
    accountTable.appendChild(newRow);
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // let theFooter=document.createElement("tfoot");
    // let footerRow=document.createElement("tr");
    // let thefooterdata=document.createElement("td")
    // theFooter.appendChild(footerRow);
    // accountTable.appendChild(theFooter);

}
function footerRender(){
    let accountTable=document.getElementsByTagName("table")[0];
    let theFooter=document.createElement("tfoot");
    let footerRow=document.createElement("tr");
    theFooter.appendChild(footerRow)
    let thefooterdata=document.createElement("td")
    thefooterdata.textContent=`# of department ${depatments.length}`
    footerRow.appendChild(thefooterdata)
    let numberOFEmployees=document.createElement("td");
    numberOFEmployees.textContent=keyArray.length;
    footerRow.appendChild(numberOFEmployees);
    let ovaerallSalaryData=document.createElement("td");
    ovaerallSalaryData.textContent=calcoverAllSalary();
    footerRow.appendChild(ovaerallSalaryData);
    let depAverageSalary=document.createElement("td");
    depAverageSalary.textContent=Math.round(calcoverAllSalary()/retreivedArr.length);
    footerRow.appendChild(depAverageSalary);
    theFooter.appendChild(footerRow);
    accountTable.appendChild(theFooter);
}



if(Object.keys(localStorage)!==null){
for(let i=0;i<depatments.length;i++){
render (depatments[i])
}
footerRender();
}

// ######this is just to create a branch because i forgot 
