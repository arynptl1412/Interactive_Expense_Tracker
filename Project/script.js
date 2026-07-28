const form = document.querySelector('#expense-form');
const nameInput = document.querySelector('#expense-name');
const amountInput = document.querySelector('#expense-amount');
const listEl = document.querySelector('#expense-list');
const totalEl = document.querySelector('#total-amount');

let expenses = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    // Validation — no error element exists in your HTML yet,
    // so for now this just blocks bad data silently via console.
    if (name === '' || isNaN(amount) || amount <= 0) {
        console.warn('Enter a name and an amount greater than 0.');
        return;
    }

    addExpense(name, amount);

    form.reset();
    nameInput.focus();
});

function addExpense(name, amount) {
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount
    };

    expenses.push(newExpense);

    renderList();
    renderTotal();
}

function renderList() {
    listEl.innerHTML = '';

    expenses.forEach((expense) => {
        const li = document.createElement('li');
        li.className = 'expense-item';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'expense-name';
        nameSpan.textContent = expense.name;

        const amountSpan = document.createElement('span');
        amountSpan.className = 'expense-amount';
        amountSpan.textContent = `₹${expense.amount.toFixed(2)}`;

        li.appendChild(nameSpan);
        li.appendChild(amountSpan);

        listEl.appendChild(li);
    });
}

function renderTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalEl.textContent = `₹${total.toFixed(2)}`;
}

renderList();
renderTotal();