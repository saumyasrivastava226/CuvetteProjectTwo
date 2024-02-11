
        window.addEventListener('scroll', function() {
            var socialDiv = document.getElementsByClassName('social-div');
            console.log(socialDiv);
            console.log(socialDiv.scrollY);
            if (window.scrollY > 50) {
                socialDiv[0].classList.add('sticky');
            } else {
                socialDiv[0].classList.remove('sticky');
            }
        });
    
