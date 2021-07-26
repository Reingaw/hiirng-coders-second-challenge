window.onload = ()=> {
    const stock = JSON.parse(localStorage.getItem('zaoStoreProducts'));
    const buttons = document.querySelectorAll('.card button');
    const cartCounter = document.querySelector('#cart-counter');

    const mBody = document.querySelector('body');
    
    const iCart = document.querySelector('.icon');
    const popUp = document.querySelector('.pop-up');
    
    const inName = document.querySelector('#name');
    const inTel = document.querySelector('#tel');
    const inEmail = document.querySelector('#email');
    const finishCart = document.querySelector('#finish-cart');

    let cart = [];
    
    buttons.forEach(button=> {
        button.addEventListener('click', ()=> {
            let ct = 1;
            if(cart.length > 0) {
                cart.forEach(item=> {
                    if(item.id === button.id) {
                        item.qt += 1;
                        ct--;
                    }                    
                    ct++
                })
                if(cart.length < ct) {
                    cart.push({id: button.id, qt: 1});
                }
            }else {
                cart = [{id: button.id, qt: 1}]
            }
           console.log(cart);
           cartCounter.innerHTML = cart.length;
        })
    })

    iCart.addEventListener('click', ()=> {
        if(cart.length !== 0){
            popUp.style.display = 'flex';
            mBody.style.overflow = 'hidden';
        }        
    })

    finishCart.addEventListener('click', ()=> {
        let zaoSell = [{
            customerName: inName.value,
            customerTel: inTel.value,
            customerEmail: inEmail,
            products: cart
        }];

        localStorage.setItem('zaoSellCompleted', JSON.stringify(zaoSell));

        popUp.style.display = 'none';
        mBody.style.overflow = 'visible';
    })
}