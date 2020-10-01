webpackJsonp([0x9641dad08231],{394:function(e,t){e.exports={data:{eng:{html:'<helmet>\n<title> Profile - Avatars</title>\n</helmet>\n<h2>Avatar Resource Server</h2>\n<p>The Profile as a Service leverages <a href="https://github.com/chrisiaut/pictshare">PictShare</a> which is a multi-lingual, Open Source image-hosting application with a simple resizing and upload API for the hosting of profile avatar images.  PictShare is licensed under the <a href="https://github.com/chrisiaut/pictshare/blob/master/LICENSE">Apache-2.0 License</a></p>\n<h3>Features</h3>\n<ul>\n<li>Simple API to upload any image from remote servers to your instance</li>\n<li>100% file based - no database needed</li>\n<li>Simple album functions with embedding support</li>\n<li>Converts gif to (much smaller) MP4</li>\n<li>MP4 resizing</li>\n<li>PictShare removes all exif data so you can upload photos from your phone and all GPS tags and camera model info get wiped</li>\n<li>Smart <a href="#smart-query-system">resize, filter and rotation</a> features</li>\n<li>Duplicates don\'t take up space. If the exact same images is uploaded twice, the second upload will link to the first</li>\n<li>Detailed traffic and view statistics of your images via <a href="https://github.com/chrisiaut/pictshare_stats">Pictshare stats</a></li>\n</ul>\n<h3>Smart query system</h3>\n<p>PictShare images can be changed after upload just by modifying the URL. It works like this:</p>\n<p><code class="language-text">https://base.domain/&lt;options&gt;/&lt;image&gt;</code></p>\n<p>For example: <code class="language-text">https://avatar.gccollab.ca/100x100/negative/b260e36b60.jpg</code> will show you the uploaded Image <code class="language-text">b260e36b60.jpg</code> but resize it to 100x100 pixels and apply the "negative" filter. The original image on the resource server will stay untouched.</p>\n<h3>Available options</h3>\n<p>Original URL: <code class="language-text">https://www.pictshare.net/b260e36b60.jpg</code></p>\n<p>Note: If an option needs a value it works like this: <code class="language-text">optionname_value</code>. Eg: <code class="language-text">pixelate_10</code>\nIf there is an option requested that\'s not recognized by PictShare it\'s simply ignored, so this will work: <a href="https://www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg">https://www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg</a> and also even this will work: <a href="https://www.pictshare.net/b260e36b60.jpg/how-can-this-still/work/">https://www.pictshare.net/b260e36b60.jpg/how-can-this-still/work/</a></p>\n<h4>Resizing</h4>\n<table>\n<thead>\n<tr>\n<th align="center">Option</th>\n<th align="center">Parameter</th>\n<th align="left">Example URL</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><width>\nx\n<height></td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/20x20/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">forcecesize</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/100x400/forcesize/b260e36b60.jpg</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Rotating</h4>\n<table>\n<thead>\n<tr>\n<th align="center">Option</th>\n<th align="center">Parameter</th>\n<th align="left">Example URL</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">left</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/left/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">right</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/right/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">upside</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/upside/b260e36b60.jpg</code></td>\n</tr>\n</tbody>\n</table>\n<h4>Filters</h4>\n<table>\n<thead>\n<tr>\n<th align="center">Option</th>\n<th align="center">Parameter</th>\n<th align="left">Example URL</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">negative</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/negative/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">grayscale</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/grayscale/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">brightness</td>\n<td align="center">-255 to 255</td>\n<td align="left"><code class="language-text">https://pictshare.net/brightness_100/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">edgedetect</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/edgedetect/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">smooth</td>\n<td align="center">-10 to 2048</td>\n<td align="left"><code class="language-text">https://pictshare.net/smooth_3/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">contrast</td>\n<td align="center">-100 to 100</td>\n<td align="left"><code class="language-text">https://pictshare.net/contrast_40/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">pixelate</td>\n<td align="center">0 to 100</td>\n<td align="left"><code class="language-text">https://pictshare.net/pixelate_10/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">blur</td>\n<td align="center">-none- or 0 to 5</td>\n<td align="left"><code class="language-text">https://pictshare.net/blur/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">sepia</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/sepia/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">sharpen</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/sharpen/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">emboss</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/emboss/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">cool</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/cool/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">light</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/light/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">aqua</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/aqua/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">fuzzy</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/fuzzy/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">boost</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/boost/b260e36b60.jpg</code></td>\n</tr>\n<tr>\n<td align="center">gray</td>\n<td align="center">-none-</td>\n<td align="left"><code class="language-text">https://pictshare.net/gray/b260e36b60.jpg</code></td>\n</tr>\n</tbody>\n</table>\n<p>You can also combine as many options as you want. Even multiple times! Want your image to be negative, resized, grayscale , with increased brightness and negate it again? No problem: <code class="language-text">https://pictshare.net/500x500/grayscale/negative/brightness_100/negative/b260e36b60.jpg</code></p>\n<h3>Security and privacy</h3>\n<ul>\n<li>No exif data is stored on the server, all JPGs get cleaned on upload</li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"helmet",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"title",properties:{},children:[{type:"text",value:" Profile - Avatars"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Avatar Resource Server"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The Profile as a Service leverages "},{type:"element",tagName:"a",properties:{href:"https://github.com/chrisiaut/pictshare"},children:[{type:"text",value:"PictShare"}]},{type:"text",value:" which is a multi-lingual, Open Source image-hosting application with a simple resizing and upload API for the hosting of profile avatar images.  PictShare is licensed under the "},{type:"element",tagName:"a",properties:{href:"https://github.com/chrisiaut/pictshare/blob/master/LICENSE"},children:[{type:"text",value:"Apache-2.0 License"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Features"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Simple API to upload any image from remote servers to your instance"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"100% file based - no database needed"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Simple album functions with embedding support"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Converts gif to (much smaller) MP4"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"MP4 resizing"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"PictShare removes all exif data so you can upload photos from your phone and all GPS tags and camera model info get wiped"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Smart "},{type:"element",tagName:"a",properties:{href:"#smart-query-system"},children:[{type:"text",value:"resize, filter and rotation"}]},{type:"text",value:" features"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Duplicates don't take up space. If the exact same images is uploaded twice, the second upload will link to the first"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Detailed traffic and view statistics of your images via "},{type:"element",tagName:"a",properties:{href:"https://github.com/chrisiaut/pictshare_stats"},children:[{type:"text",value:"Pictshare stats"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Smart query system"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"PictShare images can be changed after upload just by modifying the URL. It works like this:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://base.domain/<options>/<image>"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For example: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://avatar.gccollab.ca/100x100/negative/b260e36b60.jpg"}]},{type:"text",value:" will show you the uploaded Image "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"b260e36b60.jpg"}]},{type:"text",value:' but resize it to 100x100 pixels and apply the "negative" filter. The original image on the resource server will stay untouched.'}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Available options"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Original URL: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://www.pictshare.net/b260e36b60.jpg"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Note: If an option needs a value it works like this: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"optionname_value"}]},{type:"text",value:". Eg: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"pixelate_10"}]},{type:"text",value:"\nIf there is an option requested that's not recognized by PictShare it's simply ignored, so this will work: "},{type:"element",tagName:"a",properties:{href:"https://www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg"},children:[{type:"text",value:"https://www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg"}]},{type:"text",value:" and also even this will work: "},{type:"element",tagName:"a",properties:{href:"https://www.pictshare.net/b260e36b60.jpg/how-can-this-still/work/"},children:[{type:"text",value:"https://www.pictshare.net/b260e36b60.jpg/how-can-this-still/work/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Resizing"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Option"}]},{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Parameter"}]},{type:"element",tagName:"th",properties:{align:"left"},children:[{type:"text",value:"Example URL"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"element",tagName:"width",properties:{},children:[{type:"text",value:"\nx\n"},{type:"element",tagName:"height",properties:{},children:[]}]}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/20x20/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"forcecesize"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/100x400/forcesize/b260e36b60.jpg"}]}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Rotating"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Option"}]},{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Parameter"}]},{type:"element",tagName:"th",properties:{align:"left"},children:[{type:"text",value:"Example URL"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"left"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/left/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"right"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/right/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"upside"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/upside/b260e36b60.jpg"}]}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Filters"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Option"}]},{type:"element",tagName:"th",properties:{align:"center"},children:[{type:"text",value:"Parameter"}]},{type:"element",tagName:"th",properties:{align:"left"},children:[{type:"text",value:"Example URL"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"negative"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/negative/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"grayscale"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/grayscale/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"brightness"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-255 to 255"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/brightness_100/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"edgedetect"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/edgedetect/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"smooth"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-10 to 2048"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/smooth_3/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"contrast"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-100 to 100"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/contrast_40/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"pixelate"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"0 to 100"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/pixelate_10/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"blur"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none- or 0 to 5"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/blur/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"sepia"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/sepia/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"sharpen"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/sharpen/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"emboss"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/emboss/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"cool"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/cool/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"light"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/light/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"aqua"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/aqua/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"fuzzy"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/fuzzy/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"boost"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/boost/b260e36b60.jpg"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"gray"}]},{type:"element",tagName:"td",properties:{align:"center"},children:[{type:"text",value:"-none-"}]},{type:"element",tagName:"td",properties:{align:"left"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/gray/b260e36b60.jpg"}]}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can also combine as many options as you want. Even multiple times! Want your image to be negative, resized, grayscale , with increased brightness and negate it again? No problem: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"https://pictshare.net/500x500/grayscale/negative/brightness_100/negative/b260e36b60.jpg"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Security and privacy"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"No exif data is stored on the server, all JPGs get cleaned on upload"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"en"}},fr:{html:"<helmet>\n<title> Profil - Avatars</title>\n</helmet>\n<h2>Traductions françaises à venir</h2>",htmlAst:{type:"root",children:[{type:"element",tagName:"helmet",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"title",properties:{},children:[{type:"text",value:" Profil - Avatars"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Traductions françaises à venir"}]}],data:{quirksMode:!1}},frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"fr"}},overview:{totalCount:2,edges:[{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"en",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"fr",subnav:"1/About/À notre sujet/1"}}}]},architecture:{totalCount:6,edges:[{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"fr",subnav:"0/Architecture/Architecture/1"}}},{node:{frontmatter:{title:"Underlying Technology",path:"/architecture/underlying_technology",lang:"en",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"Technologie sous-jacente",path:"/architecture/underlying_technology",lang:"fr",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"System Architecture",path:"/architecture/system_design",lang:"en",subnav:"0/Architecture/Architecture/3"}}},{node:{frontmatter:{title:"Integrations",path:"/architecture/integrations",lang:"en",subnav:"0/Architecture/Architecture/4"}}},{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"en",subnav:"0/Architecture/Architecutre/1"}}}]},identity:null,profile:{totalCount:16,edges:[{node:{frontmatter:{title:"Introduction",path:"/profile/introduction",lang:"en",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Quick Start",path:"/profile/quick-start",lang:"en",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Introduction",path:"/profile/introduction",lang:"fr",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Quick Start (Translate)",path:"/profile/quick-start",lang:"fr",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Data Models",path:"/profile/data-models",lang:"en",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"modèles de données",path:"/profile/data-models",lang:"fr",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"Retrieving Data",path:"/profile/queries",lang:"en",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Récupération des données",path:"/profile/queries",lang:"fr",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Modifying Data",path:"/profile/mutations",lang:"en",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Modifications des données",path:"/profile/mutations",lang:"fr",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"en",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"fr",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Business Logic",path:"/profile/logic",lang:"en",subnav:"1/Profile/Profil/6"}}},{node:{frontmatter:{title:"logique d'entreprise",path:"/profile/logic",lang:"fr",subnav:"1/Profile/Profil/6"}}},{node:{frontmatter:{title:"Use Cases",path:"/profile/usecases",lang:"en",subnav:"1/Profile/Profil/7"}}},{node:{frontmatter:{title:"Use Cases",path:"/profile/usecases",lang:"fr",subnav:"1/Profile/Profil/7"}}}]},notifications:{totalCount:8,edges:[{node:{frontmatter:{title:"Introduction",path:"/notifications/introduction",lang:"en",subnav:"1/Notifications/Notifications/1"}}},{node:{frontmatter:{title:"Introduction",path:"/notifications/introduction",lang:"fr",subnav:"1/Notifications/Notifications/1"}}},{node:{frontmatter:{title:"Data Models",path:"/notifications/data-models",lang:"en",subnav:"1/Notifications/Notifications/2"}}},{node:{frontmatter:{title:"modèles de données",path:"/notifications/data-models",lang:"fr",subnav:"1/Notifications/Notifications/2"}}},{node:{frontmatter:{title:"Retrieving Data",path:"/notifications/queries",lang:"en",subnav:"1/Notifications/Notifications/3"}}},{node:{frontmatter:{title:"Récupération des données",path:"/notifications/queries",lang:"fr",subnav:"1/Notifications/Notifications/3"}}},{node:{frontmatter:{title:"Modifying Data",path:"/notifications/mutations",lang:"en",subnav:"1/Notifications/Notifications/4"}}},{node:{frontmatter:{title:"Modifications des données",path:"/notifications/mutations",lang:"fr",subnav:"1/Notifications/Notifications/4"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---profile-avatars-53af899b698e3dfbbd6c.js.map