<template>
    <NotFound v-if="!app" />
    <div v-else class="space-y-6">
        <header class="bg-white border-2 border-black border-b-4 rounded-lg flex flex-col justify-between p-6 min-h-72">
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
        </header>
        <div v-if="app.ios || app.mac || app.web || app.android" class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-black border-b-4" :class="app.ios ? 'bg-white' : 'bg-zinc-200'">
                <component v-if="getIconComponent('smartphone')" :is="getIconComponent('smartphone')" class="size-8" />
                <div class="font-black text-lg lowercase text-center">iOS</div>
                <Button :href="app.ios" :disabled="!app.ios">
                    {{ app.ios ? 'Download' : 'Not Available' }}
                </Button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-black border-b-4" :class="app.mac ? 'bg-white' : 'bg-zinc-200'">
                <component v-if="getIconComponent('laptop')" :is="getIconComponent('laptop')" class="size-8" />
                <div class="font-black text-lg lowercase text-center">MacOS</div>
                <Button :href="app.mac" :disabled="!app.mac">
                    {{ app.mac ? 'Download' : 'Not Available' }}
                </Button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-black border-b-4" :class="app.web ? 'bg-white' : 'bg-zinc-200'">
                <component v-if="getIconComponent('globe')" :is="getIconComponent('globe')" class="size-8" />
                <div class="font-black text-lg lowercase text-center">Web</div>
                <Button :href="app.web" :disabled="!app.web">
                    {{ app.web ? 'Open' : 'Not Available' }}
                </Button>
            </div>
            <div class="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-black border-b-4" :class="app.android ? 'bg-white' : 'bg-zinc-200'">
                <component v-if="getIconComponent('smartphone')" :is="getIconComponent('smartphone')" class="size-8" />
                <div class="font-black text-lg lowercase text-center">Android</div>
                <Button :href="app.android" :disabled="!app.android">
                    {{ app.android ? 'Download' : 'Not Available' }}
                </Button>
            </div>
        </div>
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

<script>
import APPS from '@/static/apps.json';
import NotFound from './NotFound.vue';
import Button from '@/components/Button.vue';

export default {
    components: {
        NotFound,
        Button
    },
    data() {
        return {
            app: null,
            icons: [],
            lightboxOpen: false,
            currentScreenshotIndex: 0
        }
    },
    methods: {
        getIconComponent(iconName) {
            const icon = this.icons.find(i => i.name === iconName);
            return icon ? icon.component : null;
        },
        openLightbox(index) {
            this.currentScreenshotIndex = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = '';
        },
        nextScreenshot() {
            if (this.currentScreenshotIndex < this.app.screenshots.length - 1) {
                this.currentScreenshotIndex++;
            }
        },
        previousScreenshot() {
            if (this.currentScreenshotIndex > 0) {
                this.currentScreenshotIndex--;
            }
        },
        handleKeydown(e) {
            if (!this.lightboxOpen) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.previousScreenshot();
            if (e.key === 'ArrowRight') this.nextScreenshot();
        },
        async loadIcon(iconName) {
            // Convert kebab-case to PascalCase (e.g., 'calendar-days' -> 'CalendarDays')
            const pascalCase = iconName
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join('');
            
            try {
                const module = await import('lucide-vue-next');
                if (module[pascalCase]) {
                    this.icons.push({ name: iconName, component: module[pascalCase] });
                }
            } catch (error) {
                console.error(`Failed to load icon: ${iconName}`, error);
            }
        }
    },
    async mounted() {
        const appId = this.$route.params.id;
        this.app = APPS.find(a => a.id === appId);
        
        document.title = `${this.app ? this.app.name : 'App Not Found'} - S7`;

        await Promise.all(['smartphone', 'laptop', 'globe'].map(icon => this.loadIcon(icon)));
        await Promise.all(['x', 'chevron-left', 'chevron-right'].map(icon => this.loadIcon(icon)));

        if (this.app && this.app.features) {
            await Promise.all(
                this.app.features.map(feature => this.loadIcon(feature.icon))
            );
        }

        window.addEventListener('keydown', this.handleKeydown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
        document.body.style.overflow = '';
    }
}
</script>