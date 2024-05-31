<template>
	<div>
		<p>{{message}}</p>
		<p>Counter: {{counter}}</p>
		<button @click="increment">Increment</button>
		<p v-if="counter >= 5"> You've reached 5 or more!</p>
		<ul>
			<li v-for="number in numbers" :key="number">{{number}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Hello, Vue!',
				counter: 0,
				numbers: [1, 2, 3, 4, 5]
			};
		},
		methods: {
			increment() {
				this.counter++;
			}
		}
	};
</script>