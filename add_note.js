const addBtn = document.getElementById("btn-field");
let titleInput = document.getElementById("title-field");
let descInput = document.getElementById("desc-field");
const noteSection = document.getElementById("note-section")

var count = 0

addBtn.addEventListener("click", () => {
    count++
    
    let titleValue = titleInput.value
    let descValue = descInput.value
    

    const noteTitleList = document.createElement("div");
    const noteDescList = document.createElement("div");
    noteTitleList.classList.add("title-sect")
    noteDescList.classList.add("desc-sect")

    const titleNode = document.createTextNode(titleValue);
    const descNode = document.createTextNode(descValue);

    noteTitleList.appendChild(titleNode)
    noteDescList.appendChild(descNode)

    const sect = document.createElement("section");
    sect.id = "content" + count;
    noteSection.appendChild(sect)


    document.getElementById("content"+count).appendChild(noteTitleList);
    document.getElementById("content"+count).appendChild(noteDescList);
    


});