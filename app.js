// choos your own api 
const api = 'AIzaSyDkq-1ubWvgrPCKB5RIt1vMYMltw'; 

const  output = document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector('button');

// searchTerm.setAttribute('value', 'test');
btn.addEventListener('click', ySearch);


async function  ySearch(e){
          const input = searchTerm.value;
          const url ='https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q='+input+'&maxResult=20';
          output.textContent= url;
          fetch(url)
          .then(rep=>{return rep.json()})
          .then( data=>{console.log(data); 
          show(data.items)
});

          // const response = await fetch(url)
          // .then(rep=>{return rep.json()})
          // .then( data=>console.log(data));
        
        
          
};


function show(data){
          console.log(data);
          console.log(data.length);
          data.forEach(video =>{
                    console.log(video);
                    let div = document.createElement('div');
                    div.classList.add('box');

                    div.innerHTML = `<main>
                    <p>A video!</p>
                    <div class="videoWrapper">
                      <iframe width="560" height="315" src=" https://www.youtube.com/embed/${video.id.videoId}" frameborder="0"
                       </iframe>
                    </div>
                    <p>Nice! Aspect Ratio!</p>
                  </main>`
                 
                
                  
                    output.appendChild(div);
          })
}


//  <p>${video.snippet.description}</p>
//                     <a href="http://www.youtube.com/watch?v=${video.id.videoId}">${video.snippet.title}</a>
