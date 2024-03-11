
const htmlContent = {
    education: `<p class="school-name"></br>School name</p>
                <p><span class="date">School date</span> | 
                <span class="qualification">Qualification</span> -
                <span class="study">Field of study</span></p>`,
    experience: `<p></br><span class="title">Job title</span> | 
                <span class="date">Work date</span></p>
                <p><span class="company">Company name</span> - 
                <span class="address">Company address</span></p>
                <p class="duties">Work duties - click anywhere on this text to change or remove it.</p>`,
    skills: `<li>Click to edit or remove skill</li>`,
    reference: `<p></br><span class="position">Job title</span> |
                <span class="fullname">Employer/employee name</span></p>
                <p class="company">Company name</p>
                <p class="contacts">Phone</p>`
};
//button events
document.querySelectorAll('.add-btn').forEach((el) => {
    el.addEventListener('click', () => {
        attributeId = el.getAttribute('id')
        const targetEl = document.querySelector('.'+ attributeId)
        targetEl.lastElementChild.insertAdjacentHTML('beforeend', htmlContent[attributeId])
    });
});
//pop-up message
function popUpMsg() {
    const popUpMsg = document.createElement('p');
        popUpMsg.setAttribute('id', 'pop-up-msg');
        popUpMsg.innerHTML = 'Click on any text<br/>to edit or remove';
        document.querySelector('main').append(popUpMsg);
    setTimeout(() => popUpMsg.remove(), 6999);
};

document.addEventListener('DOMContentLoaded', popUpMsg);
