const addBtn = document.getElementById("btn-field");
const titleInput = document.getElementById("title-field");
const descInput = document.getElementById("desc-field");
const noteSection = document.getElementById("note-section")

var count = 0

addBtn.addEventListener("click", () => {
    count++
    console.log(count)
    // TODO: title and desc inside div
    const titleValue = titleInput.value
    const descValue = descInput.value
    
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
    console.log(sect.id)
    noteSection.appendChild(sect)


    document.getElementById("content"+count).appendChild(noteTitleList);
    document.getElementById("content"+count).appendChild(noteDescList);



});