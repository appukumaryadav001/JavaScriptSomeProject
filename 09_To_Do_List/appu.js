const form = document.querySelector("form");
const input = document.querySelector("#task");
const div = document.getElementById("allTask");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
const text = input.value.trim();
 const parent = document.createElement("div");
  parent.style.marginTop = "20px";
 const task = document.createElement("span");
 task.textContent=text;
 task.style.marginRight = "20px";
 task.style.marginLeft = "20px";
 const deleteBtn = document.createElement('button');
  deleteBtn.style.marginRight = "20px";
    deleteBtn.style.width = "50px"
 deleteBtn.classList.add('deleteBtn');
 deleteBtn.textContent= "delet";
const doneBtn = document.createElement("button");
doneBtn.classList.add("doneBtn");
doneBtn.textContent= "done";
    doneBtn.style.width = "50px"
 doneBtn.style.marginRight = "20px";
parent.append(task,doneBtn,deleteBtn);
div.append(parent);

doneBtn.addEventListener('click',()=>{
    task.style.textDecoration="line-through";
    task.style.color="grey";
})
deleteBtn.addEventListener("click",()=>{
    parent.remove();
})

form.reset();
});




