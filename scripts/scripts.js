window.onload=function(){

    let blueprint = document.querySelector(".blueprint")
    let generalAssembly = document.querySelector(".ga")
    let bpDesc = document.querySelector(".blueprint-desc")
    let gaDesc = document.querySelector(".ga-desc")
    let mixtapeGrid = document.querySelector("#mixtape")
    let cookingGrid = document.querySelector("#cooking")
    let travelrGrid = document.querySelector("#travelr")
    let memoryGrid = document.querySelector("#memory")
    let mixtape = document.querySelector(".mixtape-project")
    let cooking = document.querySelector(".cooking-project")
    let travelr = document.querySelector(".travelr-project")
    let memory = document.querySelector(".memory-project")
    let row = document.querySelectorAll(".row")
    let back = document.querySelectorAll(".back")
        
        function hideGA() {
        blueprint.classList.add("selected");
        gaDesc.classList.add("hide");
        bpDesc.classList.remove("hide");
        generalAssembly.classList.remove("selected");
        }
        function hideBlueprint() {
        generalAssembly.classList.add("selected");
        bpDesc.classList.add("hide");
        gaDesc.classList.remove("hide");
        blueprint.classList.remove("selected");
        }


        function showMixtape() {
        mixtape.classList.remove("hide");
        var elems = document.getElementsByClassName('project-row');
            for (i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = 'none';
            }
        }
        function showTravelr() {
        travelr.classList.remove("hide");
        var elems = document.getElementsByClassName('project-row');
            for (i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = 'none';
            }
        }
        function showCooking() {
        cooking.classList.remove("hide");
        var elems = document.getElementsByClassName('project-row');
            for (i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = 'none';
            }
        }
        function showMemory() {
        memory.classList.remove("hide");
        var elems = document.getElementsByClassName('project-row');
            for (i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = 'none';
            }
        }
        function hideProject() {
        mixtape.classList.add("hide");
        cooking.classList.add("hide");
        travelr.classList.add("hide");
        memory.classList.add("hide");
        var elems = document.getElementsByClassName('project-row');
            for (i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = 'block';
            }
        }
        
        blueprint.addEventListener("click", hideGA);
        generalAssembly.addEventListener("click", hideBlueprint);
        mixtapeGrid.addEventListener("click", showMixtape);
        travelrGrid.addEventListener("click", showTravelr);
        cookingGrid.addEventListener("click", showCooking);
        memoryGrid.addEventListener("click", showMemory);
        for (let i = 0; i < back.length; i++) {
            back[i].addEventListener('click', hideProject, false);
            }


            
}