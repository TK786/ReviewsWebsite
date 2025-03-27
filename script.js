    //Dynamic rating display
    const starContainer = document.getElementById('stars');
    const ratingDisplay = document.getElementById('rating');
    const totalStars = 5;

    //Create stars
    for (let i =1; i<=totalStars; i++){
        const star = document.createElement('span')
        star.textContent = '★';
        star.classList.add('star');
        star.dataset.value =i;
        
        starContainer.appendChild(star);
    }

    //Event listeners
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            //Highlight the selected star
            stars.forEach(s => s.classList.remove('selected'));
            for(let i = 0; i <star.dataset.value; i++){
                stars[i].classList.add('selected');
            }
            //Display the selected rating
ratingDisplay.textContent ='You rated: ${star.dataset.value} / ${totalStars}';
        });
    });
    
    const form =document.getElementById('ReviewForm');
    form.addEventListener('submit', e =>{
        e.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        console.log('Name: ${name}');
        console.log('Review: ${review}');

        alert('Thank you for your review!');
        form.reset();
    });
