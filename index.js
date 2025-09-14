let weightUnits = document.getElementById("weightU");
let heightUnits = document.getElementById("heightU");

let form = document.getElementById('inputForm');
let weight = document.getElementById('weight');
let height = document.getElementById('height');

let weightRange = document.getElementById('weightS');
let heightRange = document.getElementById('heightS');

let results = document.getElementById('resultContainer');

let table = document.getElementById('referenceTable').children[0];

let weights = {
    kg: 1,
    g: 0.001,
    oz: 0.0283495,
    lb: 0.0625,
};

let heights = {
    cm: 0.01,
    m: 1,
    in: 0.0254,
    ft: 0.3048
};

form.addEventListener('submit', calculate);
weight.oninput = (e) => {
    weightRange.value = e.target.value > weightRange.max ? e.target.value : weightRange.max;
    calculate();
};
height.oninput = (e) => {
    heightRange.value = e.target.value > heightRange.max ? e.target.value : heightRange.max;
    calculate();
};
weightRange.oninput = (e) => {
    weight.value = e.target.value
    calculate();
};
heightRange.oninput = (e) => {
    height.value = e.target.value
    calculate();
};
weightUnits.addEventListener('change', changeWeightU);
heightUnits.addEventListener('change', changeHeightU);

function changeWeightU(e) {
    switch (e.target.value) {
        case 'kg': {
            weightRange.max = 200;
            break;
        }
        case 'g': {
            weightRange.max = 200000;
            break;
        }
        case 'oz': {
            weightRange.max = 7054.79;
            break;
        }
        case 'lb': {
            weightRange.max = 440.925;
            break;
        }
    }

    weightRange.value = weightRange.value > weightRange.max ? weightRange.max : weightRange.value;
    weight.value = weightRange.value;
    calculate();
}

function changeHeightU(e) {
    switch (e.target.value) {
        case 'm': {
            heightRange.max = 2.5;
            break;
        }
        case 'cm': {
            heightRange.max = 250;
            break;
        }
        case 'ft': {
            heightRange.max = 8.2021;
            break;
        }
        case 'in': {
            heightRange.max = 98.4252;
            break;
        }
    }
    heightRange.value = heightRange.value > heightRange.max ? heightRange.max : heightRange.value;
    height.value = heightRange.value;
    calculate();
}

function calculate() {
    if (!(weight.value && height.value)) return;
    let w = new Number(weight.value);
    let h = new Number(height.value);

    w *= weights[weightUnits.value];
    h *= heights[heightUnits.value];

    let bmi = w / (h * h);



    results.innerHTML = `<h3>Your BMI is <h1>${bmi.toFixed(2)}</h1></h3>`;

    for (let i = 1; i < table.children.length; i++) {
        table.children[i].style.backgroundColor = "#FFFFFF";
    }

    if (bmi < 16) {
        table.children[1].style.backgroundColor = "#ff6b6bff";
    }
    else if (bmi <= 17) {
        table.children[2].style.backgroundColor = "#ffbbbbff";
    }
    else if (bmi <= 18.5) {
        table.children[3].style.backgroundColor = "#fffcdfff";
    }
    else if (bmi <= 25) {
        table.children[4].style.backgroundColor = "#65ff60ff";
    }
    else if (bmi <= 30) {
        table.children[5].style.backgroundColor = "#c0ff4bff";
    }
    else if (bmi <= 35) {
        table.children[6].style.backgroundColor = "#ffd093ff";
    }
    else if (bmi <= 40) {
        table.children[7].style.backgroundColor = "#ffbbbbff";
    }
    else {
        table.children[8].style.backgroundColor = "#ff6b6bff";
    }

}