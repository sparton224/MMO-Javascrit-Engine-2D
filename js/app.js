requirejs.config({
	"baseUrl" : "js",
	"paths" : {
		// Libs
		"Class" : "libs/class",
		"Jquery" : "libs/jquery",
		// Class's
		"Launcher" : "app/classes/Launcher"
	}
});

require(['app/main']);