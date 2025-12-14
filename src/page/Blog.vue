<template>
    <header class="bg-white border-2 border-black border-b-4 rounded-lg flex flex-col justify-end p-6">
        <h1 class="flex flex-col">
            <span class="font-black lowercase text-3xl md:text-5xl">Blog</span>
            <span class="font-semibold text-sm lowercase">Posts about new products, product updates and what's next.</span>
        </h1>
    </header>
    <BlogPostCollection class="mt-6" />
</template>

<script setup>
import { useHead } from '@unhead/vue'
import BlogPostCollection from '@/components/BlogPostCollection.vue';

useHead({
    title: 'Blog - S7',
    meta: [
        {
            name: 'description',
            content: 'Read the latest posts about new products, product updates and what\'s next from S7. Stay updated with our app development journey and feature announcements.'
        },
        {
            name: 'keywords',
            content: 'S7 blog, app updates, product announcements, BudgetBear updates, MyMenu news, Pulse updates, app development'
        },
        {
            property: 'og:title',
            content: 'Blog - S7'
        },
        {
            property: 'og:description',
            content: 'Read the latest posts about new products, product updates and what\'s next from S7.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://s7.gg/blog'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:title',
            content: 'Blog - S7'
        },
        {
            name: 'twitter:description',
            content: 'Read the latest posts about new products, product updates and what\'s next from S7.'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://s7.gg/blog'
        }
    ]
})
</script>