webpackJsonp([0x86dae4791a45],{517:function(a,t){a.exports={data:{site:{siteMetadata:{title:"morihirok Blog",author:"Morihiro Kazushige",siteUrl:"https://morihirok.github.io"}},markdownRemark:{id:"/Users/morihiro/workspace/morihirok.github.io/src/pages/create-blog-with-gatsbyjs/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li>かなりお手軽に静的サイトを作れる</li>\n<li>Github Pages とか Netlify とかにホスティングすればサーバレンタル代はかからない</li>\n<li>書き慣れた Markdown でブログが書ける</li>\n<li>Google Analitics と簡単に連携できるのでアクセス解析も可能</li>\n<li>サイトの細かい修正も React を知ってれば割とすんなりできる(できそう)</li>\n</ul>\n<h1>やったこと</h1>\n<p>基本的には<a href="https://www.gatsbyjs.org/">公式ドキュメント</a>に書いてあることしかやってないのですが、「これくらいの手順でできる」という参考になるように書いておきます。</p>\n<p>実際に使うときは<a href="https://www.gatsbyjs.org/">公式ドキュメント</a>を参照することをおすすめします。(手順変わってもこのページを保守するつもりはないです。)</p>\n<h2>インストール &#x26; セットアップ</h2>\n<p>まずは CLI ツールをインストールします。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">npm install -g gatsby-cli</code></pre>\n      </div>\n<p><code class="language-text">gatsby new</code> でプロジェクトを作成します。</p>\n<p>このとき、公式でたくさんのスターターが用意されているので好きなのを選びます。</p>\n<p>(今回は<code class="language-text">gatsby-starter-blog</code>を選びました。デザインがそのまんまなのが見て取れると思います。)</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">gatsby new morihirok.github.io gatsby-starter-blog</code></pre>\n      </div>\n<p>あとは<code class="language-text">cd morihirok.github.io</code>したのち、<code class="language-text">npm run develop</code>すると<code class="language-text">localhost:8080</code>で作成したサイトが確認できます。お手軽！</p>\n<h2>Github Pages にデプロイする</h2>\n<p>これも<a href="https://github.com/tschaub/gh-pages">gh-pages</a>というライブラリに乗っかれば簡単にできるようになります。</p>\n<p>私は <code class="language-text">git remote</code> でデプロイ先のリポジトリを指定して、package.json の scripts に</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">&quot;deploy&quot;: &quot;gatsby build &amp;&amp; gh-pages -d public -b master&quot;</code></pre>\n      </div>\n<p>と書いています。これで<code class="language-text">npm run deploy</code>とすればデプロイ完了です。お手軽！</p>\n<h2>Google Analytics を導入する</h2>\n<p><a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics">gatsby-plugin-google-analytics</a>というプラグインがあるので一瞬で導入できます。</p>\n<p>プロジェクトのルートディレクトリに<code class="language-text">gatsby-config.js</code>というファイルがあり、以下のようなコンフィグがあります。</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">`gatsby-plugin-sharp`,\n{\n    resolve: `gatsby-plugin-google-analytics`,\n    options: {\n      trackingId: `xxx`,\n    },\n},</code></pre>\n      </div>\n<p>御察しのとおり、<code class="language-text">trackingId</code>のところに Google Analytics から取得した trackingId を書いてあげれば設定完了です。お手軽！</p>\n<h1>今後試したいこと</h1>\n<p>実際にコードの中身をさわって、インラインコードを見やすくしたり、日本語フォントを気に入ったものにしたりといろいろ遊んでみようと思います。</p>\n<p>書き慣れたエディタで Markdown で文章書いて、コマンド一発でアップロードできるのはとても体験がよいです！</p>',frontmatter:{title:"Gatsby.jsでブログを作成しました",date:"August 17, 2018"}}},pathContext:{slug:"/create-blog-with-gatsbyjs/",previous:null,next:{fields:{slug:"/edit-blog-format/"},frontmatter:{title:"Gatsby Starter Blogで作成したブログのフォーマットをいじってみました"}}}}}});
//# sourceMappingURL=path---create-blog-with-gatsbyjs-70ac502de8f57bda2b29.js.map