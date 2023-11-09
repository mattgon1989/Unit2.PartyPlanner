const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/events';

// will get data to put on the page using the main tag
const mainEl = document.querySelector('main');

//-------------reference-------------

const formEl = document.querySelector('form');
const partyName = document.querySelector('#partyName');
const partyDescription = document.querySelector('#partyDesciption');
const partyLocation = document.querySelector('#partyLocation');
const partydate = document.querySelector("#partyDate");

// using async function naming it getRecipes
async function getParties() {
    try {
        // we are getting the url/ api with the fetch method
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data.data);
        return data.data;
    } catch (err) {
        console.log(err);
    }
}

// render takes recipe data and puts on page
function render(parties) {
    // we are making a template variable that contains h2 imgurl and instructions
    const template = parties.map(party => {
        return (
            `<section>
                <h2>${party.name}</h2>
                <p>${party.location}</p>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <button data-id="${party.id}">Delete Event </button>
            </section>`
        )
    }).join('');
    mainEl.innerHTML = template;
}

async function partyApp() {
    // we're making a variable name recipes with the value of the getRecipes function we made
    // that calls the url/api
    const parties = await getParties();

    // calling the render function we made on line 20 to display
    render(parties);
}

partyApp();

// event listener
// this POSTs one new recipe to the backend API
formEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                party: partyName.value,
                location: partyLocation.value,
                description: partyDescription.value,
                date: partyDate.value,
            })
        });

        partyName.value = '';
        partyDescription.value = '';
        partyDate.value = '';
        partyLocation.value = '';

        partyApp();

    } catch (err) {
        console.log(err);
    }
});

// this DELETEs a single recipe from the backend API
// the deleted recipe has its id passed along to the backend API
mainEl.addEventListener('click', async (event) => {
    console.log("whole main tag");
    if (event.target.matches('button')) {
        const id = event.target.dataset.id;
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        partyApp();
    }
});