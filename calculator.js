function calculate() {
    let valueFromUber = parseFloat(document.getElementById("value_uber").querySelector("input").value);
    let valueFrom99 = parseFloat(document.getElementById("value_99").querySelector("input").value);
    let valueFromParticular = parseFloat(document.getElementById("value_particular").querySelector("input").value);
    let km_traveled = parseFloat(document.getElementById("km_traveled").querySelector("input").value);
    let average = parseFloat(document.getElementById("average_consumption").querySelector("input").value);
    let priceLiterFuel = parseFloat(document.getElementById("price_fuel").querySelector("input").value);

    let earningsToday = valueFromUber + valueFrom99 + valueFromParticular;
    let litersSpent = km_traveled / average;
    let valueSpentFuel = litersSpent * priceLiterFuel;
    let profit = earningsToday - valueSpentFuel;
    let total = profit * 0.10;

    document.getElementById("earnings_today").innerText = "Ganhos de Hoje R$: " + earningsToday.toFixed(2);
    document.getElementById("valueSpentFuelToday").innerText = "Você gastou hoje: " + valueSpentFuel.toFixed(2);
    document.getElementById("profit").innerText = "Lucro liquido R$: " + profit.toFixed(2);
    document.getElementById("resultado").innerText = "Dizimo: R$ " + total.toFixed(2);
}
