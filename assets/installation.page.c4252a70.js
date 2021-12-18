import{h as e}from"./vendor.06450116.js";var o={render(){return[e("h1",{},["Installation"]),e("h2",{},["Requirements"]),e("p",{},["You need Node.js > 12 for VPage to work. If you haven\u2019t already, check the ",e("a",{href:"https://nodejs.org/en/download/package-manager/"},["official installation guide"])," to install Node.js."]),e("h2",{},["Install"]),e("p",{},["VPage is more of a project template than a package. To use VPage to scaffold your website, you can simply ",e("a",{href:"https://github.com/lem0nle/vpage/generate"},["use GitHub template"])," to create your own repo on Github. Afterwards, you may clone it to a local directory and install the dependencies:"]),e("pre",{},[`npm i
`]),e("p",{},["Alternatively, you can also create your project locally, using ",e("code",{},["degit"]),":"]),e("pre",{},[`npx degit lem0nle/vpage <your-website-name>
cd <your-website-name>
npm i
`]),e("h2",{},["Run development server"]),e("p",{},["After you created your project, you can run the development server to see your pages live, simply by running:"]),e("pre",{},[`npm run dev
`]),e("p",{},["then open ",e("a",{href:"http://localhost:3000"},["http://localhost:3000"])," to see your website."]),e("p",{},["The development server supports fast HMR (Hot Module Reload), thanks to ",e("a",{href:"https://vitejs.dev/"},["Vite"])," that VPage is built on. This means that you can modify the source code, and expect the rendered page to change instantly."]),e("p",{},["Try modify ",e("code",{},["src/pages/index.page.md"])," and observe the changes."])]}};const a={title:"Installation - VPage Docs",layout:"book"};export{o as default,a as frontmatter};
