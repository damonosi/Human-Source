// sageti dropdown

let sageata1 = document.getElementById("1");
let sageata2 = document.getElementById("2");
let sageata3 = document.getElementById("3");
let sageata4 = document.getElementById("4");
let sageata5 = document.getElementById("5");
let sageata6 = document.getElementById("6");
let sageata7 = document.getElementById("7");
let sageata8 = document.getElementById("8");

$(sageata1).on("hide.bs.dropdown", function () {
  document.getElementById("caret").className = "caret";
});
$(sageata1).on("show.bs.dropdown", function () {
  document.getElementById("caret").className = "caret caret-up";
});

$(sageata2).on("hide.bs.dropdown", function () {
  document.getElementById("caret2").className = "caret";
});
$(sageata2).on("show.bs.dropdown", function () {
  document.getElementById("caret2").className = "caret caret-up";
});

$(sageata3).on("hide.bs.dropdown", function () {
  document.getElementById("caret3").className = "caret";
});
$(sageata3).on("show.bs.dropdown", function () {
  document.getElementById("caret3").className = "caret caret-up";
});

$(sageata4).on("hide.bs.dropdown", function () {
  document.getElementById("caret4").className = "caret";
});
$(sageata4).on("show.bs.dropdown", function () {
  document.getElementById("caret4").className = "caret caret-up";
});
$(sageata5).on("hide.bs.dropdown", function () {
  document.getElementById("caret5").className = "caret";
});
$(sageata5).on("show.bs.dropdown", function () {
  document.getElementById("caret5").className = "caret caret-up";
});
$(sageata6).on("hide.bs.dropdown", function () {
  document.getElementById("caret6").className = "caret";
});
$(sageata6).on("show.bs.dropdown", function () {
  document.getElementById("caret6").className = "caret caret-up";
});
$(sageata7).on("hide.bs.dropdown", function () {
  document.getElementById("caret7").className = "caret";
});
$(sageata7).on("show.bs.dropdown", function () {
  document.getElementById("caret7").className = "caret caret-up";
});
$(sageata8).on("hide.bs.dropdown", function () {
  document.getElementById("caret8").className = "caret";
});
$(sageata8).on("show.bs.dropdown", function () {
  document.getElementById("caret8").className = "caret caret-up";
});

// carousel

(function () {
  $(".carousel-showmanymoveone .item").each(function () {
    var itemToClone = $(this);

    for (var i = 1; i < 3; i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(":first");
      }

      // grab item, clone, add marker class, add to collection
      itemToClone
        .children(":first-child")
        .clone()
        .addClass("cloneditem-" + i)
        .addClass("grayed-out")
        .appendTo($(this));
    }
  });
})();
