import{o as a,c as t,n}from"./vendor.310ed871.js";const o={class:"markdown-body"},s=n(`<h1 id="installation" tabindex="-1">Installation</h1><h2 id="requirements" tabindex="-1">Requirements</h2><p>You need Node.js &gt; 12 for VPage to work. If you haven\u2019t already, check the <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noopener">official installation guide</a> to install Node.js.</p><h2 id="install" tabindex="-1">Install</h2><p>VPage is more of a project template than a package. To use VPage to scaffold your website, you can simply <a href="https://github.com/lem0nle/vpage/generate" target="_blank" rel="noopener">use GitHub template</a> to create your own repo on Github. Afterwards, you may clone it to a local directory and install the dependencies:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i
</code></pre><p>Alternatively, you can also create your project locally, using <code>degit</code>:</p><pre class="language-bash"><code class="language-bash">npx degit lem0nle/vpage <span class="token operator">&lt;</span>your-website-name<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>your-website-name<span class="token operator">&gt;</span>
<span class="token function">npm</span> i
</code></pre><h2 id="run-development-server" tabindex="-1">Run development server</h2><p>After you created your project, you can run the development server to see your pages live, simply by running:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run dev
</code></pre><p>then open <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a> to see your website.</p><p>The development server supports fast HMR (Hot Module Reload), thanks to <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> that VPage is built on. This means that you can modify the source code, and expect the rendered page to change instantly.</p><p>Try modify <code>src/pages/index.page.md</code> and observe the changes.</p>`,14),r=[s],u={title:"Installation - VPage Docs",layout:"book"},h={setup(l,{expose:e}){return e({frontmatter:{title:"Installation - VPage Docs",layout:"book"}}),(c,i)=>(a(),t("div",o,r))}};export{h as default,u as frontmatter};