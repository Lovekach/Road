function secCount(second) {
  let from = second;
  setInterval(function() {
      console.log(from);
      from++;
  }, 1000);
}

secCount(0);