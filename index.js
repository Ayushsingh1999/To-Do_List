
const title = document.getElementById("title")
const Description = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")


// const tasks =[]  //array of objects hai ye

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];

showAllTasks(); //render karne ko

function showAllTasks() 
{
    tasks.forEach((value,index) =>
    {
     const div = document.createElement("div");
     div.setAttribute("class","task");

     const innerDiv = document.createElement("div");
     div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span")
    span.innerText = value.Description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class","delBtn");

    btn.innerText = "-";

    
btn.addEventListener("click",()=>
{
    removeTasks();
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
})
 
    div.append(btn);

    container.append(div);


    });
} 

function removeTasks()
{
    tasks.forEach((value,Index)=>
    {
        const div =document.querySelector(".task");
        div.remove();
    })
}



form.addEventListener("submit",(e)=>
{
    e.preventDefault(); //ye rokega reload hone se form ko
    removeTasks();
    tasks.push(
        {
            title : title.value ,
            Description: Description.value,
        }
    );

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
})



