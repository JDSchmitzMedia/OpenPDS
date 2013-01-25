var apps = {};
dpd.activity.get({}, function(results) {
  console.log(results);
  apps = results[0].value;  
  setResult(apps);

});
