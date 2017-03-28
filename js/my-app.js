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
    console.log(page.query);
    openModal();
});

myApp.init();

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('payment', function (page) {
    $$('.card-popup-topup').hide();
    $$('.card-popup-activateshift').hide();
});


$$('.create-popup').on('click', function (e) {
  $$('.card-popup-topup').show();
});

$$('.c-bg').on('click', function (e) {
  e.preventDefault();
  $$('.card-popup-topup').hide();
  $$('.card-popup-activateshift').hide();
});

// myApp.onPageBeforeInit('index', function (page) {
//   console.log('init ' + getAllUrlParams(document.URL).paid);
//   if (getAllUrlParams(document.URL).paid === "1") {
//     console.log('modal show' + getAllUrlParams(document.URL).paid);
//     $$('.card-popup-activateshift').show();
//   }
// });

$$('#showtoast').on('click', function(e) {
  $$('.card-popup-activateshift').hide();
  $('.toast').fadeIn(400).delay(3000).fadeOut(400)
});

function openModal() {
  console.log('openmodal');
  if (getAllUrlParams(document.URL).paid === 1) {
    console.log("done");
    $$('.card-popup-activateshift').show();
  }
  else {
    console.log('else');
  }
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

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
