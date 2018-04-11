$(function() {
 
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
   
		
	  var name = $("input#name").val();
		if (name == "") {
      $("input#name").addClass("error");
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
	
		if (email == "") {
      $("input#email").addClass("error");
      $("input#email").focus();
      return false;
    }
	var emailID=document.contact.femail;
	if (echeck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false
	}
	
	
	var phone = $("textarea#phone").val();
		if (phone == "") {
     	$("input#phone").addClass("error");
      $("input#phone").focus();
      return false;
    }
		
	
	
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('.Feedbakeck').html("<div id='message'></div>");
        $('#message').html("<h3>Thanks for your suggestion.</h3>")
        .append("<p></p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("  ");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
function echeck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   $("input#email").addClass("error");
		   return false
		}
 
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   $("input#email").addClass("error");
		   return false
		}
 
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    $("input#email").addClass("error");
		    return false
		}
 
		 if (str.indexOf(at,(lat+1))!=-1){
		     $("input#email").addClass("error");
		    return false
		 }
 
		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		     $("input#email").addClass("error");
		    return false
		 }
 
		 if (str.indexOf(dot,(lat+2))==-1){
		    $("input#email").addClass("error");
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		     $("input#email").addClass("error");
		    return false
		 }
 
 		 return true					
	}


function emailcheck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   $("input#nemail").addClass("error");
		   return false
		}
 
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   $("input#nemail").addClass("error");
		   return false
		}
 
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    $("input#nemail").addClass("error");
		    return false
		}
 
		 if (str.indexOf(at,(lat+1))!=-1){
		     $("input#nemail").addClass("error");
		    return false
		 }
 
		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		     $("input#nemail").addClass("error");
		    return false
		 }
 
		 if (str.indexOf(dot,(lat+2))==-1){
		    $("input#nemail").addClass("error");
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		     $("input#nemail").addClass("error");
		    return false
		 }
 
 		 return true					
	}


$(function(){
	
	//$("#wrapper").append('<a href="http://htmllion.com/templates.html" class="buyThemesButton" target="_blank" title="CUSTOMIZE &amp; DOWNLOAD FREE RESPONSIVE TEMPLATE FOR YOUR WEBSITE">Free Responsive <br /> HTML Template</a>');
	//$("#content").before("<section id='coomingSoonNew'><div class='container'><strong>Coming soon something new On CSS3Maker.com</strong><form name='comingSoon' method='post' action=''><input name='nEmail' class='input' type='text' value='Enter your email' id='nemail' /><input name='' type='submit' value='Notify me' class='Comingbutton' ></form></div></section>");
	
	
	
	/*$(".Comingbutton").click(function(){
			nEmail = $("#nemail").val();						  
		
		
		var emailID=document.comingSoon.nEmail;
			if (emailcheck(emailID.value)==false){
				emailID.value=""
				emailID.focus()
				return false
			}
			
			dataString ='email='+ nEmail ;
			//alert(dataString);
			$.ajax({
			  type: "POST",
			  url: "bin/comigsoon.php",
			  data: dataString,
			  success: function() {	
			  	 $('#coomingSoonNew .container').html("<strong>Coming soon something new On CSS3Maker.com</strong><span>Thank You</span>");
				 				 
			  }
			 });
			return false;
		
			
	});
*/
});