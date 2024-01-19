<template>
    <div class="w-full">
        <div class="flex items-center h-2 bg-gray-500 rounded-md relative range">
            <div class="absolute top-0 range-width h-3"
                :style="`left:${minVal * 100 / max}%;width:${(maxVal - minVal) * 100 / max}%`"></div>
            <input class="min w-full h-2 absolute top-0 left-0 appearance-none bg-transparent" type="range" v-model="minVal"
                :min="min" :max="max" @change="setParams($event, 'price.salePrice-from')">
            <input class="max w-full h-2 absolute top-0 left-0 appearance-none bg-transparent" type="range" v-model="maxVal"
                :min="min" :max="max" @change="setParams($event, 'price.salePrice-to')">
        </div>
        <div class="flex justify-between m-1 mt-5">
            <p class="text-black font-normal text-sm">{{ minVal }}</p>
            <p class="text-black font-normal text-sm">{{ maxVal }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 }
    },
    watch: {
        minVal: function (val) {
            if (Number(val) > Number(this.maxVal)) {
                this.minVal = this.maxVal;
            }
        },
        maxVal: function (val) {
            if (Number(val) < Number(this.minVal)) {
                this.maxVal = this.minVal;
            }
        }
    },
    data() {
        return {
            minVal: this.min,
            maxVal: this.max
        }
    },
    methods: {
        setParams(event, key) {
            this.$emit('change', event, key);
        }
    },
}
</script>

<style>
.range input::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    z-index: 4;
    cursor: pointer;
    background: rgb(202, 36, 36);
    border: 3px solid white;
    border-radius: 100%;
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.2);
}

.range input.min::-webkit-slider-thumb {
    right: 5px;
}

.range input.max::-webkit-slider-thumb {
    left: 5px;
}

.range .range-width {
    background-color: rgb(rgb(202, 36, 36), 0.6);
}
</style>