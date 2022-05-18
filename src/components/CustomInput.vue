<template>
    <div>
        <span>{{label}}</span>
        <input type="text" v-bind="$attrs" @input="(e) => $emit('update:modelValue', e.target.value)" />
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>