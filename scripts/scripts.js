window.onload=function(){

    let blueprint = document.querySelector(".blueprint")
    let generalAssembly = document.querySelector(".ga")
    let freelance = document.querySelector(".freelance")
    let bpDesc = document.querySelector(".blueprint-desc")
    let gaDesc = document.querySelector(".ga-desc")
    let freelanceDesc = document.querySelector(".freelance-desc")
   
    function hideBoth() {
        freelance.classList.add("selected");
        freelanceDesc.classList.remove("hide");
        bpDesc.classList.add("hide");
        gaDesc.classList.add("hide");
        blueprint.classList.remove("selected");
        generalAssembly.classList.remove("selected");
        }
        function hideGA() {
        blueprint.classList.add("selected");
        gaDesc.classList.add("hide");
        bpDesc.classList.remove("hide");
        generalAssembly.classList.remove("selected");
        freelanceDesc.classList.add("hide");
        freelance.classList.remove("selected");
        }
        function hideBlueprint() {
        generalAssembly.classList.add("selected");
        bpDesc.classList.add("hide");
        gaDesc.classList.remove("hide");
        blueprint.classList.remove("selected");
        freelanceDesc.classList.add("hide");
        freelance.classList.remove("selected");
        }


        blueprint.addEventListener("click", hideGA);
        generalAssembly.addEventListener("click", hideBlueprint);
        freelance.addEventListener("click", hideBoth);
        

}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const projects = document.querySelectorAll(".project-parent-container > .container");

    document.getElementById("nextBtn").addEventListener("click", function () {
        showProject(currentIndex + 1);
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        showProject(currentIndex - 1);
    });

    function showProject(index) {
        projects[currentIndex].style.display = "none";
        currentIndex = (index + projects.length) % projects.length;
        projects[currentIndex].style.display = "block";
    }
});
