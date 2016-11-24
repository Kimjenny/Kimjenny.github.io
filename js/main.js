
$(document).ready(function() {
	
	var vheight = window.innerHeight;

	$("section").css('height', vheight);

});



// page scroll

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#gohome").offset().top
    }, 0);
    $(".mainav").find("a").removeClass("active");
    $(this).addClass("active");

}); 



$("#showreel").click(function() {
    $('html, body').animate({
        scrollTop: $("#goshowreel").offset().top
    }, 500);

    $(".mainav").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#gallery").click(function() {
    $('html, body').animate({
        scrollTop: $("#gogallery").offset().top
    }, 500);

    $(".mainav").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#typography").click(function() {
    $('html, body').animate({
        scrollTop: $("#gotypography").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#illustrative").click(function() {
    $('html, body').animate({
        scrollTop: $("#goillustrative").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#photo").click(function() {
    $('html, body').animate({
        scrollTop: $("#gophoto").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

    });

$("#layout").click(function() {
    $('html, body').animate({
        scrollTop: $("#golayout").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

});

$("#packaging").click(function() {
    $('html, body').animate({
        scrollTop: $("#gopackaging").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

});

$("#live").click(function() {
    $('html, body').animate({
        scrollTop: $("#golive").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

});

$("#sound").click(function() {
    $('html, body').animate({
        scrollTop: $("#gosound").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

});

$("#website").click(function() {
    $('html, body').animate({
        scrollTop: $("#gowebsite").offset().top
    }, 500);

    $(".dropbtn").find("a").removeClass("active");
    $(this).addClass("active");

});



$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#goabout").offset().top
    }, 500);

    $(".mainav").find("a").removeClass("active");
    $(this).addClass("active");


});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#gocontact").offset().top
    }, 500);

    $(".mainav").find("a").removeClass("active");
    $(this).addClass("active");


});



// back to top button

jQuery(document).ready(function() {
                var offset = 220;
                var duration = 500;
                jQuery(window).scroll(function() {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.back-to-top').fadeIn(duration);
                    } else {
                        jQuery('.back-to-top').fadeOut(duration);
                    }
                });
                
                jQuery('.up').click(function(event) {
                    event.preventDefault();
                    jQuery('html, body').animate({scrollTop: 0}, duration);
                    return false;
                })
            });

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

/* The Lightbox */

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}