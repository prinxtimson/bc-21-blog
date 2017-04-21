function redirect(){
    window.location="viewpost.html";
}

function timeDate(){
    var currentTime = new Date();
    return  (currentTime.getDate() + '-' + currentTime.getMonth()+1 + '-' +
            currentTime.getFullYear() + ' @ ' + currentTime.getHours() + ':' +
            currentTime.getMinutes() + ':' + currentTime.getSeconds());
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
        var getTime = timeDate();
        if(localStorage.getItem("testJSON") == null){
            var myItem = {"blogPost":[{"name":item.name.value, 
                                    "title":item.title.value,
                                    "time":getTime,
                                    "post":item.post.value}]};
            var myJSON = JSON.stringify(myItem);
            localStorage.setItem("testJSON", myJSON);
        }else{
            var text =localStorage.getItem("testJSON");
            var info = JSON.parse(text);
            info.blogPost.push({"name":item.name.value, 
                                "title":item.title.value,
                                "time":getTime,
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
            output += '<div id="articles">'+
                        '<div>'+
                            '<article>'+
                                '<details>'+
                                    '<summary><h3>' + info.blogPost[i]["title"] + '</h3></summary>'+
                                    '<h>' + info.blogPost[i]["name"] + '</h><br>' + 
                                    info.blogPost[i]["time"] + 
                                    '<p>' + info.blogPost[i]["post"] + '</p>'+
                                '</details>'+
                            '</article>'+
                        '</div>'+
                        '<div id="icon">'+
                            '<button type="button" onclick="deletePost('+ i + ')"><i class="fa fa-trash"></i></a>'+
                        '</div>'+
                    '</div>';
            }
        var update = document.getElementById('myPost');
        update.innerHTML = output
    } 
}


function deletePost(indexNum){
    let info = JSON.parse(localStorage.getItem("testJSON"));
    info.blogPost.splice(indexNum,indexNum);
    let myJSON = JSON.stringify(info);
    localStorage.setItem("testJSON", myJSON);
}

