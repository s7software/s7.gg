<template>
    <nav class="flex items-center gap-2">
        <RouterLink :to="{name: 'home'}" class="bg-white border-2 border-black rounded-lg border-b-4 h-12 flex items-center justify-between hover:bg-orange-100 transition-colors duration-300">
            <img src="/logo.png" class="h-8 px-1.5 invert" />
        </RouterLink>
        <div class="bg-white border-2 border-black rounded-lg border-b-4 h-12 flex items-center justify-center md:justify-end px-3 flex-1">
            <div class="flex items-center gap-6">
                <RouterLink :to="{name: 'blog'}" class="text-sm font-bold hover:text-orange-700 transition-colors">blog</RouterLink>
                <a href="https://github.com/s7software" target="_blank" class="text-sm font-bold hover:text-orange-700 transition-colors">github</a>
                <a href="mailto:josh@s7.gg" class="text-sm font-bold hover:text-orange-700 transition-colors">email</a>
            </div>
        </div>
    </nav>
</template>