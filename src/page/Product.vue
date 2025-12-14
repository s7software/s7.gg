<template>
    <NotFound v-if="!app" />
    <div v-else class="space-y-6">
        <header class="bg-white border-2 border-black border-b-4 rounded-lg flex flex-col justify-between p-6 min-h-72 space-y-6">
            <div class="flex items-start justify-between">
                <img :src="app.icon" class="size-28 border-2 border-black border-b-4 rounded-lg bg-white">
                <div class="flex items-center gap-1">
                    <div v-for="platform in app.platforms" :key="platform" class="bg-orange-100 py-1 px-2 rounded-lg text-xs font-black tracking-widest border-2 border-b-4 border-black lowercase">{{ platform }}</div>
                    <div v-if="app.comingSoon" class="bg-red-200 py-1 px-2 rounded-lg text-xs font-black tracking-widest border-2 border-b-4 border-black lowercase">WIP</div>
                </div>
            </div>
            <h1 class="flex flex-col">
                <span class="font-black lowercase text-3xl md:text-5xl">{{ app.name }}</span>
                <span class="font-semibold text-sm lowercase mt-2">{{ app.description }}</span>
            </h1>
            <div v-if="app.ios || app.android || app.web || app.mac" class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                <Button v-if="app.ios" :href="app.ios" class="w-full sm:w-auto text-center">Download for iOS</Button>
                <Button v-if="app.android" :href="app.android" class="w-full sm:w-auto text-center">Download for Android</Button>
                <Button v-if="app.web" :href="app.web" class="w-full sm:w-auto text-center">Open Web App</Button>
                <Button v-if="app.mac && !app.mac.m && !app.mac.intel" :href="app.mac" class="w-full sm:w-auto text-center">Download for Mac</Button>
                <Button v-if="app.mac && app.mac.m" :href="app.mac.m" class="w-full sm:w-auto text-center whitespace-nowrap">Mac (Apple Silicon)</Button>
                <Button v-if="app.mac && app.mac.intel" :href="app.mac.intel" class="w-full sm:w-auto text-center whitespace-nowrap">Mac (Intel)</Button>
                <Button variant="success" v-if="app.license" :href="app.license" class="w-full sm:w-auto text-center">Buy License <span v-if="app.price">({{ app.price }})</span></Button>
            </div>
        </header>
        <div v-if="app.screenshots && app.screenshots.length" class="bg-white border-2 border-black border-b-4 rounded-lg">
            <div class="font-black text-2xl lowercase mb-4 p-6">Screenshots</div>
            <div class="overflow-x-auto pb-4">
                <div class="flex gap-4 w-max px-6 pb-6">
                    <div 
                        v-for="(screenshot, index) in app.screenshots" 
                        :key="index"
                        @click="openLightbox(index)"
                        class="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    >
                        <img 
                            :src="screenshot" 
                            :alt="`${app.name} screenshot ${index + 1}`"
                            class="h-96 w-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="app.features.length" class="grid md:grid-cols-2 gap-6">
            <div v-for="(feature, i) in app.features" :key="feature.title" :class="{'md:col-span-2': i == app.features.length - 1 && i % 2 == 0}" class="bg-white border-2 border-black border-b-4 rounded-lg p-6 flex flex-col items-start gap-4">
                <div :class="feature.background ? feature.background : 'bg-gray-100'" class="p-3 rounded-lg border-2 border-black border-b-4">
                    <component v-if="getIconComponent(feature.icon)" :is="getIconComponent(feature.icon)" class="size-8 text-black" />
                </div>
                <div>
                    <div class="font-black text-2xl lowercase">{{ feature.title }}.</div>
                    <div class="text-sm font-semibold lowercase">{{ feature.desc }}</div>
                </div>
            </div>
        </div>
        <div v-if="app.comingSoon" class="bg-white p-6 border-2 border-black border-b-4 rounded-lg">
            <div class="font-black text-2xl lowercase">Coming Soon</div>
            <div class="text-sm font-semibold lowercase">We're working hard to finish {{ app.name }}. Check back again later!</div>
        </div>

        <!-- Lightbox -->
        <Teleport to="body">
            <div 
                v-if="lightboxOpen" 
                @click="closeLightbox"
                class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            >
                <button 
                    @click="closeLightbox"
                    class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <component v-if="getIconComponent('x')" :is="getIconComponent('x')" class="size-8" />
                </button>
                <button 
                    v-if="currentScreenshotIndex > 0"
                    @click.stop="previousScreenshot"
                    class="absolute left-4 text-white hover:text-gray-300 transition-colors"
                >
                    <component v-if="getIconComponent('chevron-left')" :is="getIconComponent('chevron-left')" class="size-12" />
                </button>
                <button 
                    v-if="currentScreenshotIndex < app.screenshots.length - 1"
                    @click.stop="nextScreenshot"
                    class="absolute right-4 text-white hover:text-gray-300 transition-colors"
                >
                    <component v-if="getIconComponent('chevron-right')" :is="getIconComponent('chevron-right')" class="size-12" />
                </button>
                <img 
                    :src="app.screenshots[currentScreenshotIndex]" 
                    :alt="`${app.name} screenshot ${currentScreenshotIndex + 1}`"
                    class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                    @click.stop
                />
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold">
                    {{ currentScreenshotIndex + 1 }} / {{ app.screenshots.length }}
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import APPS from '@/static/apps.json';
import NotFound from './NotFound.vue';
import Button from '@/components/Button.vue';

