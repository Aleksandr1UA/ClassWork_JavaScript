console.table(rates);

function renderRates(rates) {
    let htmlStr = '';
    for (let i in rates) {
        let index = +i + 1;
        let rate = rates[i];
        
        htmlStr += `<tr>
                    <td>${index}</td>
                    <td>${rate.r030}</td>
                    <td>${rate.txt}</td>
                    <td>${rate.rate.toFixed(2)}</td>
                    <td>${rate.cc}</td>
                    </tr>`;
                    
    }
    
   
    document.querySelector(".rates tbody").innerHTML = htmlStr;
}

let htmlStr = renderRates(rates);

function getCodeRate(rates) {
    let codeRate = [];
    for(let rate of rates) {
        codeRate.push(rate.r030);
    }
    return codeRate;
}

function getNameRate(rates) {
    let nameRate = [];
    for(let rate of rates) {
        nameRate.push(rate.txt);
    }
    return nameRate;
}

function getExchangeRate(rates) {
    let exchangeRate = [];
    
    for(let rate of rates) {
        exchangeRate.push(rate.rate);
    }
    return exchangeRate;
}

function getCcRate(rates) {
    let ccRate = [];
    
    for(let rate of rates) {
        ccRate.push(rate.cc);
    }
    return ccRate;
}