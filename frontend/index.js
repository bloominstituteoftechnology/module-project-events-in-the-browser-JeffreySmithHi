// 👉 TASK 1 - Understand the existing code 👈
function moduleProject2() {
  // 👇 WORK WORK BELOW THIS LINE 👇
  let startTime = new Date().getTime() // Record start time
  
  function getTimeElapsed() { // To be used at end of game to get elapsed time
    let currentTime = new Date().getTime()
    return currentTime - startTime
  }

  // Setting up the footer content
  let footer = document.querySelector('footer')
  let currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let keys = { // To easily check `event.key` on keyboard events
    space: ' ',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
  }

  // Helper function to grab all squares
  const getAllSquares = () => document.querySelectorAll('.square')

  // Populating the grid with rows and squares
  for (let n = 0; n < 5; n++) {
    // Creating the rows
    let row = document.createElement('div')
    document.querySelector('#grid').appendChild(row)
    row.classList.add('row')
    // Creating the squares
    for (let m = 0; m < 5; m++) {
      let square = document.createElement('div')
      square.classList.add('square')
      row.appendChild(square)
      square.addEventListener('click', () => {
        // 👉 TASK 2 - Use a click handler to target a square 👈
        if(!square.classList.contains('targeted')){
          getAllSquares().forEach(box => {
            box.classList.remove('targeted')
          })
        } 
        if(square.classList.contains('square')){
          square.classList.add('targeted')
        }
      })
      

    }
    
  }
  document.querySelector('.row:nth-child(3)')
    .children[2].classList.add('targeted') // Initial square being targeted

  // Helper function to obtain 5 random indices (0-24) to put mosquitoes in
  function generateRandomIntegers() {
    let randomInts = []
    while (randomInts.length < 5) {
      let randomInt = Math.floor(Math.random() * 25)
      if (!randomInts.includes(randomInt)) {
        randomInts.push(randomInt)
      }
    }
    return randomInts
  }
  let allSquares = getAllSquares()
  generateRandomIntegers().forEach(randomInt => { // Puts live mosquitoes in 5 random squares
    let mosquito = document.createElement('img')
    mosquito.src = './mosquito.png'
    mosquito.style.transform = `rotate(${Math.floor(Math.random() * 359)}deg) scale(${Math.random() * 0.4 + 0.8})`
    mosquito.dataset.status = 'alive'
    allSquares[randomInt].appendChild(mosquito)
  })

  document.addEventListener('keydown', evt => {
    // 👉 TASK 3 - Use the arrow keys to highlight a new square 👈
    let up = evt.key === keys.up
    let down = evt.key === keys.down
    let left = evt.key === keys.left
    let right = evt.key === keys.right

    let target = document.querySelector('.targeted')
    let currentPlace = Array.from(target.parentElement.children).indexOf(target)
    console.log(currentPlace)
    if(up){
      console.log('Up key pressed')
      //console.log(target.parentElement.previousElementSibling)
      //console.log(target.parentElement.previousElementSibling.firstChild.nextSibling.nextSibling)
      if(target.parentElement.previousElementSibling){
        target.classList.remove('targeted')
        target.parentElement.previousElementSibling.children[currentPlace].classList.add('targeted')
        console.log('can go up')
      } else {
        console.log(`can't go up`)
      }
    }
    if(down){
      console.log('Down key pressed')
      console.log(target.parentElement.nextElementSibling)
      console.log(target.parentElement.nextElementSibling.firstChild.nextSibling.nextSibling)
      if(target.parentElement.nextElementSibling){
        target.classList.remove('targeted')
        target.parentElement.nextElementSibling.children[currentPlace].classList.add('targeted')
        console.log(`can go down`)
      } else {
        console.log(`can't go down`)
      }
    }

    if(left){
      console.log('Left key pressed')
      console.log(target.previousElementSibling)
      if(target.previousElementSibling){
        target.classList.remove('targeted')
        target.previousElementSibling.classList.add('targeted')
        console.log('can go left')
      } else {
        console.log(`can't go left`)
      }

    }
    if(right){
      console.log('Right key pressed')
      console.log(target.nextElementSibling)
      if(target.nextElementSibling){
        target.classList.remove('targeted')
        target.nextElementSibling.classList.add('targeted')
        console.log('can go right')
      } else {
        console.log(`can't go right`)
      }
    }

    

    


    let selectedSQ
    // 👉 TASK 4 - Use the space bar to exterminate a mosquito 👈
    let space = evt.key === keys.space
    if(space){
      console.log(target.firstChild)
      if(target.firstChild){
        console.log(true)
        target.firstChild.setAttribute('data-status', 'dead')
        target.style.backgroundColor = 'red'
      } else {
        console.log(false)
      }
      aliveCounter = document.querySelectorAll('[data-status=alive]')
      if(!aliveCounter.length){
        let time = getTimeElapsed()
        console.log(time)
        let info = document.querySelector('p.info')
        info.textContent = `Extermination completed in ${time / 1000} seconds!`
      }
    }

    


    // 👉 TASK 5 - End the game 👈
  })
    
    
  // 👆 WORK WORK ABOVE THIS LINE 👆

  
  //if(!aliveCounter.length) {
  //  console.log('end')
  //}
    
  
  //let numdata = Array.from(numMosquito.dataset).indexOf(numMosquito)
  //let currentPlace = Array.from(target.parentElement.children).indexOf(target)
  //console.log(mosquitoArr)
  
}

// ❗ DO NOT MODIFY THE CODE BELOW
// ❗ DO NOT MODIFY THE CODE BELOW
// ❗ DO NOT MODIFY THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject2 }
else moduleProject2()
