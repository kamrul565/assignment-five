
let booked = 0;
let costs = 0;

const seats = document.querySelectorAll('#seats');

for (let seat of seats) {

    seat.addEventListener('click', function (e) {

        booked += 1;

        if (booked > 4) {
            alert('Can not book more than 4');
            return;
        }

        if (booked == 4) {
            let apply = document.getElementById('apply');
            //apply.removeAttribute('disabled');
            apply.disabled = false;
        }
        else {
            let apply = document.getElementById('apply');
            apply.disabled = true;
        }

        //background change
        let tar = e.target;
        tar.style.backgroundColor = '#1DD100';
        tar.style.color = 'white';

        let seatNo = e.target.innerText;
        addSeats(seatNo);


        let avaliableSeats = getValue('available-seats');
        setValue('available-seats', avaliableSeats - 1);

        setValue('selected-seats', booked);

        costs += 550;
        setValue('total-cost', costs);
        setValue('grand-total', costs);

    })
}

document.getElementById('apply').addEventListener('click', function(e) {
    const cupponOffer = document.getElementById('cuppon-offer');
    let val  = cupponOffer.value;

    let arr = val.split(' ');


    let offer = arr[0];
    offer = offer.toLowerCase();
    if(arr.length == 2) offer += arr[1];

    if(offer == 'new15') {
        let discount = costs - (costs * 0.15);
        setValue('grand-total', discount);
        hidden('cupon-div');
    }
    else if(offer == 'couple20') {
        let discount = costs - (costs * 0.2);
        setValue('grand-total', discount);
        hidden('cupon-div');
    }
    else {
        alert('Please enter valid Cupon!!');
    }
    
    //console.log(offer);


    cupponOffer.value = '';

    
})


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
})

function getValue(id) {
    let val = document.getElementById(id);
    val = parseInt(val.innerText);
    return val;
}

function setValue(id, val) {
    let x = document.getElementById(id);
    x.innerText = val;
}

function hidden(id) {
    let x = document.getElementById(id);
    x.classList.add('hidden');
}

function addSeats(seatNo) {
    let seat = document.createElement('div');
    seat.classList.add('flex', 'justify-between')
    let seatName = document.createElement('p');
    seatName.innerText = seatNo;

    let className = document.createElement('p');
    className.innerText = 'Economoy';


    let price = document.createElement('p');
    price.innerText = '550';

    seat.appendChild(seatName);
    seat.appendChild(className);
    seat.appendChild(price);

    document.getElementById('selected-seat-list').appendChild(seat);
}




let apply = document.getElementById('apply');
apply.disabled = true;

let nextBtn = document.getElementById('next-btn');
nextBtn.disabled = true;

