<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Calculadora Svelte</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Bienvenido, escribe unos numeros y selecciona una operación</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
