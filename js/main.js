
//this function redirect to formpage
function redirect(){ 
    window.location="formpage.html";
}

//To get the current time and date
function timeDate(){
    var currentTime = new Date();
    return  (currentTime.getDate() + '-' + currentTime.getMonth()+1 + '-' +
            currentTime.getFullYear() + ' @ ' + currentTime.getHours() + ':' +
            currentTime.getMinutes() + ':' + currentTime.getSeconds());
}

//This is to validate and store user's input
function postBlog(){

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
        

//This is to output the post in the local storage to user
function getPost(){

    var text =localStorage.getItem("testJSON");
    var info = JSON.parse(text);
    var output = '';
    var update = document.getElementById('blogbody');

    if(info.blogPost.length === 0){
        update.innerHTML = '<h3>No Blog post yet, click on the <a href="formpage.html">create</a> to publish your first post.......</h3>';
    }else{
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
                            '<i class="fa fa-trash" onclick="deletePost('+ i + ')"></i>'+
                        '</div>'+
                        '<div id="icon">'+
                            '<i class="fa fa-edit" onclick="editPost('+ i + ')"></i>'+
                        '</div>'+
                    '</div>';
            }
        update.innerHTML = output
    } 
}

//For delete confirmation.
function getConfirmation(){

    let getConf = confirm("Are you sure you want to delete this post ?");
    if( getConf == true ){
        return true;
    }else{
        return false;
    }
}

//This is to delete selected post by the user.
function deletePost(indexNum){

    console.log(indexNum)
    if(getConfirmation() == true){
        let info = JSON.parse(localStorage.getItem("testJSON"));
        info.blogPost.splice(indexNum,(indexNum+1));
        let myJSON = JSON.stringify(info);
        localStorage.setItem("testJSON", myJSON);
    } 
    window.location.reload();
}

//To edit user's existing post..
function editPost(indexNum){
    window.location = "formpage.html";
    let info = JSON.parse(localStorage.getItem("testJSON"));
    let x = document. getElementById('name'); URLSearchParams
    x.innerText = (info.blogPost[indexNum].name);
    document.getElementById('title').innerText= (info.blogPost[indexNum].title);
    idocument.getElementById('post').innerText = (info.blogPost[indexNum].post);
}


function notice(){
    document.write('This page is still under contruction, kindly click on <a href="home.html">home</a> to go back to previous page..');
}

