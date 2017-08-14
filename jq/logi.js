$(document).ready(function() {
	function check(email)
	{
		const em = localStorage.getItem(email);		
		if(em){
			alert("Email already registered!");
			return 0;
		}
		else return 1;   
 	}


 	$('#btn').click(function(){
		const w = $('#id1').val();
		const x = $('#id2').val();
		const y = $('#id3').val();
		const z = $('#id4').val();
		
		var a= check(x);
		if(a!=0){
			
			if (y==z) {
				const data = {
				name:w,	
				password:y
				}
			localStorage.setItem(x, JSON.stringify(data));
			window.open("log.html", '_blank');	
			$('#total_id').text(name.value);
			var arr = $.parseJSON(json);
		alert(arr)

			}
			else
			{
				alert("Passwords are not equal!");
			}
		}

	});

	
	

});

