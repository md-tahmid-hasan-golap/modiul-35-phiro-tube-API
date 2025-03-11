
// API lode kortechi 

function loadCatagori (){
//  1 --  akhon amra prothome fetch korbo

fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")

// 2 -- convert json promised

.then((res) => res.json())
// 3 -- send data to display

.then((data) => displayCatagori(data.categories) )
}

function displayCatagori (categories){
const catagoriContainar = document.getElementById("catagory-containar");

for(let cat of categories){
    // console.log(cat)

    const creatDiv = document.createElement("div");
creatDiv.innerHTML = `
<button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.categories}</button>


`// append child korlam 
catagoriContainar.appendChild(creatDiv)
}



}

loadCatagori()