const img = document.querySelectorAll('.project img');
const viewProjects = document.querySelectorAll('.project .view-project');


for(let i = 0; i < viewProjects.length; i++){


img[i].addEventListener('mouseover', () => {
  viewProjects[i].classList.add('show');
  console.log("hhh")
});

img[i].addEventListener('mouseout', () => {
  viewProjects[i].classList.remove('show');
});

}
