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


let counts = [0,0,0,0,0]
function addItem(self) { 
  const li = document.createElement('li') 
  const button = document.createElement('button')
  button.classList.add('addItem2')
  li.classList.add('addItem') 
  const ul = document.querySelector('.spisok') 
  let text = self.querySelector('p').innerText 
  console.log(text) 
  li.innerText = text
  li.append(button)
  ul.append(li)  

  // const allItems = document.querySelectorAll('.addItem').forEach(element => {
  //   if (element.innerText == text){
  //     counts[index]++
  //     element.innerText = text + counts[index]

  //   }
  // })}
  

  const btnRemove2 = document.querySelectorAll('.addItem2')
  for (let i = 0; i < btnRemove2.length; i++) {
    btnRemove2[i].onclick = function(){
      console.log('hello')
      this.parentElement.remove()
    }
  }
   
 }


const btnRemove = document.querySelector('.remove') 
btnRemove.addEventListener('click', removeItems) 
 
function removeItems() { 
  const allAdded = document.querySelectorAll('.addItem')
  console.log(allAdded) 
  for (const item of allAdded) { 
    item.remove()    
  } 
}





































