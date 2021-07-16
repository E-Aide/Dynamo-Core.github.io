"use strict";

Parse.initialize("aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH", "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY

Parse.serverURL = "https://parseapi.back4app.com/";
var user = Parse.Object.extend("User");
var Uid = Parse.User.current().id;

(function _callee() {
  var User, query, _user, username, email, contact, profilepic, imgurl;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          User = new Parse.User();
          query = new Parse.Query(User);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(query.get(Uid));

        case 5:
          _user = _context.sent;
          username = _user.get('username');
          email = _user.get('email');
          contact = _user.get('ContactNo');
          profilepic = _user.get('profilepic')._url;
          document.querySelector('.first-name').innerHTML = username;
          document.querySelector('.Contact').append(contact);
          document.querySelector('.Email').append(email);
          console.log(profilepic);
          imgurl = "url(" + profilepic + ")";
          document.querySelector('.profile-image').style.backgroundImage = imgurl;
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          console.error('Error while fetching user', _context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 18]]);
})();