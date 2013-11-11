
$(document).ready(function() {

  /* ---------- Acivate Functions ---------- */
  template_functions();
  init_hpcarousel();
  enable_reload();
  $('#icon-list').html('');
  reloadIcons();
});

function showIcons(response) {
  var html = '';
  if(response.api == 'ok') {
    $.each(response.icons, function(index, item) {
      html += '<div class="col-md-4">';
      html += '<img class="img-thumbnail" src="';
      html += item.path;
      html += '"><h2><a href="';
      html += item.link;
      html += '" target="_blank">'
      html += item.name
      html += '</a></h2><p>'
      html += item.attr;
      html += '</p><p><a class="btn btn-default" href="';
      html += item.link;
      html += '" role="button">View details &raquo;</a></p></div>';
    });

    $('#icon-list').html(html);
  }
}

function reloadIcons() {
  console.log('Reloading!');
  $.ajax({
    url: '/api'
  }).success(showIcons);
  // $.get('/api', showIcons);
}

function enable_reload() {
  console.log('reloading enabled');
  $('.page-heading i.icon-reload').removeClass('hide').on('click', reloadIcons);

}

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