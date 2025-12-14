<template>
    <div class="py-24 flex flex-col space-y-2 items-center justify-center">
        <h1 class="text-2xl font-semibold">Page Not Found</h1>
        <p class="text-zinc-400">The page that you requested could not be found.</p>
    </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: '404 - Page Not Found - S7',
    meta: [
        {
            name: 'description',
            content: 'The page you are looking for could not be found. Return to S7 homepage to explore our apps.'
        },
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ]
})
</script>