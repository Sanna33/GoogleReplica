let button = document.getElementsByClassName('search')[0];
let btnLucky = document.getElementsByClassName('lucky')[0];
const queries = document.getElementById('application');

const getQueries = async () => {
    const res = await fetch('http://localhost/queries/');
    const qData = await res.json();
    
    queries.innerHTML = 
    `<ul id="s-list">
        
    </ul>`;
    const unList = document.getElementById('s-list');
    for (query of qData) {
        let li = document.createElement('li');
        li.innerHTML = `<a class="s-link" href="${query.urllink}">${query.name}</a>`;
        // console.log(li);
        unList.appendChild(li);
    }
    // queries.innerHTML = `<a class="s-link" href="${qData.urllink}">${qData.name}</a>`;
}

const getRandomQuery = async () => {
    const resp = await fetch('http://localhost/queries/random');
    const rData = await resp.json();
    
    queries.innerHTML = `<a class="r-link" href="${rData.urllink}">${rData.name}</a>`;
}

button.addEventListener('click', () => {
    getQueries().catch(err => console.log(err));
})

btnLucky.addEventListener('click', () => {
    getRandomQuery().catch(err => console.log(err));
})





