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
                : variantClasses
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
            validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].includes(value)
        }
    },
    computed: {
        variantClasses() {
            const variants = {
                primary: 'bg-orange-200 hover:bg-orange-100 active:translate-y-0.5 active:border-b-2',
                secondary: 'bg-white hover:bg-gray-50 active:translate-y-0.5 active:border-b-2',
                success: 'bg-green-200 hover:bg-green-100 active:translate-y-0.5 active:border-b-2',
                danger: 'bg-red-200 hover:bg-red-100 active:translate-y-0.5 active:border-b-2',
                warning: 'bg-yellow-200 hover:bg-yellow-100 active:translate-y-0.5 active:border-b-2',
                info: 'bg-blue-200 hover:bg-blue-100 active:translate-y-0.5 active:border-b-2'
            };
            return variants[this.variant] || variants.primary;
        }
    }
}
</script>
