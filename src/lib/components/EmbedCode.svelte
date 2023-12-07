<script lang="ts">
	import { page } from '$app/stores';
	export let formId: string;
	export let paymentType: string;
	const src = `${$page.url.origin}/forms/${formId}/${paymentType}`;
</script>

<pre class="m-0"><code class="whitespace-break-spaces"
		>&lt;iframe id=formFrame src={src} sandbox=&quot;allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation&quot; frameborder=0 scrolling=&quot;no&quot; style=&quot;width:100%;border:none&quot;&gt;&lt;/iframe&gt;&lt;script&gt;window.addEventListener('message', (event) =&gt; &lbrace;if (event.data &amp;&amp; event.data.type === 'adjustHeight') &lbrace;const iframe = document.getElementById('formFrame');if (iframe) &lbrace;iframe.style.height = `$&lbrace;event.data.height&rbrace;px`;&rbrace;&rbrace;&rbrace;);&lt;/script&gt;</code
	></pre>
