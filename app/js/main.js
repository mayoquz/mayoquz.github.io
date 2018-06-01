$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
  	smartSpeed: 500,
  	navText: [
  		'<i class="fas fa-angle-double-left"></i>',
  		'<i class="fas fa-angle-double-right"></i>'
  	]
  });

  var waypoints = $('.kategoriyalar').waypoint(function(direction) {
    this.element.classList.add('animate');
  }, {
    offset: '50%'
  });
});