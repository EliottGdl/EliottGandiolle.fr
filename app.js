//const logo = document.querySelectorAll("#logo path");
//for (let i = 0; i < logo.length; i++) {
//  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//}

let stock = [];
let id = 0;
let idIm = 0;

let skills = [
  {
    name: "PHP",
    height: 200,
  },
  {
    name: "REACT",
    height: 400,
  },
  {
    name: "VUE",
    height: 250,
  },
  {
    name: "JS",
    height: 400,
  },
  {
    name: "JAVA",
    height: 380,
  },
  {
    name: "PYTHON",
    height: 180,
  },
];
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 38 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 32) {
    event.preventDefault();
  }
});

for (let i = 0; i < skills.length; i++) {
  let skill = skills[i];
  console.log(skill);
  $("#bars").append(`
    
            <div class = "bar">

                <div class="barBack"><div class="subBar" style="height:${skill.height}px"> </div></div>
                <p class="turn"> ${skill.name} </p> 
                
            </div>

    `);
}

$("#part2").click(function (event) {
  let x = event.pageX;
  let y = event.pageY;

  $("#page").append(`
        
            <img src="./assets/${
              stockIm[idIm].name
            }.png" id="${id}" class="fall" style="width:${stockIm[idIm].x}px;height:${stockIm[idIm].y}px;position:absolute;top:${y}px;left:${x - 100}px;" />

        
        `);

  stock.unshift($(`#${id}`));
  setTimeout(function () {
    $(stock[stock.length - 1]).remove();
    stock.pop();
  }, 1800);
  id++;
  idIm = idIm + 1 >= stockIm.length ? 0 : idIm + 1;

  //console.log(x +  " hey "+y)
});

$(document).scroll(function () {
  // Show element after user scrolls past
  // the top edge of its parent
  var y = $(this).scrollTop();

  $("#text1").each(function () {
    var t = $(this).offset().top - $(window).height();
    if (y > t && t > 0) {
      $(this).fadeIn(400);
      $("#img1").fadeIn(400);
    } else {
      $(this).fadeOut(400);
      $("#img1").fadeOut(400);
    }
  });

});

$(".apD").click(function (event) {
  // Preventing default action of the event
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#part1").offset().top + 100,
    },
    100
  );
});

$("#mySkills").click(function (event) {
  // Preventing default action of the event
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#part2").offset().top + 150,
    },
    100
  );
});

$("#mySkills2").click(function (event) {
  // Preventing default action of the event
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#part3").offset().top + 100,
    },
    100
  );
});

$("#mySkills3").click(function (event) {
  // Preventing default action of the event
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#part4").offset().top + 100,
    },
    100
  );
});

$("#mySkills4").click(function (event) {
  // Preventing default action of the event
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#part5").offset().top + 150,
    },
    100
  );
});

let stockIm = [
  {
    name: "python",
    x: 100,
    y: 100,
  },
  {
    name: "godot",
    x: 100,
    y: 100,
  },
  {
    name: "php",
    x: 100,
    y: 80,
  },
  {
    name: "js",
    x: 80,
    y: 100,
  },
  {
    name: "unity",
    x: 200,
    y: 110,
  },
  {
    name: "java",
    x: 50,
    y: 100,
  },
  {
    name: "react",
    x: 140,
    y: 100,
  },
  {
    name: "vue",
    x: 100,
    y: 90,
  },
];

d3plus.textwrap().container(d3.select("#logo")).resize(true).draw();
