<template>
	<div class="marginTop"/>
	<div class="border myBorder">
		<MyName/>
		<MyTabs/>
	</div>
</template>

<script>
import MyTabs from './MyTabs.vue';
import MyName from './MyName.vue';

export default {
  name: 'MyBorder',
  components: {
    MyName,
    MyTabs,
  }
}
</script>
<style scoped>
	.myBorder {
		height: 90vh;
		margin: 0vh 5vh;
		padding: 5vh;
	}
	.marginTop {
		height: 5vh;
	}
	.border {
		border-color: #463440!important;
	}
</style>