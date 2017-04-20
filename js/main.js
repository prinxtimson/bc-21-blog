function redirect(){
    window.location="viewpost.html";
}
function validateInput(){
    let item = document.publishPost;

	if(item.name.value == ''){
		alert('Please enter your name');
		item.name.focus();
		return false;
	}else if(item.title.value == ''){
		alert('Enter your Title');
		item.title.focus();
		return false;
	}else if(item.post.value == ''){
		alert('Please tell us your story.');
		item.post.focus();
		return false;
	}else{
        if(localStorage.getItem("testJSON") == null){
            var myItem = {"blogPost":[{"name":item.name.value, 
                                    "title":item.title.value,
                                    "post":item.post.value}]};
            var myJSON = JSON.stringify(myItem);
            localStorage.setItem("testJSON", myJSON);
        }else{
            var text =localStorage.getItem("testJSON");
            var info = JSON.parse(text);
            info.blogPost.push({"name":item.name.value, 
                                "title":item.title.value,
                                "post":item.post.value});
            myJSON = JSON.stringify(info);
            localStorage.setItem("testJSON", myJSON);
        }
    }
}

function listPost(){
    if(localStorage.getItem("testJSON") === null){
        document.write ("No available post yet....");
    }else{
        var text =localStorage.getItem("testJSON");
        var info = JSON.parse(text);
        var output = '';
        for(var i = 0; i<info.blogPost.length; i++){
            output += '<div class="well">' + '<p>' + info.blogPost[i]["name"] + '</p>'  + '<p>' + info.blogPost[i]["title"] + '</p>'
                   + '<p>' + info.blogPost[i]["post"] + '</p>' + '</div>';
            }
        var update = document.getElementById('myPost');
        update.innerHTML = output
    } 
}
