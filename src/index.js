// write your code here
//First task:: When DOM loads, ramen images in #ramen-menu should pop up. We also need to have every single image posted by using the img tag inside #ramen-menu.

document.addEventListener('DOMContentLoaded', (e) =>{
    e.preventDefault();
    imageLoad();
})


function imageLoad (){
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data=>{
        //console.log(data)
        const ramenImages = document.querySelector('#ramen-menu')
        data.forEach(ramenData=> {
            const img = document.createElement('img');
            img.src = ramenData.image;
            //img.alt = ramenData.name;
            //img.id = ramenData.id;
            img.addEventListener('click',(e)=>{
                document.querySelector('.detail-image').src = ramenData.image
                document.querySelector('.name').innerHTML= ramenData.name
                document.querySelector('.restaurant').innerHTML = ramenData.restaurant
                document.querySelector('#rating-display').innerHTML = ramenData.rating
                document.querySelector('#comment-display').innerHTML = ramenData.comment
            })
            ramenImages.appendChild(img);
        })
        
        })
     }

function newRamen(){
    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const ramenObj = {}
            ramenObj.name = document.querySelector('#new-name').value
            ramenObj.restaurant = document.querySelector('#new-restaurant').value
            ramenObj.image = document.querySelector('#new-image').value
            ramenObj.rating = document.querySelector('#new-rating').value 
            ramenObj.comment = document.querySelector('#new-comment')
        const newImg = document.createElement('img')
        newImg.src = ramenObj.image
        document.querySelector('#ramen-menu').appendChild(newImg);

    })
   
}



















