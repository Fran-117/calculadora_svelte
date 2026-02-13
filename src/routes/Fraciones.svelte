<script>
	import { Spring } from 'svelte/motion';
	import {sumar,restar,multiplicar,dividir} from './operaciones.js';

	let a= null
	let b= null
	let c= null
	let d= null

	let Resultado=null

</script>

<div class="Fracciones">
	<div class="frac1">
		<table>
			<thead>
				<tr>
					<td>FRACCIÓN 1</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table primary">
						<input type="number" placeholder="Numerador" bind:value={a} />
					</td>
				</tr>
				<tr>
					<td class="table secondary">
						<input type="number" placeholder="Denominador" bind:value={b} />
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="frac2">
		<table>
			<thead>
				<tr>
					<td>FRACCIÓN 2</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table primary">
						<input type="number" placeholder="Numerador" bind:value={c} />
					</td>
				</tr>
				<tr>
					<td class="table secondary">
						<input type="number" placeholder="Denominador" bind:value={d} />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="Operaciones">
	<h1>RESULTADO: {Resultado}</h1>
	<button on:click={()=>Resultado=sumar(a,b,c,d)}>SUMAR</button>
	<button on:click={()=>Resultado=restar(a,b,c,d)}>RESTAR</button>
	<button on:click={()=>Resultado=multiplicar(a,b,c,d)}>MULTIPLICAR</button>
	<button on:click={()=>Resultado=dividir(a,b,c,d)}>DIVIDIR</button>
</div>

<style>
	.Fracciones{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		margin-top: 5px;
	}

	.frac1 {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.frac2 {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}
	
</style>
