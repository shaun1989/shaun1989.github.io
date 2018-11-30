window.onload = function welcome() {
	alert("hello and welcome to my page at the moment it is a work in progress so bare with me ");
}
const learn = [{
	"id": "standard cmd", 
	    "----": "-----------<br />",
		"move to folder": "cd Documents/foldername/foldername <br />",
		"create folder": "mkdir filename <br /> ",
		"rename": "mv filename , newfilename <br />",
		"delete": "rmdir filename <br />",
		"view file": "cat ~/filename<br /> ",
		"move a folder": "move filename destinationFolder"
},
{
	"id": "rvm cmd",
	    "----": "-----------<br />",
		"run": "source home/name/.rvm/scripts/ <br />",
		"use": "use 2.5.3 <br />",
		"default": "use --default 2.5.3 <br />",
		"config": "rvm config -l or --list <br />",
       "install": "rvm install 2.5.3 or preffered version <br />"
},
{  "id": "git cmd",
   "----": "-----------<br />",
   "add user": "git config --global  user.name  <br />",
   "add email": "git config --global user.email <br />",
   "add color": "git config --global color.ui auto <br />",
   "current user": "git config --get user.name <br />",
   "see users email": "git config --get user.emal <br />",
   "to set to watch current directory": "git init <br />",
   "to add a remote": "git remote add <url for repository> <br />",
   "add files for commit": "git add . <br />",
   "commit files": "git commit -m 'commit message' <br />",
   "push file": "git push origin branchname"

},
{
	"id": "rvm install",
	"----": "-----------<br />",
	"required": "curl , most recent os update , git recommended <br />",
	"command": "curl -l get.rvm.oi | bash -s stable <br />"
},
{
   "id": "system update",
   "----": "-----------<br />",
   "required": "sudo apt-get update    first followed by     sudo apt update <br />",
    "install ": "sudo apt-get dist-upgrade <br />"

}];
function search (id  ,prop) {
    id = document.getElementById("option").value;
    prop = document.getElementById("specific").value;
	for (x = 0; x < learn.length; x++) {
		if (learn[x].id === id) {
			if ( prop === "") {
			return document.getElementById("results2").innerHTML = JSON.stringify(learn[x]);
		 } else if (learn[x].id === id ) {
				if (learn[x].hasOwnProperty(prop)) {
					return document.getElementById("results2").innerHTML = learn[x][prop];
				} else {
					return document.getElementById("results2").innerHTML = "not found";
				}
			}
		}
}
return "please enter a valid search";
}

function searches (id) {
    id = document.getElementById("in1").value;
	var arr = [{
		"id": "install",
		"1": "rvm install <br />",
		"2": "git install <br />",
		"3": "os install <br />",
		"4": "virtual box install <br />",
		"5": "ruby install <br />",
		"6": "system update <br />"
    },
    {
        "id": "cmd",
        "1": "rvm cmd <br />",
        "2": "standard cmd <br />",
        "3": "git cmd <br />"
    }
    ];
   for (var x = 0; x < arr.length; x++) {
       if (arr[x].id === id) {
           return document.getElementById("results").innerHTML  = JSON.stringify(arr[x]);
       }
   }
}