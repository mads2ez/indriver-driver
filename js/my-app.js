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
});


$('#card').click(function() {
  $('#subnavbar').css({display: 'none'});
  $('#index').removeClass('with-subnavbar');
  $('#card-active').css({display: 'inline'});
  $('#request-add-button').css({display: 'block'})
});

$('#request-add-button').click(function () {
    if ($('#request-c-item').css('display') == 'none') {
        $('#request-c-item').slideDown('fast', function () {
            var absoluteTopY = $("#dr-rubble-item").position().top;
            $("#dr-address-tooltip").css("top", absoluteTopY + "px");
            $("#dr-address-tooltip").slideDown("fast");
            $('#dr-c-item input').focus();
        });
    }
});

function validate() {
    var valid = true;
    if (!$('#request-from-input').val().length) {
        doRedPlaceHolder('#request-from-input');
        valid = false;
    }
    if (!$('#request-to-input').val().length) {
        doRedPlaceHolder('#request-to-input');
        valid = false;
    }
    if ($('#request-c-item').css("display") != 'none' && !$('#request-c-input').val().length) {
        doRedPlaceHolder('#request-c-input');
        valid = false;
    }
    if (!$('#request-fare-input').val().length) {
        doRedPlaceHolder('#request-fare-input');
        $('#dr-rubble-input').attr('placeholder', 'Укажите вашу цену')
        valid = false;
    }
    return valid;
}

function doRedPlaceHolder(id) {
    $('head').append("<style>" + id + "::-webkit-input-placeholder {color:red;} ");
    $('head').append(id + "::-moz-placeholder {color:red;} ");
    $('head').append(id + ":-moz-placeholder {color:red;} ");
    $('head').append(id + ":-ms-input-placeholder {color:red;}</style>");
}

$('#request-submit-btn').click(function() {
  if (validate()) {
    postToGoogle();
    return;
  }
});

function postToGoogle() {
  var from = $$('#request-from-input').val();
  var to = $$('#request-to-input').val();
  var c = $$('#request-c-input').val();
  var fare = $$('#request-fare-input').val();
  var comment = $$('#request-entry-input"').val();

  $$.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLScmSqa1ZLmS0afkgHs3n-ePFjJglKnQW56MOsNWjubF7XUVcw/formResponse",
      data: {"entry.2142436256" : from, "entry.1450525195" : to, "entry.1593265994": c, "entry.775787382": fare, "entry.620574800": comment},
      type: "POST",
      dataType: 'jsonp',
      statusCode: {
          0: function (){

              //Success message
          },
          200: function (){

              //Success Message
          }
      }
    });
}

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
