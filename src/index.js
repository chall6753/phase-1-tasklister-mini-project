// let submit = document.getElementById('submit')
// console.log(submit)
document.addEventListener('DOMContentLoaded', () =>{
  document.getElementById('create-task-form').addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(e.target.newTaskDescription.value)
    let newListItem = document.createElement('li')
    newListItem.textContent = document.getElementById('newTaskDescription').value
    document.getElementById('tasks').appendChild(newListItem)
    
  })
})


 


