
let booked = 0;

const seats = document.querySelectorAll('#seats');

for(let seat of seats) {
    
    seat.addEventListener('click', function(e) {

        booked += 1;

        if(booked > 4) {
            alert('Can not book more than 4');
            return;
        }

        if(booked == 4) {
            let apply = document.getElementById('apply');
            apply.removeAttribute('disabled');
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

    })
}

function getValue(id) {
    let val = document.getElementById(id);
    val = parseInt(val.innerText);
    return val;
}

function setValue(id, val) {
    let x = document.getElementById(id);
    x.innerText = val;
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