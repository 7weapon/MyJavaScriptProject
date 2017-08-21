outloop:
  for (var i = 0; i < 10; i++) {
    innerloop:
      for (var j = 0; j < 10; j++) {
        if (j > 3) {
          break;
        }
        if (i == 2) {
          break innerloop;
        }
       
        if (i == 5) {
          break outloop;
        }

        console.log('i: ' + i + ' ,j: ' + j);
      }
  }