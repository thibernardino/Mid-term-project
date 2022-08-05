async function getData() {
  let url3 = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`];
  let url = "https://jsonplaceholder.typicode.com/posts";
  try {
    let res = await fetch(url3);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderData() {
  let info = await getData();
  let dataCard = "";
  info.forEach((inform) => {
    let cardInfo = `

      <div class="project-card">
          <div class="project-image">
            <img src="./project-assets/projects-section/${inform.id}.jpg" class="project-card-image">
            </div>
          <div class="project-content">
            <div class="project-text">
              <div class="project-title">${inform.title.split(" ")[0]} ${inform.title.split(" ")[1]}
              </div>
              <div class="project-title project-description">${inform.body}
              </div>
              <a href="project.html" class= "project-link">Learn More</a>
            </div>
          </div>
        </div>
      
        `;
        

    return (dataCard += cardInfo);
  });

  let container = document.querySelector(".collection-item.ps-item");
  container.innerHTML = dataCard;
}

renderData();

