<script>
	import { Spring } from 'svelte/motion';
	import {sumar,restar,multiplicar,dividir} from './operaciones.js';

	let a= null
	let b= null
	let c= null
	let d= null

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
						<input type="number" placeholder="numerador" bind:value={a} />
					</td>
				</tr>
				<tr>
					<td class="table secondary">
						<input type="number" placeholder="denominador" bind:value={b} />
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
						<input type="number" placeholder="numerador" bind:value={c} />
					</td>
				</tr>
				<tr>
					<td class="table secondary">
						<input type="number" placeholder="denominador" bind:value={d} />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
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
