// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }
// var testContact = new Contact("Ada", "Lovelace", "503-555-1111");
// Contact.prototype.fullName = function ()  {
//   return this.firstName + " " + this.lastName;
// }
// console.log(testContact.fullName());

// var pdx = { name: "Portland"};
// var sfo = { name: "San Francisco"};
// var sea = { name: "Seattle"};
// var cso = { name: "Aktau"};
// var dzn = { name: "Zhezkazgan"};
//
// var usa = { name: "United States of America", cities: [pdx, sfo, sea] };
// var kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };
// var uruguay = { name: "Uruguay", cities: [] };
//
//
// usa.cities.forEach(function(city){
//
//   console.log("lets go to " + city.name + "!");
//
// });
//
// var mlz = { name: "Melo"};
//
// uruguay.cities.push(mlz);
//
// console.log(uruguay.cities);


var tomatoes = { name: "Tomatoes", price: 2.99 };
var cucumbers = { name: "Cucumbers", price: 0.99 };
var onions = { name: "Onions", price: 0.79 };

var groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

var iPhone = { name: "iPhone", price: 699 };
var android = { name: "Android", price: 499 };
var windowsPhone = { name: "Windows Phone", price: 399 };

var phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

var stores = [groceryStore, phoneStore];

stores.forEach(function(store){
  console.log(store.name + " sells:");
  store.products.forEach(function(product){
    console.log(product.name);

  });
   console.log("\n");

});
