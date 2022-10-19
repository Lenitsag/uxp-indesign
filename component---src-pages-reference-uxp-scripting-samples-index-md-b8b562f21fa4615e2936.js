"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5539],{77523:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var o=t(87462),a=t(63366),l=(t(15007),t(64983)),s=t(91515),i=["components"],d={},c={_frontmatter:d},r=s.Z;function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.mdx)(r,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"code-samples"},"Code samples"),(0,l.mdx)("p",null,"Check out the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-indesign/tree/main/src/pages/uxp-scripting-samples"},"full repo of scripting samples here"),"."),(0,l.mdx)("h2",{id:"basic"},"Basic"),(0,l.mdx)("p",null,"This sample script demonstrates the execution of regular javascript using uxp scripting. "),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const getAppName = () => {\n    let appName;\n    try {\n        ps = require(\'photoshop\').app;\n        appName = "PHOTOSHOP";\n    } catch (error) {\n        if (app) {\n            appName = "InDesign";\n        }\n    }\n    return appName;\n}\n\ntry{\n    const  text = "Hello world!";\n    let appName = getAppName();\n    \n    console.log("\\n" + text + "\\nWelcome to UXP Scripting..." + (appName ? "\\nin\\n" + appName : ""));\n}catch(e){\n    console.log(e);\n}\n')),(0,l.mdx)("h2",{id:"dialog"},"Dialog"),(0,l.mdx)("p",null,"The script below demonstrates how to create a dialog using an anonymous function, as well as setting up event listeners and resolving/rejecting promises."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'async function showDialog() {\n     \n    return new Promise((resolve, reject) => {\n        try{\n            let dialog = getDialog();\n            document.body.appendChild(dialog).showModal();\n            \n            const closeBtn = document.getElementById("close");\n            closeBtn.addEventListener("click", () => {\n                console.log("clicked on the close btton");\n                dialog.close();\n            })\n \n            // add listeners on the dialog close and cancel and resolve/reject the promise returned in one of them.\n            // or you can have a button done in the dialog and can resolve the promise on the click of the button,\n            // but make sure that a promise is returned and that is resolved/rejected later else dialog wont show up.\n            dialog.addEventListener("cancel", () => {\n                console.log("dialog cancel called");\n                reject("dialog cancel called");\n            });\n \n            dialog.addEventListener("close", () => {\n                console.log("dialog Close called");\n                resolve("dialog Close called");\n            });\n        } catch (e) {\n            console.log(e);\n            reject(e);\n        }\n    })\n}\n\n// wait for the dialog to be closed\nawait showDialog();\n\n// Dialog creation and setting CSS styles for elements using anonymous method\nfunction getDialog() {\n    const dialog = document.createElement("dialog");\n    // dialog.style.height = "200px";\n    // dialog.style.width = "600px";\n  \n    dialog.style.color = "white";\n  \n    const div = document.createElement("div");\n    div.style.display = "flex";\n    div.style.flexDirection = "column";\n    div.style.height = "300px";\n    div.style.width = "400px";\n    div.style.alignItems = "center";\n  \n    const header = document.createElement("h2");\n    header.id = "head";\n    header.style.color = "white";\n    header.textContent = "Dialog Created by a script.";\n    div.appendChild(header);\n\n\n    const image = document.createElement("img");\n    image.src = "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png";\n    image.style.marginTop = "30px";\n    div.appendChild(image);\n\n    const cloaseButton = document.createElement("sp-button");\n    cloaseButton.id = "close";\n    cloaseButton.style.height = "30px";\n    cloaseButton.textContent = "Close";\n    cloaseButton.style.marginTop = "10px";\n    div.appendChild(cloaseButton);\n      \n  \n    dialog.appendChild(div);\n    return dialog;\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-uxp-scripting-samples-index-md-b8b562f21fa4615e2936.js.map