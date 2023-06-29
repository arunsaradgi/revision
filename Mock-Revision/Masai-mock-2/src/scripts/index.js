//add your js code here
let currentPage = 1;
let totalPages = 0;
const matchesPerPage = 10;

let url = `https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=${currentPage}`;
let Data = [];

async function getData() {
    try {
        let data = await fetch(url)
        let res = await data.json()
        Data = res.data;
        totalPages = data.total_pages;
        console.log(Data)
        displayCard(Data)
    } catch (err) {
        console.log(err)
    }
}
getData()

 
 let prevBtn = document.querySelector("#prev");
 let nextBtn = document.querySelector("#next");

 prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      getData(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchMatches(currentPage);
    }
  });

function displayCard(res) {
    document.querySelector("tbody").innerHTML = '';
    //  for(let i=0;i<res.length;i++){
    res.forEach((el,index)=>{
        let row = document.createElement("tr");

        let td1 = document.createElement("td")
        td1.innerText = el.competition;

        let td2 = document.createElement("td")
        td2.innerText = el.year;

        let td3 = document.createElement("td")
        td3.innerText = el.round;

        let td4 = document.createElement("td")
        td4.innerText = el.team1;

        let td5 = document.createElement("td")
        td5.innerText = el.team2;

        let td6 = document.createElement("td")
        td6.innerText = el.team1goals;

        let td7 = document.createElement("td")
        td7.innerText = el.team1goals;

        row.append(td1,td2,td3,td4,td5,td6,td7)

        document.querySelector("tbody").append(row)
    //  }
    })
}