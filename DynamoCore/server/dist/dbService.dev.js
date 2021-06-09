"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mysql = require('mysql');

var dotenv = require('dotenv');

var instance = null;
dotenv.config();
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});
connection.connect(function (err) {
  if (err) {
    console.log(err.message);
  }

  console.log('db ' + connection.state);
});

var DbService =
/*#__PURE__*/
function () {
  function DbService() {
    _classCallCheck(this, DbService);
  }

  _createClass(DbService, [{
    key: "getAllData",
    value: function getAllData() {
      var response;
      return regeneratorRuntime.async(function getAllData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
                var query = "SELECT * FROM userinfo;";
                connection.query(query, function (err, results) {
                  if (err) reject(new Error(err.message));
                  resolve(results);
                });
              }));

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "insertNewdata",
    value: function insertNewdata(name) {
      var insertId;
      return regeneratorRuntime.async(function insertNewdata$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
                var query = "INSERT INTO userinfo (username, email, passw, contactno) VALUES (?,?,?,?);";
                connection.query(query, [name, dateAdded], function (err, result) {
                  if (err) reject(new Error(err.message));
                  resolve(result.insertId);
                });
              }));

            case 3:
              insertId = _context2.sent;
              return _context2.abrupt("return", {
                id: insertId,
                name: name,
                dateAdded: dateAdded
              });

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }], [{
    key: "getDbServiceInstance",
    value: function getDbServiceInstance() {
      return instance ? instance : new DbService();
    }
  }]);

  return DbService;
}();

module.exports = DbService;