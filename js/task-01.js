"use strict";

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function (login, email) {
  console.log(this.login, this.email);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  Login: "Mangozedog",
  Email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  Login: "Poly",
  Email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
