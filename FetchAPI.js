/*

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
                  <div class="project-image"><img src="project-assets/projects-section/${inform.id}.jpg" alt="abstract-img-1" class="project-card-image"></div>
                  <div class="project-content">
                    <div class="project-text">
                      <div class="project-title">${item.title.split(' ')[0]} ${item.title.split(' ')[1]}</div>
                      <div class="project-title project-description">${item.body}</div>
                      <a href="#" class="project-link">Learn More</a>
                    </div>
                  </div>
                </div>
              `;
      return (dataCard += cardInfo);
    });
    let container = document.querySelector(".project-card");
    container.innerHTML = dataCard;
  }
  renderData(); 
  */


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
              <img src="./project-assets/projects-section/${inform.id}.jpg"/>
            </div>
            <div class="project-content">
              <div class="project-text">
                <div class="project-title">${inform.title.split(" ")[0]} ${
        inform.title.split(" ")[1]
      }</div>
                <div class="project-definition">${inform.body}</div>
                <a href="project.html?project-card=${
                  inform.id
                }" class= "LearnMore">Learn More</a
                >
              </div>
            </div>
          </div>
          `;
  
      return (dataCard += cardInfo);
    });
  
    let container = document.querySelector(".project-card");
    container.innerHTML = dataCard;
  }