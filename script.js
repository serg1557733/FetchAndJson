

function tableFromJson(element, jsonUrl){
    const root = document.querySelector(element);
    fetch(jsonUrl)
            .then(data => data.json())
            .then( resp => {
                
                for (let key in resp) {
                    let tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let td2 = document.createElement('td');
                    td.textContent = key; 
                    td2.textContent = resp[key];
                    root.append(tr);
                    tr.append(td);
                    tr.append(td2);
                }
            })
}
tableFromJson('.root', 'https://swapi.dev/api/people/1/');

