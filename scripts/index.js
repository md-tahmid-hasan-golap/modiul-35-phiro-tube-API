// API lode kortechi

function loadCatagori() {
  //  1 --  akhon amra prothome fetch korbo

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2 -- convert json promised

    .then((res) => res.json())
    // 3 -- send data to display

    .then((data) => displayCatagori(data.categories));
}

function displayCatagori(categories) {
  // main parend div

  const catagoriContainar = document.getElementById("catagory-containar");

  //   loop chalabo ai ber

  for (let cat of categories) {
    console.log(cat);

    // creat element

    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `
<button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>


`; // append child korlam
    catagoriContainar.appendChild(creatDiv);
  }
}

loadCatagori();



// loadVideo function

function loadVideo () {
    // fetch korbo 
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((responce) => responce.json())
    .then((data) => videoDisplay(data.videos))
}



// video display function

function videoDisplay (videos){

    // parent section
    const videoContainar = document.getElementById("video_containar")
        

    // loop chalano
   videos.forEach(video => {
    //   creat Element

    const videoCard = document.createElement("div");
    videoCard.innerHTML =  `
   <div class="card bg-base-100">
            <figure class="relative">
              <img
                src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 rounded-sm px-2 bg-black text-white text-sm py-1">3hrs 56 min ago</span>
            </figure>
            <div class="py-5 flex gap-x-4">
                 <!-- first div -->

              <div>
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>

              </div>
               <!-- last div -->
              <div class="space-y-1">
                <h1 class="font-bold text-sm">Building a Winning UX Strategy Using the Kano Model</h1>
                <div class="flex space-x-2 items-center">
                    <p>${video.authors[0].profile_name}</p>
                    <img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                </div>
                <p>${video.others.views}</p>

              </div>
            </div>
          </div>

    `
    
    videoContainar.appendChild(videoCard)
   });



}

// loadVideo()