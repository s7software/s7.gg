<template>
    <component 
        :is="href ? 'a' : 'button'" 
        :href="href"
        :target="href ? '_blank' : undefined"
        :disabled="disabled"
        :class="[
            'font-bold px-6 py-2 border-2 border-black border-b-4 rounded-lg transition-all duration-300 lowercase',
            disabled 
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                : variant === 'primary' 
                    ? 'bg-orange-200 hover:bg-orange-100 active:translate-y-0.5 active:border-b-2' 
                    : 'bg-white hover:bg-gray-50 active:translate-y-0.5 active:border-b-2'
        ]"
    >
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary'].includes(value)
        }
    }
}
</script>
