    


    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
         ? 'fa-solid fa-xmark'
         : 'fa-solid fa-bars'
    }


    let slideIndex = [1,1,1,1];
    let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
    showSlides(1, 0, "dot");
    showSlides(1, 1, "dot2");
    showSlides(1, 2, "dot3");
    showSlides(1, 3, "dot4");
    
    
    function plusSlides(n, no, dotClassName) {
      showSlides(slideIndex[no] += n, no, dotClassName);
    }
    
    function showSlides(n, no, dotClassName) {
      let i;
      let x = document.getElementsByClassName(slideId[no]);
      let dots = document.getElementsByClassName(dotClassName); // Using the passed dot class name.
      
      if (n > x.length) {slideIndex[no] = 1}    
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      
      x[slideIndex[no]-1].style.display = "block";
      dots[slideIndex[no]-1].className += " active"; 
    }

    