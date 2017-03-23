// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    swipePanel: 'left',
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
    $$('.card-popup').hide();
});

$$('.create-popup').on('click', function (e) {
  e.preventDefault();
  $$('.card-popup').show();
});
// $('.tab-link').click(function() {
//     $(this).closest( "img" ).attr('src', 'img/List-Selected.png');
//     $('#tab-img__prior').attr('src', 'img/Priority.png');
//     $('#tab-img__pay').attr('src', 'img/Pay.png');
//     $('#tab-img__car').attr('src', 'img/Car.png');
// });
//
// $('.tab-link').click(function() {
//     $(this).closest('img').attr('src', 'img/Priority-Selected.png');
//     $('#tab-img__list').attr('src', 'img/List.png');
//     $('#tab-img__pay').attr('src', 'img/Pay.png');
//     $('#tab-img__car').attr('src', 'img/Car.png');
// });
//
// $('.tab-link').click(function() {
//     $(this).closest( "img" ).attr('src', 'img/Pay-Selected.png');
//     $('#tab-img__prior').attr('src', 'img/Priority.png');
//     $('#tab-img__list').attr('src', 'img/List.png');
//     $('#tab-img__car').attr('src', 'img/Car.png');
// });
//
// $('.tab-link').click(function() {
//     $(this).closest( "img" ).attr('src', 'img/Car-Selected.png');
//     $('#tab-img__prior').attr('src', 'img/Priority.png');
//     $('#tab-img__pay').attr('src', 'img/Pay.png');
//     $('#tab-img__list').attr('src', 'img/List.png');
// });

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
