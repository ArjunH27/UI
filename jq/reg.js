function reg()
{

const w = document.getElementById("id1").value;
const x = document.getElementById("id2").value;
const y =document.getElementById("id3").value;
const z=document.getElementById("id4").value;

var a= check(x);

if(a!=0){
	
	if (y==z) {
		const data = {
		name:w,	
		password:y
		}
	localStorage.setItem(x, JSON.stringify(data));	
	}
else
{
	alert("Passwords are not equal!");
}

}

}

function check(email)
{
const em= localStorage.getItem(email);
	
	
if(em){
	alert("Email already registered!");
return 0;

}
else return 1;   
    
}
    