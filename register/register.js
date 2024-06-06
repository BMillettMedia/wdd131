import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.getElementById('addParticipantButton').addEventListener('click', () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    document.getElementById('addParticipantButton').insertAdjacentHTML('beforebegin', newParticipantHTML);
});

document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const totalFees = calculateTotalFees();
    const adultName = document.getElementById('adultName').value;
    const summaryMessage = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: totalFees
    });
    document.getElementById('registrationForm').classList.add('hide');
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = summaryMessage;
    summaryElement.classList.remove('hide');
}

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value), 0);
}
