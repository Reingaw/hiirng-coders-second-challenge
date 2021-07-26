window.onload = ()=> {
    const stock = JSON.parse(localStorage.getItem('zaoStoreProducts'));
    const buttons = document.querySelectorAll('button');
    let cart = [];
    
    buttons.forEach(button=> {
        button.addEventListener('click', ()=> {
            if(cart.length > 0) {
                cart.forEach(item=> {
                    if(item.id === button.id) {
                        item.qt += 1;
                        return;
                    }
                })
            }else {
                cart = [{id: button.id, qt: 1}]
            }
           console.log(cart);
        })
    })
}