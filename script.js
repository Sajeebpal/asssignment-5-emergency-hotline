
// Heart count section function 

const heartBtns = document.getElementsByClassName('heart-btn')
for (const heartBtn of heartBtns) {
        heartBtn.addEventListener('click', function () {
            let initHeart = parseInt(document.getElementById('heart-count').innerText);
            let finalHeart = initHeart + 1;
            document.getElementById('heart-count').innerText = finalHeart;
            // console.log(finalHeart);
            
            })
    }
    
    
//call sec functionalities
const historyData = [];

const callBtns = document.getElementsByClassName('call-btn');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function (event) {
        const coinCount = parseInt(document.getElementById('coin-count').innerText);
        if (coinCount < 20) {
            alert("😪 Sorry! You don't have enough coins")            
        }
        else {
            document.getElementById('coin-count').innerText = coinCount - 20;
            
            
        //alert section
        const serviceName = event.target.parentNode.parentNode.querySelector('.service-name').innerText;
        const serviceNo = event.target.parentNode.parentNode.querySelector('.call-Num').innerText;
            alert("📞 Calling " + serviceName + ' ' + serviceNo);
            
            // history finctionalities 
            const callingData = {
                serviceName: serviceName,
                Num: serviceNo,
                date:new Date().toLocaleTimeString()
            }
            historyData.push(callingData);
            // console.log(historyData);
            
            const historyContainer = document.getElementById('history-container');

            historyContainer.innerText = ''; // need to delete previous history first. then after one more call new history will stor in the array. then again loop them all and append one by one 

            for (const history of historyData) {
                const hisCard = document.createElement('div')
                hisCard.innerHTML = `
                <div class="flex justify-between items-center bg-gray-100 px-4 py-3 mt-4 rounded-xl">
                    <div>
                        <h2 id="service-name" class="text-[18px] font-semibold">${history.serviceName}</h2>
                        <p id="mob-num" class="text-gray-500">${history.Num}</p>
                    </div>
                    <p id="call-time" class="text-black"> ${history.date}</p>
                </div>
                `
                historyContainer.appendChild(hisCard);
                // hisCard.innerText = '';
                // console.log(document.getElementById('history-container'));
                
            }
            

        }
        
    })
}

//clear button functions
document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('history-container').innerText = '';
    historyData.length = 0; //need to empty the array
    
})


//copy button functionalities
const copyBtns = document.getElementsByClassName('copy-btn')
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function (event) {
        alert('📞 Phone number copied to clipboard successfully!');

        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        document.getElementById('copy-count').innerText = copyCount + 1;
        
        navigator.clipboard.writeText(event.target.parentNode.parentNode.querySelector('.call-Num').innerText);


    })
}
