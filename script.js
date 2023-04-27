//your code here
function calculateTotalPrice() {
      const priceElements = document.querySelectorAll('[data-ns-test="prices"]');
      let totalPrice = 0;

      priceElements.forEach((element) => {
        const price = parseFloat(element.textContent);
        totalPrice += price;
      });

      const grandTotalRow = document.createElement('tr');
      const grandTotalCell = document.createElement('td');
      grandTotalCell.setAttribute('colspan', '2');
      grandTotalCell.setAttribute('data-ns-test', 'grandTotal');
      grandTotalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);
      grandTotalRow.appendChild(grandTotalCell);

      const groceryTable = document.getElementById('groceryTable');
      groceryTable.appendChild(grandTotalRow);
    }

    calculateTotalPrice();
