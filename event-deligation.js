
document.addEventListener('click', function (event) {
    
    if (event.target.matches(".call-btn")) {
        const serviceName = event.target.parentNode.parentNode.children[1].innerText
        const serviceNum = event.target.parentNode.parentNode.children[3].innerText

        const coinCount = parseInt(document.getElementById('coin-count').innerText);

        if (coinCount < 20) {
            alert('Sorry! Don\'t have enough coins');            
        } else {
            alert("📞 Calling " + serviceName + ' ' + serviceNum);
            document.getElementById('coin-count').innerText = coinCount - 20; 
                     

            const historyContainer = document.getElementById('history-container');
            const history = document.createElement('div');
            history.innerHTML = `
            <div class="flex justify-between items-center bg-gray-100 px-4 py-3 mt-4 rounded-xl">
                    <div>
                        <h2 id="service-name" class="text-[18px] font-semibold">${serviceName}</h2>
                        <p id="mob-num" class="text-gray-500">${serviceNum}</p>
                    </div>
                    <p id="call-time" class="text-black"> ${new Date().toLocaleTimeString()}</p>
                </div>
                `
            historyContainer.append(history);
        }
        
        
    }
    
    if (event.target.matches("#clear-btn")) {
        // console.log('clear');
        
        document.getElementById('history-container').innerHTML = ``;
    }

    if (event.target.matches(".copy-btn")) {
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        document.getElementById('copy-count').innerText = copyCount + 1;
        navigator.clipboard.writeText(event.target.parentNode.parentNode.children[3].innerText);
    }
    
    
    if (event.target.closest('.heart-btn')) {
        const loveCount = parseInt(document.getElementById('heart-count').innerText);
        document.getElementById('heart-count').innerText = loveCount + 1

        console.log(loveCount);
        
        
        
    }
            
    
    
    
})

