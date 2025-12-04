<template>
    <div class="max-w-4xl mx-auto p-6 space-y-6">
        <Navigation />
        <RouterView :key="$route.fullPath" />
        <div class="py-4 text-xs text-zinc-500">&copy; S7.GG {{ new Date().getFullYear() }}</div>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
    components: {
        Navigation
    }
}
</script>