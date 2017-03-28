// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatic initialization
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

myApp.onPageInit('index', function (page) {
  console.log(page.query.paid);
  if (page.query.paid == 1) {
    $$('.card-popup-activateshift').show();
  }

  $$('.c-popup-btn').on('click', function() {
    $$('.card-popup-topup').hide();
    $$('.card-popup-activateshift').hide();
  });


  $$('.create-popup').on('click', function (e) {
    e.preventDefault();
    $$('.card-popup-topup').show();
  });

  $$('.c-bg').on('click', function (e) {
    e.preventDefault();
    $$('.card-popup-topup').hide();
    $$('.card-popup-activateshift').hide();
  });

  $$('.showtoast').on('click', function(e) {
    e.preventDefault();
    $$('.card-popup-activateshift').hide();
    $('.toast').fadeIn(400).delay(3000).fadeOut(400)
  });
});

myApp.init();
// Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.router.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }
