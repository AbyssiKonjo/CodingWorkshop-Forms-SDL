const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const contactPhoneInput = document.getElementById('contact-phone');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const programmingExperienceInput = document.getElementById('programmingExperience');
const workshopSessionsInput = document.getElementById('workshopSessions');
const commentsQuestionsInput = document.getElementById('commentsQuestions');

const results = document.getElementById('results');

const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(fullnameInput.value);
    console.log(emailInput.value);
    let userData = {
        fullname: fullnameInput.value,
        email: emailInput.value,
        contactPhone: contactPhoneInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        programmingExperience: programmingExperienceInput.value,
        workshopSessions: workshopSessionsInput.value,
        commentsQuestions: commentsQuestionsInput.value
    };
    console.log(userData);
    populateResults(userData);
});

function populateResults(userData) {
    results.innerHTML = `
        <h2>${userData.fullname}</h2>
        <h3>${userData.email}</h3>
        <p>${userData.contactPhone}</p>
        <p>${userData.age}</p>
        <p>${userData.gender}</p>
        <p>${userData.programmingExperience}</p>
        <p>${userData.workshopSessions}</p>
        <p>${userData.commentsQuestions}</p>
    `;
}
