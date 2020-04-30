// $(function () {
//     $(window).on('scroll', function () {
//         if ( $(window).scrollTop() > 10 ) {
//             $('.navbar').addClass('active');
//         } else {
//             $('.navbar').removeClass('active');
//         }
//     });
// });
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// var json = `{
//     "book": {
//         "name": "Harry Potter and the Goblet of Fire",
//         "author": "J. K. Rowling",
//         "year": 2000,
//         "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
//         "genre": "Fantasy Fiction",
//         "price": {
//             "paperback": "$10.40", "hardcover": "$20.32", "kindle": "$4.11"
//         }
//     }
// }`;

// // Converting JSON object to JS object
// var obj = JSON.parse(json);

// // Define recursive function to print nested values
// function printValues(obj) {
//     for(var k in obj) {
//         if(obj[k] instanceof Object) {
//             printValues(obj[k]);
//         } else {
//             document.write(obj[k] + "<br>");
//         };
//     }
// };

// console.log(obj);

// Printing all the values from the resulting object
// printValues(obj);

// document.write("<hr>");

// // Printing a single value
// document.write(obj["book"]["author"] + "<br>");  // Prints: J. K. Rowling
// document.write(obj["book"]["characters"][0] + "<br>");  // Prints: Harry Potter
// document.write(obj["book"]["price"]["hardcover"]);

// var json = "assets/"

// var obj = JSON.parse()

// $.getJSON('../json/dinner.json', function(data) {
//     //data is the JSON string
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $.getJSON("../json/dinner.json", function(result){
//       $.each(result, function(i, field){
//         $("div").append(field + " ");
//       });
//     });
//   });
// });

function displayAllMenu(){
    $.getJSON("../data/menu.json", function(result){
        var menu = result.menu;
        $.each(menu,function(i, data){
            $('#menu-list').append('<div class="col-md-4 mb-4"><div class="card"><div class="view view-cascade overlay"><img src="../assets/menu/'+data.picture+'" class="card-img-top" alt="..."></div><div class="card-body"><h5 class="card-title" style="text-align: center; color: black; font-weight: bold">'+data.name+'</h5><p class="card-text" style="text-align: center; color: black">'+data.description+'</p><h5 class="card-title" style="text-align: center; color: black">'+data.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>');
        });
    });
}

function SortMenu(command="asc"){
    return function MenuSort(a,b){
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        var compare = 0;
        if (nameA > nameB){
            compare = 1;
        } else if (nameA < nameB){
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}

function SortPrice(command="asc"){
    return function PriceSort(a,b){
        var priceA = a.price;
        var priceB = b.price;
        var compare = 0;
        if (priceA > priceB){
            compare = 1;
        }else if(priceA < priceB){
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}
var menus = [];

$.getJSON('../data/menu.json',function(results){
    var menu = results.menu;
    $.each(menu,function(i,data){
        menus.push(data);
    });
});

displayAllMenu();

$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('gold');
    $(this).addClass("gold");
    $('button').text("Select to sort the content ");
    $('.dropdown-item').removeClass('active');
    var category = $.trim($(this).text());
    $('h1').html(category);
    if (category == "All Menu"){
        displayAllMenu();
    }
    $.getJSON("../data/menu.json",function(result){
        var menu = result.menu;
        var content = "";
        $.each(menu, function(i, data){
            if (data.category == category){
                content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+data.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.name+'</h5><p class="card-text">'+data.description+'</p><h5 class="card-title">'+data.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>';
            }else if (category == "All Menu"){
                $.getJSON("../data/menu.json", function(result){
                    var menu = result.menu;
                    $.each(menu,function(i, data){
                        $('#menu-list').append('<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+data.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.name+'</h5><p class="card-text">'+data.description+'</p><h5 class="card-title">'+data.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>');
                    });
                });
                return false;
            }
        });
        $('#menu-list').html(content);
    });
});

$('.dropdown-menu a').on('click',function(){
    var tempmenu = [];
    var content = "";
    $('button').text($(this).text());
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');
    var category = $("h1").text();
    for (var i = 0; i < menus.length; i ++){
        if (menus[i].category == category){
            tempmenu.push(menus[i]);
        }else if (category == "All Menu"){
            tempmenu.push(menus[i]);
        }
    }
    var sort = $(this).text().toLowerCase();
    if (sort == "nama a-z"){
        tempmenu = tempmenu.sort(SortMenu("asc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">'+tempmenus.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>';
        })
    }else if (sort == "nama z-a"){
        tempmenu = tempmenu.sort(SortMenu("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">'+tempmenus.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>';
        })
    }else if (sort == "harga termurah"){
        tempmenu = tempmenu.sort(SortPrice('asc'));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">'+tempmenus.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>';
        })
    }else if (sort == "harga termahal"){
        tempmenu = tempmenu.sort(SortPrice("desc"));
        $.each(tempmenu, function(z, tempmenus){
            content += '<div class="col-md-4 mb-4"><div class="card"><img src="../assets/menu/'+tempmenus.picture+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+tempmenus.name+'</h5><p class="card-text">'+tempmenus.description+'</p><h5 class="card-title">'+tempmenus.price+'K</h5><div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">ORDER NOW!</a></div></div></div></div>';
        })
    }
    $('#menu-list').html(content);
});