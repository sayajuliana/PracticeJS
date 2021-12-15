const selection = document.getElementById("nombres");
const container = document.getElementById('accordion');

const mostrar = ()=>{
     let characters_one = selection.options[selection.selectedIndex].value;
   
    container.innerHTML = "";
    let url = `https://rickandmortyapi.com/api/character/${characters_one}`;
 
       fetch(url)
    .then(response => response.json())
    .then(data => {
            console.log(data);
            
            const card = document.createElement('div');
            card.classList = 'card-body';

            // Construct card content
            const content = `
                <div class="card">
                <div class="card-header">
                    <img src="${data.image}">
                    <h5>${data.name}</h5>
                    <h5 class="mb-0"> ${data.status}-${data.species}</h5>
                </div>

                <div>
                    <div class="card-body">
                        ${data.type} - ${data.gender} 
                    </div>
                </div>
            </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
            
    
    });
};



    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        const select = document.getElementById('nombres');
        
        characters.map((item)=>{
        let opt = document.createElement('option');
        opt.value = item.id ;
              opt.innerHTML = item.name ;
              select.appendChild(opt);
              
    });     
 }
)

//names();


    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const characters = data.results;

        characters.map((item)=>{
            
            const card = document.createElement('div');
            card.classList = 'card-body';

            // Construct card content
            const content = `
                <div class="card">
                <div class="card-header">
                    <img src="${item.image}">
                    <h5>${item.name}</h5>
                    <h5 class="mb-0"> ${item.status}-${item.species}</h5>
                </div>

                <div>
                    <div class="card-body">
                        ${item.type} - ${item.gender} 
                    </div>
                </div>
            </div>
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
            
        })
    });


 
