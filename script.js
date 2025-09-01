
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

const callBtns = document.getElementsByClassName('call-btn');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function (event) {
        const serviceName = event.target.parentNode.parentNode.querySelector('.service-name').innerText;
        const serviceNo = event.target.parentNode.parentNode.querySelector('.call-Num').innerText;
        console.log(serviceName, serviceNo);
        
        // alert( '📞 Calling', serviceName + ' ' + serviceNo);
        alert( "📞 Calling "+ serviceName + ' ' + serviceNo);
        
        
         
        // alert('')
    })
}

