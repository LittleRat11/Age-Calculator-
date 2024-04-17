const result = document.querySelector('.result');
const submit = document.querySelector('.js-submit-btn');
submit.addEventListener('click', () => {
    const day1 = Number(document.querySelector('.js-input-date').value);
    const month1 = Number(document.querySelector('.js-input-month').value);
    const year1 = Number(document.querySelector('.js-input-year').value);
    if (day1 && month1 && year1) {
        const date = new Date();
        let day2 = date.getDate();
        let month2 = date.getMonth() + 1;
        let year2 = date.getFullYear();
        dateCalculation(day2, month2, year2);
    } else {
        alert('Please fill all input boxs');
    }
});

function dateCalculation(d2, m2, y2) {
    const day1 = Number(document.querySelector('.js-input-date').value);
    const month1 = Number(document.querySelector('.js-input-month').value);
    const year1 = Number(document.querySelector('.js-input-year').value);
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day1 > d2) {
        d2 += months[m2 - 1];
    }
    if (month1 > m2) {
        m2 += 12;
        y2 -= 1;
    }
    let d = d2 - day1;
    let m = m2 - month1;
    let y = y2 - year1;
    result.innerHTML = `
    ${y} years , ${m} months , ${d} days
    `;
}