var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const changeLeastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    changeLeastFavoriteCustomer = 'some new value';
}