function easy_background(selector, a1, a2, b1, b2, c1, c2, d1, d2, e1, e2) {


  function empty_var(x) {
    if (x) {
      return x;
    } else {
      return 0;
    }
  }


  tot_time = empty_var(a1) + empty_var(b1) + empty_var(c1) + empty_var(d1) + empty_var(e1);

  console.log(tot_time);



  function slider() {



    if (a1) {
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + a2 + "')";

      }, 0000); // 1
    }



    if (b1) {
      var delay = a1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + b2 + "')";

      }, delay); // 2
    }



    if (c1) {
      var delay = a1 + b1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + c2 + "')";

      }, delay); // 3
    }



    if (d1) {
      var delay = a1 + b1 + c1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + d2 + "')";

      }, delay); // 4
    }



    if (e1) {
      var delay = a1 + b1 + c1 + d1;
      setTimeout(function() {

        document.querySelector(selector).style.backgroundImage = "url('" + e2 + "')";

      }, delay); // 5
    }


  };


  slider();


  setInterval(function() { // REPEAT

    slider();
    console.log(tot_time);

  }, tot_time);


}
