const conversions = {
    length: {
        metersToFeet: 3.281,
        feetToMeters: 1 / 3.281
    },
    volume: {
        litersToGallons: 0.264,
        gallonsToLiters: 1 / 0.264
    },
    mass: {
        kilosToPounds: 2.204,
        poundsToKilos: 1 / 2.204
    }
};

const inputNumber = document.getElementById('input-number');
const btnInput = document.getElementById('btn-input');
const displayLength = document.getElementById('display-length');
const displayVolume = document.getElementById('display-volume');
const displayMass = document.getElementById('display-mass');



btnInput.addEventListener('click', ()=>{
    let value = Number(inputNumber.value);

    if (!value || value < 0) {
        displayLength.innerHTML = displayVolume.innerHTML = displayMass.innerHTML = `Write a valid number!`;
        return;
        
    }else{

    // Length
    const metersToF = (value * conversions.length.metersToFeet).toFixed(3);
    const feetToM = (value * conversions.length.feetToMeters).toFixed(3);
    displayLength.innerHTML = `${value} meters = ${metersToF} feet | ${value} feet = ${feetToM} meters`;
    
    // Volume
    const litersToG = (value * conversions.volume.litersToGallons).toFixed(3);
    const gallonsToL  = (value * conversions.volume.gallonsToLiters).toFixed(3);
    displayVolume.innerHTML = `${value} liters = ${litersToG} gallons | ${value} gallons = ${gallonsToL} liters`;
    
    // Mass
    const kilosToP  = (value * conversions.mass.kilosToPounds).toFixed(3);
    const poundsToK = (value * conversions.mass.poundsToKilos).toFixed(3);
    displayMass.innerHTML = `${value} kilos = ${kilosToP} pounds | ${value} pounds = ${poundsToK} kilos`;
    }
})



