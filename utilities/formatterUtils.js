function formatNumber(number){
    return new Intl.NumberFormat(undefined).format(number);
}

function currencyFormatter(number){
    return new Intl.NumberFormat(undefined, {style: 'currency', currency: 'EUR'}).format(number);
}

function compactNumberFormat(number){
    return new Intl.NumberFormat(undefined, {notation: "compact"}).format(number);
}

const divisions = [
    {amount: 60, name: 'seconds'},
    {amount: 60, name: 'minutes'},
    {amount: 60, name: 'hours'},
    {amount: 7, name: 'days'},
    {amount: 4.34524, name: 'weeks'},
    {amount: 12, name: 'months'},
    {amount: Number.POSITIVE_INFINITY, name: 'years'},
];

function relativeDateFormatter(toDate, fromDate = new Date()){
    let duration = (toDate - fromDate) / 1000;

    for (let i = 0; i < divisions.length; i++) {
        const division = divisions[i];
        
        if(Math.abs(duration) < division.amount){
            return new Intl.RelativeTimeFormat(undefined, {numeric: "auto"}).format(Math.round(duration), division.name)
        }

        duration /= division.amount
    }
}

const beforeTwoMonths = new Date().setMonth(new Date().getMonth() - 2);
console.log(beforeTwoMonths)

console.log(formatNumber(123456789.1234))
console.log(currencyFormatter(123456789.1234))
console.log(compactNumberFormat(123456789.1234))
console.log(relativeDateFormatter(beforeTwoMonths));