var apps = {};
dpd.funf.get({"key":"activity"}, function(results) {
  console.log(results);
  apps = results;
  console.log(apps);
  //setResult({"test":"object"});
  
  setResult(apps);

});