const route = useRoute()
const app = ref(null)
const icons = ref([])
const lightboxOpen = ref(false)
const currentScreenshotIndex = ref(0)

const getIconComponent = (iconName) => {
    const icon = icons.value.find(i => i.name === iconName);
    return icon ? icon.component : null;
}

const openLightbox = (index) => {
    currentScreenshotIndex.value = index;
    lightboxOpen.value = true;
    document.body.style.overflow = 'hidden';
}

const closeLightbox = () => {
    lightboxOpen.value = false;
    document.body.style.overflow = '';
}

const nextScreenshot = () => {
    if (currentScreenshotIndex.value < app.value.screenshots.length - 1) {
        currentScreenshotIndex.value++;
    }
}

const previousScreenshot = () => {
    if (currentScreenshotIndex.value > 0) {
        currentScreenshotIndex.value--;
    }
}

const handleKeydown = (e) => {
    if (!lightboxOpen.value) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') previousScreenshot();
    if (e.key === 'ArrowRight') nextScreenshot();
}

const loadIcon = async (iconName) => {
    const pascalCase = iconName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    
    try {
        const module = await import('lucide-vue-next');
        if (module[pascalCase]) {
            icons.value.push({ name: iconName, component: module[pascalCase] });
        }
    } catch (error) {
        console.error(`Failed to load icon: ${iconName}`, error);
    }
}

const pageTitle = computed(() => app.value ? `${app.value.name} - S7` : 'App - S7')
const pageDescription = computed(() => app.value ? app.value.description : 'Discover our powerful apps at S7')
const pageUrl = computed(() => `https://s7.gg/app/${route.params.id}`)
const appKeywords = computed(() => {
    if (!app.value) return 'S7, apps';
    const platforms = app.value.platforms?.join(', ') || '';
    return `${app.value.name}, S7, ${platforms}, ${app.value.shortDesc}`;
})

useHead(() => ({
    title: pageTitle.value,
    meta: [
        {
            name: 'description',
            content: pageDescription.value
        },
        {
            name: 'keywords',
            content: appKeywords.value
        },
        {
            property: 'og:title',
            content: pageTitle.value
        },
        {
            property: 'og:description',
            content: pageDescription.value
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: pageUrl.value
        },
        {
            property: 'og:image',
            content: app.value?.icon ? `https://s7.gg${app.value.icon}` : 'https://s7.gg/logo.png'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: pageTitle.value
        },
        {
            name: 'twitter:description',
            content: pageDescription.value
        },
        {
            name: 'twitter:image',
            content: app.value?.icon ? `https://s7.gg${app.value.icon}` : 'https://s7.gg/logo.png'
        },
        ...(app.value?.price ? [{
            property: 'product:price:amount',
            content: app.value.price.replace('$', '')
        }, {
            property: 'product:price:currency',
            content: 'USD'
        }] : [])
    ],
    link: [
        {
            rel: 'canonical',
            href: pageUrl.value
        }
    ]
}))

onMounted(async () => {
    const appId = route.params.id;
    app.value = APPS.find(a => a.id === appId);

    await Promise.all(['smartphone', 'laptop', 'globe'].map(icon => loadIcon(icon)));
    await Promise.all(['x', 'chevron-left', 'chevron-right'].map(icon => loadIcon(icon)));

    if (app.value && app.value.features) {
        await Promise.all(
            app.value.features.map(feature => loadIcon(feature.icon))
        );
    }

    window.addEventListener('keydown', handleKeydown);
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
})
</script>