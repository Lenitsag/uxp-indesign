"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[6059],{69571:function(l,n,e){e.r(n),e.d(n,{_frontmatter:function(){return o},default:function(){return p}});var d=e(87462),i=e(45987),t=(e(15007),e(64983)),u=e(91515);const m=["components"],o={},s=(a="InlineAlert",function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",l)});var a;const x={_frontmatter:o},r=u.Z;function p(l){let{components:n}=l,e=(0,i.Z)(l,m);return(0,t.mdx)(r,(0,d.Z)({},x,e,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"uxp-manifest"},"UXP Manifest"),(0,t.mdx)("p",null,"The manifest is a JSON file that is located at the root of the plugin bundle. It is named ",(0,t.mdx)("inlineCode",{parentName:"p"},"manifest.json")," and is\nrequired for all plugins."),(0,t.mdx)("h2",{id:"overview"},"Overview"),(0,t.mdx)("p",null,"Each UXP plugin has one ",(0,t.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file that describes the plugin. It contains metadata such as the plugin's name,\nversion, icons, and entry points."),(0,t.mdx)("p",null,"The manifest file also contains the permissions that the plugin requires. Most importantly, it contains your plugin ID which is used to identify your plugin. (Valid plugin IDs are required for distributing in Adobe's Marketplace, read more ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/"},"in the docmentation"),".)"),(0,t.mdx)("p",null,"Since UXP plugins can be run in a number of different hosts, the manifest also contains a ",(0,t.mdx)("inlineCode",{parentName:"p"},"host")," field that specifies\nwhich host the plugin is for. This is used to identify the plugin in the manifest and in the plugin bundle."),(0,t.mdx)("h2",{id:"reference"},"Reference"),(0,t.mdx)("h3",{id:"manifest"},"Manifest"),(0,t.mdx)("p",null,"The object at the root of the manifest file."),(0,t.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,"Properties marked with an asterisk (","*",") are required."),(0,t.mdx)("h4",{id:"example"},"Example"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "manifestVersion": 5,\n    "id": "YOUR_ID_HERE",\n    "name": "Name of your plugin",\n    "version": "1.0.0",\n    "main": "index.html",\n    "host": {\n        "app": "HOST_APPLICATION",\n        "minVersion": "HOST_VERSION"\n    },\n    "entrypoints": [\n        {\n            "type": "command",\n            "id": "commandFn",\n            "label": {\n                "default": "Show A Dialog"\n            }\n        },\n        {\n            "type": "panel",\n            "id": "panelName",\n            "label": {\n                "default": "Panel Name"\n            }\n        }\n    ],\n    "icons": [\n        {\n            "width": 24,\n            "height": 24,\n            "path": "icons/icon.png",\n            "scale": [\n                1,\n                2\n            ]\n        }\n    ],\n    "requiredPermissions": {\n        "network": {\n            "domains": "all"\n        }\n    }\n}\n')),(0,t.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,"Properties marked with an asterisk (","*",") are required."),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",{className:"manifest-table"},(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"manifestVersion")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"5"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The manifestVersion indicates the version of the manifest schema. This document describes version 5 of the manifest schema."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"id")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The id uniquely identifies a plugin and is used to disambiguate plugin contexts, storage, errors, etc. For plugins distributed through the plugin marketplace, the ID has to match the ID in ",(0,t.mdx)("a",{href:"https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/"},"the Developer Distribution portal"),"."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"name")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string | Localized",(0,t.mdx)("wbr",null),"String")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The name visually identifies the plugin in the user interface. It is usually used in a plugin menu listing or launcher for top-level action items. The name can be a string, a key from the StringsDefinition object, or a localized string."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"strings")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"StringsDefinition")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A set of strings used to localize the plugin name and other user-facing strings. It can also be a path to a JSON file containing the StringsDefinition object."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"{","}")," (no strings)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"version")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The version indicates the plugin's version. The string has a format of major.minor.patch."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"main")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Indicates the primary JavaScript or HTML file, relative to the plugin's installation directory. Supports HTML and JS files, such as ",(0,t.mdx)("inlineCode",null,"index.html")," and ",(0,t.mdx)("inlineCode",null,"index.js"),". If not specified (for deprecations), ",(0,t.mdx)("inlineCode",null,"main.js")," is used."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'"main.js"')))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"icons")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"IconDefinition[]")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"An array of icons representing the overall plugin or panel icon. The host application uses these icons to present the plugin to the user. If the icons array is missing, a default icon will be used."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"[]")," (no icons)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"host")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"HostDefinition")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The host object indicates the plugin's compatibility with the host. Incompatible plugins will:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,"fail to install if attempted in the given host"),(0,t.mdx)("li",null,"be invisible in the in-app plugin marketplace for the given host"),(0,t.mdx)("li",null,"be unavailable for update if the update is no longer compatible.")))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"entrypoints")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"EntrypointDefinition[]")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The entrypoints array defines the entrypoints that the plugin provides."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"requiredPermissions")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"PermissionsDefinition")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Indicates the various permissions this plugin requires. These permissions are required before accessing certain API surfaces. Without these permissions in the manifest, API access may fail or throw an error. Some permissions require user consent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"{","}")," (no permissions)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"addon")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"object")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null," ",(0,t.mdx)("i",null,"Not supported in InDesign v18.5")," ",(0,t.mdx)("br",null),"Addon definitions for hybrid plugins. A UXP Hybrid plugin is a UXP plugin that can access the power of C++ native libraries."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"{","}")," (no addons)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"featureFlags")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"FeatureFlags")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A set of feature flags that can be used to enable or disable certain features of the plugin. These flags are used to gate features that are not yet ready for general availability."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"{","}")," (no additional feature flags)"))))),(0,t.mdx)("h3",{id:"stringsdefinition"},"StringsDefinition"),(0,t.mdx)("p",null,"Represents a set of strings used to localize the plugin name and other user-facing strings."),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"StringsDefinition")," keys can be used anywhere where ",(0,t.mdx)("inlineCode",{parentName:"p"},"LocalizedString")," is supported."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Example")),(0,t.mdx)("p",null,"Your manifest.json file might look like this:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "my-plugin",\n    "strings": {\n        "my-plugin": {\n            "default": "My Plugin",\n            "de": "Mein Plugin"\n        }\n    }\n}\n')),(0,t.mdx)("h3",{id:"localizedstring"},"LocalizedString"),(0,t.mdx)("p",null,"Represents a localized string. The key is the locale, and the value is the translated string."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Example")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "default": "Hello",\n    "en": "Hello",\n    "de": "Hallo"\n}\n')),(0,t.mdx)("h4",{id:"properties"},"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"default")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The default string used when no translation is available for the current locale."))))),(0,t.mdx)("h3",{id:"icondefinition"},"IconDefinition"),(0,t.mdx)("p",null,"Represents an icon used by the plugin or specific entry point. The icon may be used in the plugin list, toolbar, or other places."),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"width")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"number")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The width of the icon in pixels."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"height")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"number")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The height of the icon in pixels."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"path")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The path to the icon, relative to the plugin's installation directory. Supports PNG (",(0,t.mdx)("inlineCode",null,".png"),"), JPG (",(0,t.mdx)("inlineCode",null,".jpg")," or ",(0,t.mdx)("inlineCode",null,".jpeg"),"), and SVG (",(0,t.mdx)("inlineCode",null,".svg"),") files."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"scale")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"number[]")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Specifies the scaling factors that the icon supports."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "path": "icon.png",\n    "width": 24,\n    "height": 24,\n    "scale": [1, 2, 2.5]\n}'),(0,t.mdx)("p",null,"Results in the following icon files being used:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"icon.png")," or ",(0,t.mdx)("inlineCode",null,"icon@1x.png")," (24x24px) for 100% scaling"),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"icon@2x.png")," (48x48px) for 200% scaling"),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"icon@2.5x.png")," (60x60px) for 250% scaling")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"[1]")," (only supports 100% scaling)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"theme")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'("all" | "lightest" | "light" | "medium" | "dark" | "darkest")[]')),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Specifies the themes that the icon supports."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "path": "icon.png",\n    "width": 24,\n    "height": 24,\n    "theme": ["lightest", "light"]\n}\n'),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'["all"]')," (supports all themes)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"species")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'("generic" | "toolbar" | "pluginList")[]')),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Indicates the suitable use of this icon. The default species is generic, meaning that the icon is suitable for display anywhere."),(0,t.mdx)("p",null,"Options:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,"generic: suitable for display anywhere"),(0,t.mdx)("li",null,"toolbar: suitable for display in a toolbar. Icon sizes are 23x23px for 100% scaling and 46x46px for 200% scaling."),(0,t.mdx)("li",null,"pluginList: suitable for display in a plugin list. Icon sizes are 24x24px for 100% scaling and 48x48px for 200% scaling.")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'["generic"]')," (suitable for display anywhere)"))))),(0,t.mdx)("h3",{id:"entrypointdefinition"},"EntrypointDefinition"),(0,t.mdx)("p",null,"Represents an entrypoint provided by the plugin, which can be invoked by the user."),(0,t.mdx)("p",null,"An entrypoint consists of an ID and a label at minimum."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "id": "myPlugin.myEntrypoint",\n    "label": "My Entrypoint"\n}'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"type")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"command" | "panel"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The type of entrypoint. Currently, only ",(0,t.mdx)("inlineCode",null,"command")," and ",(0,t.mdx)("inlineCode",null,"panel")," are supported."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"id")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The ID of the entrypoint. This ID must be unique within the plugin. It is used to identify the code that implements the entrypoint."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"label")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string | Localized",(0,t.mdx)("wbr",null),"String")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The label of the entrypoint. This label is used to display the entrypoint to the user, such as in the plugin menu."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"description")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string | Localized",(0,t.mdx)("wbr",null),"String")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A description of the entrypoint. This description is used in tooltips and other places where a longer description is appropriate, depending on the host app."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (uses the plugin's name)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"shortcut")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"{"," mac: string, win: string ","}")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A keyboard shortcut that can be used to invoke the entrypoint."),(0,t.mdx)("p",null,"Keyboard shortcuts are specified separately for Windows and macOS platforms. If the shortcut is not available in the host application, it will be ignored."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Please note:")," ",(0,t.mdx)("em",null,"Currently, keyboard shortcuts are only supported in Adobe XD.")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'"shortcut": {\n    "mac": "Cmd+Shift+P", \n    "win": "Ctrl+Shift+P" \n}\n'),(0,t.mdx)("p",null,"Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,'One or more modifier keys, in any order, each one followed by "+"'),(0,t.mdx)("li",null,"Mac: modifiers may be Cmd, Ctrl, Opt/Alt, or Shift. The shortcut must contain at least one of Cmd or Ctrl."),(0,t.mdx)("li",null,"Win: modifiers may be Ctrl, Alt, or Shift. The shortcut must contain Ctrl."),(0,t.mdx)("li",null,"A letter or number key.")),(0,t.mdx)("p",null,'Letters are case-insensitive (e.g., "Cmd+P" and "Cmd+p" mean the same thing and neither requires pressing Shift). Other keys (including punctuation, arrow keys, or F1-F12) are currently not supported.'),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Please note:"),(0,t.mdx)("em",null," If your shortcut collides with a built-in command in the host app, or another plugin's shortcut, your shortcut will be ignored, and you\"ll see a warning printed to the developer console.")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (no shortcut)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"icon")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"Icon",(0,t.mdx)("wbr",null),"Definition[]")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"An icon specific to the entrypoint. If specified, this icon overrides the plugin icon in places where the entrypoint is specifically displayed."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"[]")," (plugin icon)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"minimumSize")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"{"," width: number, height: number ","}")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Indicates the desired minimum size of the view. The host may not be able to guarantee the minimum size. The size is defined by width and height in pixels. If no minimum size is specified, the host will use its own default minimum size."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,"(host-specific default)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"maximumSize")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"{"," width: number, height: number ","}")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The maximum desired size of the view. The host may not be able to guarantee the maximum size. If the view is hosted in a dialog, resizing can be prevented by setting minimumSize = maximumSize."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,"(host-specific default)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"preferred",(0,t.mdx)("wbr",null),"DockedSize")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"{"," width: number, height: number ","}")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The preferred size of the view when docked, if it can be docked, or for modal dialogs that have no reference_node_id. The host may not be able to guarantee this size."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,"(host-specific default)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"preferred",(0,t.mdx)("wbr",null),"FloatingSize")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"{"," width: number, height: number ","}")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The preferred size of the panel when floating. The host may not be able to guarantee this size. See minimumSize for the format."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,"(host-specific default)"))))),(0,t.mdx)("h3",{id:"hostdefinition"},"HostDefinition"),(0,t.mdx)("p",null,"UXP supports a number of different host applications. The host definition specifies which host app the plugin supports."),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"app")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"PS" ',(0,t.mdx)("wbr",null),'| "ID" ',(0,t.mdx)("wbr",null),'| "XD"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The host app that the plugin supports."),(0,t.mdx)("p",null,"Possible values:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"PS"),": Adobe Photoshop"),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"ID"),": Adobe InDesign"),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"XD"),": Adobe XD")))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"minVersion")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The minimum version of the host app that the plugin supports. The version string follows the format of ",(0,t.mdx)("inlineCode",null,"x.y.z"),"."))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"maxVersion")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"The maximum version of the host app that the plugin supports."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (the latest version of the host app)"))))),(0,t.mdx)("h3",{id:"permissionsdefinition"},"PermissionsDefinition"),(0,t.mdx)("p",null,"To ensure that plugins are secure, UXP requires that plugins declare the permissions they need to function."),(0,t.mdx)(s,{variant:"info",slots:"header, text",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Pro tip")),(0,t.mdx)("p",null,"Make sure you configure the most accurate permission for your use case because in the future we will ask users to provide their consent based on it. For example, for file operations, you may find 'fullAccess' to be the least restrictive and hence the easiest to pick, but a user may not be comfortable giving full access to their system unless it's absolutely necessary and might deny the installation of your plugin altogether. "),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"clipboard")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"read" | "readAndWrite"')),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to read and write to the clipboard. The ",(0,t.mdx)("a",{href:"/indesign/uxp/resources/recipes/clipboard/"},"clipboard recipe")," has more examples."),(0,t.mdx)("p",null,"Possible values:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"read"),": enables the plugin to read from the clipboard."),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"readAndWrite"),": enables the plugin to read from and write to the clipboard.")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (no clipboard access)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"localFileSystem")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"plugin" | "request" | "fullAccess"')),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to access the file system. The ",(0,t.mdx)("a",{href:"/indesign/uxp/resources/recipes/file-operation/"},"file-operation recipe")," has a detailed example."),(0,t.mdx)("p",null,"Possible values:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"plugin"),": enables the plugin to access the file system in the plugin folder."),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"request"),": enables the plugin to request access to the file system (user consent)."),(0,t.mdx)("li",null,(0,t.mdx)("inlineCode",null,"fullAccess"),": enables the plugin to access the file system without requesting access.")),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'"plugin"')))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"network")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"NetworkPermission")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to access the network."),(0,t.mdx)("p",null,"For example, to make HTTP requests (XHR, fetch, etc.), load images (",(0,t.mdx)("inlineCode",null,'<img src="" />'),"), etc."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (no network access)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"webview")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"WebviewPermission")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to use webviews in its UI to display web content or complex UI."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (no webview usage)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"launchProcess")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"LaunchProcessPermission")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to launch processes using APIs like ",(0,t.mdx)("inlineCode",null,'require("uxp").shell.openPath()')," or ",(0,t.mdx)("inlineCode",null,"shell.openExternal()"),"."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")," (no process launching)"))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"allowCodeGenerationFromStrings")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"boolean")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Allows you to generate code from strings. You will need this while using inline event handlers for HTML elements, ",(0,t.mdx)("inlineCode",null,"eval()"),", and ",(0,t.mdx)("inlineCode",null,"new Function()")," syntax."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"false")))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"ipc")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"IpcPermission")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to communicate with other plugins."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"undefined")))))),(0,t.mdx)("h4",{id:"networkpermission"},"NetworkPermission"),(0,t.mdx)("p",null,"Specifies the domains that the plugin can access in network requests."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "domains": [\n        "https://example.com",\n        "https://*.adobe.com/",\n        "wss://*.myplugin.com"\n    ]\n}\n'),(0,t.mdx)("p",null,"Then, in your plugin code, you can make network requests like this:"),(0,t.mdx)("code",{className:"language-javascript"},'const response = await fetch("https://example.com");\n'),(0,t.mdx)("p",null,"Or load images like this:"),(0,t.mdx)("code",{className:"language-html"},'<img src="https://example.com/image.png" />'),(0,t.mdx)("p",null,"You can also allow access to all domains by setting ",(0,t.mdx)("inlineCode",null,"domains")," to ",(0,t.mdx)("inlineCode",null,'"all"'),"."),(0,t.mdx)("code",{className:"language-json"},'{\n    "domains": "all"\n}\n'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"domains")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'string[] | "all"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,'The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains.'))))),(0,t.mdx)("p",null,"The ",(0,t.mdx)("a",{href:"/indesign/uxp/resources/recipes/network/"},"network recipe")," has more details."),(0,t.mdx)("h4",{id:"webviewpermission"},"WebViewPermission"),(0,t.mdx)("p",null,"Enables the plugin to use webviews in its UI to display web content or complex UI. "),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "allow": "yes",\n    "domains": ["https://example.com"],\n    "enableMessageBridge": "localAndRemote"\n}\n'),(0,t.mdx)("p",null,"Then, in your plugin code, you can use a webview like this:"),(0,t.mdx)("code",{className:"language-html"},'<webview src="https://example.com" />\n'),(0,t.mdx)("p",null,"To communicate between the webview and the plugin, you can use the message API:"),(0,t.mdx)("code",{className:"language-javascript"},'// In the plugin:\nconst webview = document.querySelector("webview");\nwebview.addEventListener("message", (event) => {\n    console.log("Received message from webview:", event.data);\n    webview.postMessage("Hello from the plugin!");\n});\n\n// In the webview:\nwindow.addEventListener("message", (event) => {\n    console.log("Received message from plugin:", event.data);\n    window.uxpHost.postMessage("Hello from the webview!");\n});\n'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"allow")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"yes"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,'Must be set to "yes" to enable webviews.'))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"domains")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'string[] | "all"')),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,'The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains.'))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"enableMessageBridge")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,'"no" | "localAndRemote"')),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Specifies whether the plugin can communicate with the webview using the message API."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'"no"')))))),(0,t.mdx)("p",null,"Find the detailed ",(0,t.mdx)("a",{href:"/indesign/uxp/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement/"},"WebView API reference")," or use the webview-starter template plugin in UDT."),(0,t.mdx)("h4",{id:"launchprocesspermission"},"LaunchProcessPermission"),(0,t.mdx)("p",null,"Specifies the schemas and extensions that the plugin can launch."),(0,t.mdx)("p",null,"For example, if the plugin can launch a web browser, it should specify the ",(0,t.mdx)("inlineCode",null,"http")," and ",(0,t.mdx)("inlineCode",null,"https")," schemas."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "schemas": ["http", "https"],\n    "extensions": []\n}\n'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"schemas")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string[]")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A set of schemas that the plugin can launch."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'["http", "https", "mailto"]')))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"extensions")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"string[]")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"A set of extensions that the plugin can launch. Only relevant for local files (using the ",(0,t.mdx)("inlineCode",null,"file://")," schema)"),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,'["pdf", "png", "jpg"]')))))),(0,t.mdx)("p",null,"The ",(0,t.mdx)("a",{href:"/indesign/uxp/resources/recipes/launch-process/"},"launch process recipe")," has more details."),(0,t.mdx)("h4",{id:"ipcpermission"},"IpcPermission"),(0,t.mdx)("p",null,"Allows communication with other plugins."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "enablePluginCommunication": true\n}\n'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"enablePluginCommunication")," *"),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"boolean")),(0,t.mdx)("td",null,"required"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables plugin communication."))))),(0,t.mdx)("p",null,"The ",(0,t.mdx)("a",{href:"/indesign/uxp/plugins/tutorials/inter-plugin-comm/"},"inter-plugin communication example")," has more details."),(0,t.mdx)("h3",{id:"featureflags"},"FeatureFlags"),(0,t.mdx)("p",null,"Specifies which experimental features the plugin uses."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-json"},'{\n    "enableFillAsCustomAttribute": true,\n    "enableSWCSupport": true\n}'),(0,t.mdx)("h4",null,"Properties"),(0,t.mdx)("table",null,(0,t.mdx)("thead",null,(0,t.mdx)("tr",null,(0,t.mdx)("th",null,"Name"),(0,t.mdx)("th",null,"Type"),(0,t.mdx)("th",null,"Required"),(0,t.mdx)("th",null,"Description"))),(0,t.mdx)("tbody",null,(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"enableFillAs",(0,t.mdx)("wbr",null),"CustomAttribute")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"boolean")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to use CSS variable in the ",(0,t.mdx)("inlineCode",null,"fill")," attribute on SVG elements."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-html"},'<svg width="100" height="100">\n    <rect width="100" \n        height="100" \n        fill="var(--iconColor, red)" \n    />\n</svg>'),(0,t.mdx)("p",null,"With the following CSS:"),(0,t.mdx)("code",{className:"language-css"},":root {\n    --iconColor: blue;\n}"),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"false")))),(0,t.mdx)("tr",null,(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"enableSWCSupport")),(0,t.mdx)("td",null,(0,t.mdx)("inlineCode",null,"boolean")),(0,t.mdx)("td",null,"optional"),(0,t.mdx)("td",null,(0,t.mdx)("p",null,"Enables the plugin to use ",(0,t.mdx)("a",{href:"https://developer.adobe.com/indesign/uxp/reference/uxp-api/reference-spectrum/swc/"},"Spectrum Web Components")," (requires installing and importing the components separately)"),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Example")),(0,t.mdx)("code",{className:"language-html"},'<sp-button variant="primary">\n    Click me\n</sp-button>'),(0,t.mdx)("p",null,"Note that you will need to manually install the library, import it (for example ",(0,t.mdx)("inlineCode",null,"import '@spectrum-web-components/",(0,t.mdx)("wbr",null),"button/sp-button.js'"),"), and bundle the code with a tool like webpack or esbuild so that it's included in your plugin."),(0,t.mdx)("p",null,(0,t.mdx)("strong",null,"Default value")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",null,"false")))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-plugins-concepts-manifest-index-md-9b9ac67b73e2bca77774.js.map