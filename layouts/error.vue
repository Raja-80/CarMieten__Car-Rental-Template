<template>
    <div class="container ">
		<div class="row">
			<div class="text-gray-50 text-center py-24 flex items-center flex-col">
				<div class="relative">
				<h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
					<span>{{ String(error.statusCode).split('').join(' ') }}</span></h1>
					<span class="my-4 text-primary font-semibold text-4xl">{{  }}</span>
				</div>
				<h5 class="text-primary font-semibold text-xl my-4"></h5>
				<a href="/cars" class="bg-primary inline-flex  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">Back To Booking Cars</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ['error'],
}
</script>
<style>
	.tracking-tighter-less {
		letter-spacing: -0.75rem;
	}
	.text-shadow {
        color: rgb(6, 6, 6);
		text-shadow: -8px 0 0 rgba(rgb(117, 113, 113),.8);
	}
</style>