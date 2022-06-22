let button = document.getElementsByClassName('search')[0];

const getQuery = async () => {
    const res = await fetch('http://localhost/queries/');
    const qData = await res.json();
    const queries = document.getElementById('application');
    
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

button.addEventListener('click', () => {
    getQuery().catch(err => console.log(err))
})





