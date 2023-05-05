window.onload=function(){

    let blueprint = document.querySelector(".blueprint")
    let generalAssembly = document.querySelector(".ga")
    let bpDesc = document.querySelector(".blueprint-desc")
    let gaDesc = document.querySelector(".ga-desc")
   
        
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


        blueprint.addEventListener("click", hideGA);
        generalAssembly.addEventListener("click", hideBlueprint);

            
}