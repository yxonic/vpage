import{h as e}from"./vendor.1ee7c6df.js";const o=[e("h1",{},["Demos"]),e("p",{},["Here we demonstrate the usage of VPage with two examples, a multi-page project website and a single-page personal homepage, showing the simple but powerful side of VPage."]),e("p",{},["Both examples are organized in the same way, containing mainly three parts: ",e("code",{},["pages/"]),", ",e("code",{},["layouts/"])," and ",e("code",{},["components/"]),". We provide for you to write page content directly with ",e("strong",{},["Markdown"])," in ",e("code",{},["pages/"]),", organize the page layout in ",e("code",{},["layouts/"])," and write reusable ",e("strong",{},["Vue"])," component in ",e("code",{},["components/"]),"."]),e("pre",{},[`project/                      # or /personal
  pages/                      # page content with \`Markdown\` or \`Vue\`
  layouts/                    # page layout
  components/                 # Vue components
  assets/                     # images, icons, etc.
  _default.page.route.ts      # page routing
`]),e("h2",{},["\u267B\uFE0F ",e("a",{href:"/vpage/demos/project",target:"_blank",rel:"noopener"},["Project"])]),e("p",{},["We design a project called ",e("strong",{},["Recycle"])," for environmentally friendly Recycling. It contains common pages in a real project, such as a ",e("em",{},["blog"])," page and a ",e("em",{},["team"])," page. You can easily adapt this example to any other projects or products."]),e("h2",{},["\u{1F9D9}\u200D\u2642\uFE0F ",e("a",{href:"/vpage/demos/personal",target:"_blank",rel:"noopener"},["Personal"])]),e("p",{},["We make a personal homepage for ",e("strong",{},["Harry Potter"])," telling some of his early adventures. Hope you have fun making one for yourself too."])];var t={render(){return o}};const n={title:"VPage | Demos",layout:"page"};export{t as default,n as frontmatter,o as nodes};