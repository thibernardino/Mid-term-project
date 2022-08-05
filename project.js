async function renderData() {
  let url3 = "https://jsonplaceholder.typicode.com/posts/1";

  const response = await fetch(url3);
  const res = await response.json();

  let dataProject = `
    <div class="container project">
    <h1 class="project_title"> ${res.title.split(" ")[0]} ${
    res.title.split(" ")[1]
  } </h1>
    <div class="project_type">
        <p class="type1">UI Design & App Development</p>
        <div class="project_completed">
        <p class="completed">Completed on</p>
        <p class="data">2/2/22</p>
        </div>
    </div>
    <div class="project_detail img">
        <img
        class="img_details"
        src="./project-assets/projects-section/1.jpg"
        alt=""
        />
    </div>
    <div class="project_detail text">
        <p>
       ${res.body}
        </p>
    </div>
    </div> `;

  let container = document.querySelector(".project");
  console.log(container);
  container.innerHTML = dataProject;
}

renderData();
