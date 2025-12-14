<template>
    <div class="max-w-4xl mx-auto p-6 space-y-6">
        <Navigation />
        <RouterView :key="$route.fullPath" />
        <div class="grid grid-cols-12 gap-2">
            <div class="bg-red-100 border-2 border-black border-b-4 rounded-lg h-8 col-span-4"></div>
            <div class="bg-green-100 border-2 border-black border-b-4 rounded-lg h-8 col-span-2"></div>
            <div class="bg-blue-100 border-2 border-black border-b-4 rounded-lg h-8 col-span-2"></div>
            <div class="bg-yellow-100 border-2 border-black border-b-4 rounded-lg h-8 col-span-3"></div>
            <div class="bg-purple-100 border-2 border-black border-b-4 rounded-lg h-8 col-span-1"></div>
        </div>
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