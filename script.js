
var wave1 = document.getElementById('wave1');
var wave2 = document.getElementById('wave2');
var wave3 = document.getElementById('wave3');
var wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function() {
  var value = window.scrollY;
  wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
  wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
  wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
  wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
});

const dateElement = document.getElementById('date');
const today = new Date();
const options = {weekday:"long", month:"short", day:"numeric"};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


const input = document.querySelector('input');

const btn = document.getElementById('task-submit');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
  (e.keyCode === 13 ? addList(e) : null)
});

function addList(e) {
  const notComplete = document.querySelector('.notComplete');
  const Complete = document.querySelector('.Complete');
  
  const newLi = document.createElement('li');
  newLi.classList.add('list');

  const task_input_el = document.createElement('input');
  task_input_el.classList.add('text')
  task_input_el.type = 'text';
  task_input_el.setAttribute('readonly','readonly');

  const checkbtn = document.createElement('button');
  checkbtn.classList.add('checkbtn');

  const dltbtn = document.createElement('button');
  dltbtn.classList.add('dltbtn');

  const editbtn = document.createElement('button');
  editbtn.classList.add('edit');
  
  checkbtn.innerHTML = '<i class="fa fa-check fa-lg"></i>';
  dltbtn.innerHTML = '<i class="fa fa-trash fa-lg"></i>';
  editbtn.innerHTML = 'Edit';

  if (input.value !== '') {
    task_input_el.value = input.value;
    input.value = '';
    notComplete.appendChild(newLi);
    newLi.appendChild(task_input_el);
    newLi.appendChild(checkbtn);
    newLi.appendChild(dltbtn);
    newLi.appendChild(editbtn);
  }  
  checkbtn.addEventListener('click', function() {
    const parent = this.parentNode;
    parent.remove();
    Complete.appendChild(parent);
    checkbtn.style.display = 'none';
  });
  dltbtn.addEventListener('click', function() {
    const parent = this.parentNode;
    parent.remove();
  });
  editbtn.addEventListener('click',function(){
     if(editbtn.innerText.toLowerCase() == "edit"){
       task_input_el.removeAttribute('readonly');
       task_input_el.focus();
       editbtn.innerText = 'Save';
       editbtn.style.display = 'block';
     }
     else{
      task_input_el.setAttribute('readonly', 'readonly');
      editbtn.innerText = 'Edit';
    }
   
  });
}
