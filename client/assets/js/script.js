/**
 * Defining some important variables to call upon in later functions
 */
let button = document.getElementsByClassName('search')[0];
let btnLucky = document.getElementsByClassName('lucky')[0];
const queries = document.getElementById('application');

/**
 * This function uses the fetch api to get query data.
 * it then changes the inner HTML of the form to be an ul list.
 * then loops through the array of objects, appending the 
 * information as a link within the list item.
 */
const getQueries = async () => {
    const res = await fetch('http://localhost/queries/');
    const qData = await res.json();
    
    queries.innerHTML = 
    `<ul id="s-list">
        
    </ul>`;
    const unList = document.getElementById('s-list');
    for (query of qData) {
        let li = document.createElement('li');
        li.innerHTML = `<a target="_blank" class="s-link" href="${query.urllink}">${query.name}</a>`;
        // console.log(li);
        unList.appendChild(li);
    }
    // queries.innerHTML = `<a class="s-link" href="${qData.urllink}">${qData.name}</a>`;
}

/**
 * This function gets a random search result within 
 * the data and send the user to the site
 */
const getRandomQuery = async () => {
    const resp = await fetch('http://localhost/queries/random');
    const rData = await resp.json();
    
    // queries.innerHTML = `<a target="_blank" class="r-link" href="${rData.urllink}">${rData.name}</a>`;
    location.href = rData.urllink;
}

/**
 * This function takes the value in the search bar.
 * Compares this value to the name of each object in the array,
 * to see if it is in the data. if true, the it takes the user 
 * to the site matching the name.
 */
queries.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = document.getElementById('text');
    const search = text.value;

    const response = await fetch('http://localhost/queries/');
    const resData = await response.json();

    /**
     * Tried to make for loop go through each array element 
     * and then check if the objects contain name === text.value.
     * and if it doesn't change for a brief moment the placeholder 
     * to notify user that there isn't a result for search.
     * But because it is looping through the array and finding array 
     * objects that don't match the search, the else statement is 
     * activated, even when search is within the data for the queries. 
     */
    for (object of resData) {
        if (object.name === search) {
            // queries.innerHTML = `<a target="_blank" class="s-link" href="${object.urllink}">${object.name}</a>`
            console.log(1);
            location.href = object.urllink;
        } else {
            console.log(2);
            text.value = "";
            text.placeholder = "No result for this search :(";
            setTimeout(() => {
                text.placeholder = "Search Google or type a URL";
            }, 1000);
        }
    }
} )

/**
 * evvent listeners
 */
button.addEventListener('click', () => {
    getQueries().catch(err => console.log(err));
})

btnLucky.addEventListener('click', () => {
    getRandomQuery().catch(err => console.log(err));
})





