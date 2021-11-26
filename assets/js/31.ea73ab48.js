(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{250:function(e,t,a){"use strict";a.r(t);var n=a(5),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"virtual-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-environment"}},[e._v("#")]),e._v(" Virtual Environment")]),e._v(" "),a("p",[e._v("We talked about "),a("RouterLink",{attrs:{to:"/lessons/modules.html#python-package-index"}},[e._v("Python Package Index (PyPi)")]),e._v(" earlier before.\nThere are tons of useful libraries in the Python community.\nToday we are going to learn a practical way to use them in our project.")],1),e._v(" "),a("h2",{attrs:{id:"why-we-need-virtual-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-we-need-virtual-environments"}},[e._v("#")]),e._v(" Why we need virtual environments")]),e._v(" "),a("p",[e._v("When we use the "),a("code",[e._v("pip")]),e._v(" command to install a library from PyPi, we are going to install it in the system Python environment if not specified otherwise. Such exercise could be problematic if we have multiple projects relying on the same library yet requiring different versions of the same library.\nIf we only manage the libraries by the single system-wise Python environment, we would only be able to meet the needs for a or only few projects. The conflict cannot be solved.")]),e._v(" "),a("p",[e._v("In light of the need to manage different libraries for different projects, we normally use a virtual environment to create an isolated environment for Python project. It allows each project to define its own dependencies (a set of libraries),regardless of what other projects need.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Semantic Versioning")]),e._v(" "),a("p",[e._v("When we look for a library in PyPi, we may notice it has version number.")]),e._v(" "),a("p",[e._v("Say, "),a("code",[e._v("Django 3.2.9")]),e._v(". It means the current version of the "),a("code",[e._v("Django")]),e._v(" library is "),a("code",[e._v("3.2.9")]),e._v(" where")]),e._v(" "),a("p",[e._v("3 is the major version, 2 is minor version, and 9 is the path version.")]),e._v(" "),a("p",[e._v("Given a version number MAJOR.MINOR.PATCH, the number would increment:")]),e._v(" "),a("ul",[a("li",[e._v("MAJOR version when you make incompatible API changes,")]),e._v(" "),a("li",[e._v("MINOR version when you add functionality in a backwards compatible manner, and")]),e._v(" "),a("li",[e._v("PATCH version when you make backwards compatible bug fixes.")])]),e._v(" "),a("p",[e._v("Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.")])]),e._v(" "),a("h2",{attrs:{id:"the-venv-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-venv-module"}},[e._v("#")]),e._v(" The "),a("code",[e._v("venv")]),e._v(" module")]),e._v(" "),a("p",[e._v("There are a handful of famous libraries to handle virtual environments.\nWe are going to use "),a("a",{attrs:{href:"https://docs.python.org/3/tutorial/venv.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("venv")]),a("OutboundLink")],1),e._v(" that comes with Python.")]),e._v(" "),a("h3",{attrs:{id:"create-a-virtual-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-virtual-environment"}},[e._v("#")]),e._v(" Create a virtual environment")]),e._v(" "),a("p",[e._v("To create a virtual environment, simply run the "),a("code",[e._v("venv")]),e._v(" module as a script with the desired name for the virtual environment.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python -m venv venv\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("In the example code above "),a("code",[e._v("python -m venv")]),e._v(" is to execute the "),a("code",[e._v("venv")]),e._v(" module in command line, the second "),a("code",[e._v("venv")]),e._v(" is the name fo the virtual environment. In convention, we normally use "),a("code",[e._v("venv")]),e._v(" as the name for a virtual environment.\nIt will create a folder with the name "),a("code",[e._v("venv")]),e._v(" in the directory where you execute the command from.")]),e._v(" "),a("h3",{attrs:{id:"activate-a-virtual-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-a-virtual-environment"}},[e._v("#")]),e._v(" Activate a virtual environment")]),e._v(" "),a("p",[e._v("In order to use the virtual environment, we have to activate it in the command line.")]),e._v(" "),a("p",[e._v("On Windows, run:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("activate\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("On MacOS, run:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" venv/bin/activate\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("We should be able to see "),a("code",[e._v("(venv)")]),e._v(" indicator attached to our command line when the virtual environment is activated.")]),e._v(" "),a("p",[e._v("We can also deactivate the virtual environment by:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("deactivate\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"use-pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-pip"}},[e._v("#")]),e._v(" Use "),a("code",[e._v("pip")])]),e._v(" "),a("p",[e._v("After activation, when we fire the "),a("code",[e._v("pip")]),e._v(" command, all libraries would be installed in the "),a("code",[e._v("venv")]),e._v(" folder locally.")]),e._v(" "),a("p",[e._v("To install a library "),a("code",[e._v("xxx")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" xxx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("To show what libraries have been installed:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip list\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip freeze\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("pip freeze")]),e._v(" would generate in the "),a("code",[e._v("pip")]),e._v("-readable format so that if we redirect the output to a file, we can use that file to clone a virtual environment.")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip freeze "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" requirements.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then, use the "),a("code",[e._v("requirements.txt")]),e._v(" on a new virtual environment")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r requirements.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);