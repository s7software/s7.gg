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
        <div v-if="app.features.length" class="grid md:grid-cols-2 gap-6">
            <div v-for="(feature, i) in app.features" :key="feature.title" :class="{'col-span-2': i == app.features.length - 1 && i % 2 == 0}" class="bg-white border-2 border-black border-b-4 rounded-lg p-6 flex flex-col items-start gap-4">
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
            icons: []
        }
    },
    methods: {
        getIconComponent(iconName) {
            const icon = this.icons.find(i => i.name === iconName);
            return icon ? icon.component : null;
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

        // Load platform icons
        const platformIcons = ['smartphone', 'laptop', 'globe'];
        await Promise.all(platformIcons.map(icon => this.loadIcon(icon)));

        // Load feature icons
        if (this.app && this.app.features) {
            await Promise.all(
                this.app.features.map(feature => this.loadIcon(feature.icon))
            );
        }
    }
}
</script>