<script>
	import { page } from '$app/stores';
</script>

<div
	class="prose block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<div class="mb-4 flex justify-between">
		<h2>Default Form</h2>
		<a href={`${$page.url.origin}/default`}> <span>View</span></a>
	</div>
	<h4 class="m-0">Embed code</h4>
	<p class="m-0">
		Copy and paste this HTML code snippet on the page where you want the embed to appear.
	</p>
	<pre class="m-0">
        <code class="whitespace-break-spaces">
&lt;iframe id=formFrame src={$page.url
				.origin}/default sandbox="allow-same-origin allow-scripts allow-popups allow-forms" frameborder=0 scrolling="no" style="width:100%;border:none"&gt;&lt;/iframe&gt;&lt;script&gt;function adjustHeight(e)&lbrace;const t=document.getElementById("formFrame");t&&(t.style.height=`$&lbrace;e&rbrace;px`)&rbrace;function sendMessageToParent()&lbrace;const e=document.body.scrollHeight+45;window.parent.postMessage(&lbrace;type:"adjustHeight",height:e&rbrace;,"*")&rbrace;document.addEventListener("DOMContentLoaded",(()=&gt;&lbrace;window.addEventListener("message",(e=&gt;&lbrace;e.data&&"adjustHeight"===e.data.type&&adjustHeight(e.data.height)&rbrace;)),sendMessageToParent()&rbrace;))&lt;/script&gt;
            </code>
      </pre>
</div>
