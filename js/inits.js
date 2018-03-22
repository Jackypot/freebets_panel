// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Inicializacion de Navbar
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Inicializacion de Floating Action Button
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var elem = document.querySelector('.fixed-action-btn');
var instance = M.FloatingActionButton.init(elem, {
    direction: 'left'});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Inicializacion de Tooltips
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var elem = document.querySelector('.tooltipped');
var instance = M.Tooltip.init(elem, {
    enterDelay: 1000
});