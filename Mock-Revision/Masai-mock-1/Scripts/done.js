// Write code related to Done page here

let done = JSON.parse(localStorage.getItem("done-list"));
//  console.log(done)
displayData(done)

function displayData(res){
document.querySelector("tbody").innerHTML="";

res.forEach(function(el,index){
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.task_name;

    let td2 = document.createElement("td");
    td2.innerText = el.description;

    let td3 = document.createElement("td");
    td3.innerText = el.start_date;

    let td4 = document.createElement("td");
    td4.innerText = el.last_date;

    let td5 = document.createElement("td");
    td5.innerText = el.priority;

    row.append(td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(row);
})
}
