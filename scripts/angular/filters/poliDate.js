app.filter('poliDate', function () {
  return function (date) {
    if (date === undefined || date === null) {
      return;
    }
    // from : 2014-21-10
    // to   : 10-21-2014
    // 2015-09-09 14:56:21
    return date.substr(8, 2) + '/' +
      date.substr(5, 2) + '/' +
      date.substr(0, 4);
  };
});