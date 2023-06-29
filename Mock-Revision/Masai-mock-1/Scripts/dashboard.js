// Write code related to dashboard page here

let dash = JSON.parse(localStorage.getItem("task-list"));
//  console.log(dash)
displayData(dash)

let total_task = dash.length;
// console.log(total_task)
document.querySelector("h1>span").innerText = total_task;

const handlePriority =()=>{
    let filterTodo = document.querySelector("#filter").value;
    // console.log(dash)
    // let filteredData = dash.filter(function(el){
    //     return el.priority == filterTodo
    // })
    if(filterTodo == ""){
        displayData(dash)
    } else{
        displayData(
            dash.filter(function(el){
                return el.priority == filterTodo
            }) 
        )
    }

    // console.log(filteredData)
    // displayData(filteredData)
}

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

    let td6 = document.createElement("td");
    td6.innerText = "Add";
    td6.addEventListener("click",function(){
        // let remove = dash.splice(index)
        // console.log(remove)
        // localStorage.setItem("priority-list",JSON.stringify(remove))
        // displayData(remove)
        
    })

    row.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(row);
})
}
