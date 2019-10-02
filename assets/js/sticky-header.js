var scrollpos = window.scrollY;
var header = document.getElementById("js-header");

function add_class_on_scroll() {
    header.classList.add("sticky");
}

function remove_class_on_scroll() {
    header.classList.remove("sticky");
}

window.addEventListener('scroll', function(){
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 100){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});


// window.addEventListener('scroll', function(e) {
//   document.getElementById('js-header').classList[e.pageY > 10 ? 'add' : 'remove']('sticky');
// });
