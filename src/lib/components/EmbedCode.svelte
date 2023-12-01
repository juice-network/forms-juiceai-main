<script lang="ts">
	import { page } from '$app/stores';
	export let formId: string;
	const src = `${$page.url.origin}/forms/${formId}`;
</script>

<pre class="m-0"><code class="whitespace-break-spaces"
		>&lt;iframe id=formFrame src={src} sandbox="allow-same-origin allow-scripts allow-popups allow-forms" frameborder=0 scrolling="no" style="width:100%;border:none"&gt;&lt;/iframe&gt;&lt;script&gt;function adjustHeight(e)&lbrace;const t=document.getElementById("formFrame");t&&(t.style.height=`$&lbrace;e&rbrace;px`)&rbrace;function sendMessageToParent()&lbrace;const e=document.body.scrollHeight+150;window.parent.postMessage(&lbrace;type:"adjustHeight",height:e&rbrace;,"*")&rbrace;document.addEventListener("DOMContentLoaded",(()=&gt;&lbrace;window.addEventListener("message",(e=&gt;&lbrace;e.data&&"adjustHeight"===e.data.type&&adjustHeight(e.data.height)&rbrace;)),sendMessageToParent()&rbrace;))&lt;/script&gt;</code
	></pre>
