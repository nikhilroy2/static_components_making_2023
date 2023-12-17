
let count = 0;
let animate_count = 0;
function vehicleStore() {
    let road_lane = document.querySelectorAll('.road_lane');
    
    let countRandom = Math.floor(Math.random() * road_lane.length);
    road_lane[countRandom].innerHTML +=`<span class="vehicle">V</span>`
    vehicleAnimate(count);
    count++;
}

vehicleStore() // init

let vehicleStoreUpdate = setInterval(()=> {
    vehicleStore() // init update
}, 5000)

function vehicleAnimate(vehicle_count) {
    
    let vehicle = document.querySelectorAll('.vehicle')[vehicle_count];

    let animate_update = setInterval(() => {
        animate_count++;
        console.log(animate_count)
        vehicle.style.top = animate_count + '%';
       
        if(animate_count >= 100){
            clearInterval(animate_update)
        }

    }, 100)


}