const form = document.querySelector('.add-event');
const todos = document.querySelector('.todo');
const searchEvent = document.querySelector('.search-event');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  todos.innerHTML+=`<li class="list-group-item text-center">
    <span>${form.add.value}</span>
    <i class="far fa-trash-alt float-right delete"></i>
  </li>`
  form.reset();
});

todos.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete'))
    e.target.parentElement.remove();
})

const search = (word) =>{
  Array.from(todos.children)
  .filter((wrd)=>{ return !wrd.textContent.includes(word); })
  .forEach((wrd)=>{ wrd.style = 'display:none' });

  Array.from(todos.children)
  .filter((wrd)=>{ return wrd.textContent.includes(word); })
  .forEach((wrd)=>{ wrd.style = 'display:' });

}

searchEvent.addEventListener('keyup',(e)=>{
  search(e.target.value);
});
