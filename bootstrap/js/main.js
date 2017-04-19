function validateInput(){

	if(document.publishPost.name.value == ''){
		alert('Please enter your name');
		document.publichPost.name.focus();
		return false;
	}else if(document.publishPost.title.value == ''){
		alert('Enter your Title');
		document.publichPost.title.focus();
		return false;
	}else if(document.publishPost.post.value == ''){
		alert('Please tell us your story.');
		document.publichPost.post.focus();
		return false;
	}else{

    }
}
