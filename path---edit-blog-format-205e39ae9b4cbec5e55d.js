webpackJsonp([0x8605029acab9],{518:function(a,t){a.exports={data:{site:{siteMetadata:{title:"morihirok Blog",author:"Morihiro Kazushige",siteUrl:"https://morihirok.github.io"}},markdownRemark:{id:"/Users/morihiro/workspace/morihirok.github.io/src/pages/edit-blog-format/index.md absPath of file >>> MarkdownRemark",html:'<h1>Typography.js をいじる</h1>\n<p><a href="https://github.com/gatsbyjs/gatsby-starter-blog">Gatsby Starter Blog</a>はデザインを<a href="https://kyleamathews.github.io/typography.js/">Typography.js</a>にて管理しています。</p>\n<p><code class="language-text">gatsby new</code> したタイミングで <code class="language-text">src/utils/typography.js</code> が生成され、それを読み込む設定になっているので、ここをいじってお望みのブログデザインを手に入れて行きます。</p>\n<h2>インラインコードを見やすくする</h2>\n<p>Typography.js にはプラグイン機能があり、インラインコードのバックグラウンドカラーを変えてくれるプラグインがすでに存在しています。</p>\n<p>今回は Gatsby Starter Blog のデフォルトテーマである<code class="language-text">typography-theme-wordpress-2016</code>にプラグインを追加します。</p>\n<p>まずは <code class="language-text">npm install --save typography-plugin-code</code> して該当のプラグインを落とします。</p>\n<p>あとは以下のコード例のようにプラグインを追加します。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">import Typography from &#39;typography&#39;\nimport CodePlugin from &#39;typography-plugin-code&#39;\nimport Wordpress2016 from &#39;typography-theme-wordpress-2016&#39;\n\n// (中略)\n\n// プラグイン追加\nWordpress2016.plugins = [new CodePlugin()]</code></pre>\n      </div>\n<p>これで上記のようにインラインコードが見やすくなりました。</p>\n<h2>フォントを変更する</h2>\n<p>Typography.js は JavaScript のオブジェクト形式でコンフィグを指定することができます。\n<code class="language-text">typography-theme-wordpress-2016</code>もコンフィグ済みの JavaScript オブジェクトということになります。</p>\n<p>今回は日本語フォントに若干の違和感を感じたので以下のように修正しました。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">import Wordpress2016 from &#39;typography-theme-wordpress-2016&#39;\n\n// (中略)\n\n// ヘッダのフォントファミリー\nWordpress2016.headerFontFamily = [\n  &#39;Merriweather&#39;,\n  &#39;Georgia&#39;,\n  &#39;YuGothic&#39;,\n  &#39;sans-serif&#39;,\n]\n\n// 本文のフォントファミリー\nWordpress2016.bodyFontFamily = [\n  &#39;YuGothic&#39;,\n  &#39;sans-serif&#39;\n]</code></pre>\n      </div>\n<p><code class="language-text">typography-theme-wordpress-2016</code>以外にもたくさんのテーマが用意されているので、いろいろ試して気に入ったテーマの微修正を JavaScript オブジェクトからいじっていけば、CSS の辛さから逃れつつ美味しいとこだけ調整することができそうです。</p>',frontmatter:{title:"Gatsby Starter Blogで作成したブログのフォーマットをいじってみました",date:"August 19, 2018"}}},pathContext:{slug:"/edit-blog-format/",previous:{fields:{slug:"/create-blog-with-gatsbyjs/"},frontmatter:{title:"Gatsby.jsでブログを作成しました"}},next:null}}}});
//# sourceMappingURL=path---edit-blog-format-205e39ae9b4cbec5e55d.js.map