function easy_background(selector, a1, a2, b1, b2, c1, c2, d1, d2, e1, e2) {

  tot_time = a1 + b1 + c1 + d1 + e1;



  function slider() {



    if (a1) {
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + a2 + "')";

      }, 0000); // FIRST
    }



    if (b1) {
      var delay = a1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + b2 + "')";

      }, delay); // SECOND
    }



    if (c1) {
      var delay = a1 + b1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + c2 + "')";

      }, delay); // SECOND
    }



    if (d1) {
      var delay = a1 + b1 + c1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + d2 + "')";

      }, delay); // SECOND
    }



    if (e1) {
      var delay = a1 + b1 + c1 + d1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + e2 + "')";

      }, delay); // SECOND
    }


  };


  slider();


  setInterval(function() { // REPEAT

    slider();
    console.log(tot_time);

  }, tot_time);


}
