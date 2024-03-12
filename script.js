// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car);
function loadproject(){
    fetch('project.json')
    .then(res => res.json())
    .then(data => displayproject(data))
}

loadproject();


function displayproject(data){
    const allproject = document.getElementById('project');
    for(const protfolio of data){
        const div = document.createElement('div');
        div.classList.add("user")
        div.innerHTML = `
       
         <div class="position-relative photo">
            <img src="${protfolio.image}" class="card-img-top " alt="...">
            <a href="#"><button type="button" class="plus-btn position-absolute top-50 start-50 translate-middle" >+</button></a>

          </div>
        
        
        `;
        allproject.appendChild(div);

        console.log(project);
    }
}