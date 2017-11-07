$(function(){
	

	$("#exampleInputEmail1").val("aasdf@asdf.ty");
	$("#exampleInputPassword1").val("1234567");
	$("#exampleInputPassword2").val("1234567");

	$("#signupSubmit").click(function(){
		let $form = $(this).closest(".modal-content")
		let email = $form.find("#exampleInputEmail1").val();
		let password = $form.find("#exampleInputPassword1").val();
		let passwordConfirmation = $form.find("#exampleInputPassword2").val();
		
		if((password.length  > 3) && (password == passwordConfirmation)){
			//TODO: Send message
		}else{
			//TODO: Error message
			alert("Password Error");
		}
	});
})