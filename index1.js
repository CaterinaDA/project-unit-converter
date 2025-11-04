const conversions = [
    {
        type: "length",
        from: "meters",
        to: "feet",
        factor: 3.281
    },
    {
        type: "length",
        from: "feet",
        to: "meters",
        factor: 1 / 3.281
    },
    {
        type: "volume",
        from: "liters",
        to: "gallons",
        factor: 0.264
    },
    {
        type: "volume",
        from: "gallons",
        to: "liters",
        factor: 1 / 0.264
    },
    {
        type: "mass",
        from: "kilos",
        to: "pounds",
        factor: 2.204
    },
    {
        type: "mass",
        from: "pounds",
        to: "kilos",
        factor: 1 / 2.204
    }
];

const inputNumber = document.getElementById('input-number');
const btnInput = document.getElementById('btn-input');
const displayLength = document.getElementById('display-length');
const displayVolume = document.getElementById('display-volume');
const displayMass = document.getElementById('display-mass');


function convert(value, fromUnit, toUnit) {
    const conv = conversions.find(c => c.from === fromUnit && c.to === toUnit);
    if (!conv) {
        return null;
    }else {
        return (value * conv.factor).toFixed(3);
    }
    
}

btnInput.addEventListener('click', ()=>{
    let value = Number(inputNumber.value);

    if (!value || value < 0) {
        displayLength.innerHTML = displayVolume.innerHTML = displayMass.innerHTML = `Write a valid number!`;
        return;
        
    }else{

    // Length
    const metersToF = convert(value, 'meters', 'feet');
    const feetToM = convert(value, 'feet', 'meters');
    displayLength.innerHTML = `${value} meters = ${metersToF} feet | ${value} feet = ${feetToM} meters`;
    
    // Volume
    const litersToG = convert(value, "liters", "gallons");
    const gallonsToL = convert(value, "gallons", "liters");
    displayVolume.innerHTML = `${value} liters = ${litersToG} gallons | ${value} gallons = ${gallonsToL} liters`;
    
    // Mass
    const kilosToP  = convert(value, "kilos", "pounds");
    const poundsToK = convert(value, "pounds", "kilos");
    displayMass.innerHTML = `${value} kilos = ${kilosToP} pounds | ${value} pounds = ${poundsToK} kilos`;
    }
})



