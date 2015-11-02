function getAddress() {
  var zip = document.getElementById("zip");
  var url = "http://api.zipaddress.net?zipcode=" + zip.value;

  var req = new XMLHttpRequest();
  req.onreadystatechange = function() { updatePage(req); };
  req.open("GET", url, true);
  req.send(null);
}

function updatePage(request) {
  if(request.readyState === 4){
    if(request.status === 200){
      var json = JSON.parse(request.responseText);

      var address = json.data.fullAddress;

      var result = document.getElementById("result");
      // result.innerHTML = address;
      var textNode = document.createTextNode(address);
      result.appendChild(textNode);

      var brElement = document.createElement("br");
      result.appendChild(brElement);
    }
  }
}