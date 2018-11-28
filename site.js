window.onload = function welcome() {
	alert("hello and welcome to my page at the moment it is a work in progress so bare/n with me this version is currently only for laptops mobile to come soon");
}
const learn = [{
	"id": "standard cmd", 
		"move to folder": "cd Documents/foldername/foldername <br />",
		"create folder": "mkdir filename <br /> ",
		"rename": "mv filename , newfilename <br />",
		"delete": "rmdir filename <br />",
		"view file": "cat ~/filename<br /> ",
		"move a folder": "move filename destinationFolder"
},
{
    "id": "rvm cmd",
        "run": "source home/name/.rvm/scripts/ <br />",
        "use": "use 2.5.3 <br />",
        "default": "use --default 2.5.3 <br />",
        "config": "rvm config -l or --list <br />"
},
{
    "id": "rvm install",
    "required": "curl , most recent os update , git recommended <br />",
    "command": "curl -l get.rvm.oi | bash -s stable <br />"

}];
function search (id  ,prop) {
    for (x = 0; x < learn.length; x++) {
        if (learn[x].id === id) {
            if ( prop === "") {
            return JSON.stringify(learn[x]);
         } else if (learn[x].id === id ) {
                if (learn[x].hasOwnProperty(prop)) {
                    return learn[x][prop];
                } else {
                    return "not found";
                }
            }
        }
}
return "please enter a valid search";
}
document.write(search("rvm cmd","run",""));