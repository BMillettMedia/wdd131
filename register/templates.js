export function participantTemplate(count) {
    return `
    <section class="participant${count}" id="participant${count}">
        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" name="fee${count}" required>
    </section>
    `;
}

export function successTemplate(info) {
    return `
    <p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in Fees.</p>
    `;
}
