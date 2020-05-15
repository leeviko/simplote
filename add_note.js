const addBtn = document.getElementById("btn-field");
const titleInput = document.getElementById("title-field");
const descInput = document.getElementById("desc-field");

addBtn.addEventListener("click", () => {
    const titleValue = titleInput.value
    const descValue = descInput.value

    const noteTitleList = document.createElement("li");
    const noteDescList = document.createElement("li");
    noteTitleList.classList.add("title-sect")
    noteDescList.classList.add("desc-sect")

    const titleNode = document.createTextNode(titleValue);
    const descNode = document.createTextNode(descValue);

    noteTitleList.appendChild(titleNode)
    noteDescList.appendChild(descNode)
    document.getElementById("note_list").appendChild(noteTitleList);
    document.getElementById("note_list").appendChild(noteDescList);

    // console.log(titleValue)
    // console.log(descValue)

    // document.getElementById("")

})