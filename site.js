window.onload = function welcome() {
	alert("hello and welcome to my page at the moment it is a work in progress so bare/n with me this version is currently only for laptops mobile to come soon");
}
const learn = [{
	"id": "standard", 
	    "name":"cmd",
		"move to folder": "cd Documents/foldername/foldername",
		"create folder": "mkdir filename",
		"rename": "mv filename , newfilename",
		"delete": "rmdir filename",
		"view file": "cat ~/filename",
		"move a folder": "move filename destinationFolder"
},
{
    "id": "rvm",
        "name": "cmd",
        "run": "source home/name/.rvm/scripts/",
        "use": "use 2.5.3",
        "default": "use --default 2.5.3",
        "config": "rvm config -l or --list"
},
{
    "id": "rvm1",
    "name": "install",
    "required": "curl , most recent os update , git recommended",
    "command": "curl -l get.rvm.oi | bash -s stable"

}];
function search (id , name , prop) {
    for (x = 0; x < learn.length; x++) {
        if (learn[x].id === id ) {
            if (name === name && prop === "") {
            return JSON.stringify(learn[x]);
         } else if (learn[x].id === id ) {
            if (learn[x].name === name) {
                if (learn[x].hasOwnProperty(prop)) {
                    return learn[x][prop];
                } else {
                    return "not found";
                }
            }
        }
}
}
return "please enter a valid search";
}
document.write(search("rvm1","install","required"));