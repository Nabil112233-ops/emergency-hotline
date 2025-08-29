// love button section 

const loveIcons = document.querySelectorAll('.love-button')
const loveButtons = document.getElementById('love-count')
let count = 0;

for(const loveIcon of loveIcons){
    loveIcon.addEventListener('click', function() {
        count++
        loveButtons.innerText = count;
    })
}



let coins = 100;
const coinCount = document.getElementById('coin-count')
const callButton = document.querySelectorAll('.call-button')
const historyContainer = document.getElementById('call-history')
const clearHistory = document.getElementById('clear-history')

for(const btn of callButton){
    
    const card = btn.closest('.card')
    const serviceName = card.querySelector('.service-name').innerText
    const serviceNumber = card.querySelector('.service-number').innerText

    btn.addEventListener('click', function() {
        alert(`calling ${serviceName} - ${serviceNumber}`)

        if (coins < 20){
            alert('Not enough coins!')
            return
        }
        coins -= 20;
        coinCount.innerText = coins;


        const time = new Date().toLocaleTimeString();
    const historyItem = document.createElement('div')
    historyItem.classList.add("flex", "justify-between", "bg-[#fafafa]", "p-4", "mx-4", "mt-4")
    historyItem.innerHTML = `
                   <div> 
                      <h1 class="text-[18px] font-semibold">${serviceName}</h1>
                      <h1 class="text-[14px] text-[#5c5c5c]">${serviceNumber}</h1>
                   </div>
                   <div>
                      <p class="text-[18px]">${time}</p>
                   </div> `
            

    historyContainer.appendChild(historyItem)
    })

    clearHistory.addEventListener('click', function() {
        historyContainer.innerHTML = ''
    })
        
}

const serviceName = document.querySelector('.service-name').innerText
const copyCount = document.getElementById('copy-container')
const copyButtons = document.querySelectorAll('.copy-button')
let coCount = 0;

for(const copyButton of copyButtons){
    copyButton.addEventListener('click', function() {
        alert(`Copy ${'serviceName'}`)
        coCount++
        copyCount.innerText = coCount;
    })
}




