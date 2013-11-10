
$(document).ready(function() {

  /* ---------- Acivate Functions ---------- */
  template_functions();
  init_hpcarousel();

});

/* ---------- Check Mark on Media Items ---------- */
function init_hpcarousel() {
    if($('.carousel').length){
			$('.carousel').carousel({
				interval: false
			})

			// To view the next image in the carousel:
			//		$('.carousel').carousel('prev')
			// To view the prev image in the carousel:
			// 		$('.carousel').carousel('next')

		}
}

/* ---------- Check Mark on Media Items ---------- */
function template_functions() {
    if($('.panel-navigation-left').length){
      $('.trigger-left-panel').on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("offcanvas-out");
        $(".page-outer").toggleClass("left");
      });
    }
}