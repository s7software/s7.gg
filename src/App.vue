<template>
    <div class="min-h-screen">
        <div class="max-w-3xl mx-auto px-2">
            <Navigation />
            <div class="px-2">
                <RouterView :key="$route.fullPath" />
                <div class="py-4 text-xs text-zinc-500">&copy; S7.GG {{ new Date().getFullYear() }}</div>
            </div>
        </div>
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