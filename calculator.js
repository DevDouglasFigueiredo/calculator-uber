function calculate() {
     let inputs = document.querySelectorAll('input[type="number"]');
     let allFilled = true;
     inputs.forEach(function(input) {
         if (input.value === '') {
             allFilled = false;
         }
     });
 
     if (!allFilled) {
         showModal('Calculadora de Dizimo', 'Por favor, preencha todos os campos antes de calcular.');
         return;
     }

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

function showModal(title, message) {
    var modal = document.createElement('div');
    modal.classList.add('modal');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalHeader.textContent = title;

    var modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.textContent = message;

    var closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', function() {
        modal.remove();
    });

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(closeButton);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}

