// const conteiner = document.querySelector('.conteiner')
// const open = document.querySelector('.open')
// const button = document.querySelectorAll('.one')
// const ul = document.querySelector('.spisok')
// button.onclick = function() {
//     let li = document.createElement('li')
//     ul.append(li)
//     console.log(li)
// }




// function addItem(self) {
// 	const li = document.createElement('li')
//   const ul = document.querySelector('.spisok')
  
//   let text = self.querySelector('p').innerText
//   console.log(text)
//   li.innerText = text
//   ul.append(li) 
// }

// function remove() {
//   const remove = document.querySelector('.remove')
//   li.remove()
// }


function addItem(self) { 
  const li = document.createElement('li') 
  const remove1 = document.createElement('button')
  li.classList.add('addItem') 
  remove1.classList.add('addItem2')
  const ul = document.querySelector('.spisok') 
  remove1.classList.add('addItem2') 
  let text = self.querySelector('p').innerText 
  console.log(text) 
  li.innerText = text 
  ul.append(remove1)
  ul.append(li)  
  console.log(li) 
  
} 

const btnRemove2 = document.querySelectorAll('.addItem2')
const btnRemove = document.querySelector('.remove') 
btnRemove.addEventListener('click', removeItems) 
 
function removeItems2() {
  const allAdded2 = document.querySelectorAll('.addItem2')
  for (const item of allAdded2) {
    item.remove()
  }
}

function removeItems() { 
  const allAdded = document.querySelectorAll('.addItem') 
  console.log(allAdded) 
  for (const item of allAdded) { 
    item.remove()    
  } 
}




















