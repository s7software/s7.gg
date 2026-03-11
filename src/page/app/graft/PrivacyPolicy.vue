<template>
    <div class="space-y-6">
        <div class="space-y-2">
            <h1 class="text-3xl font-bold">Graft: Privacy Policy</h1>
            <p class="text-sm text-zinc-600">Effective Date: <span class="font-medium">10/03/2026</span></p>
        </div>
        
        <div class="p-6 border-2 rounded-lg border-black border-b-4 bg-white">
            <h2 class="text-xl font-semibold">Introduction</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                At Graft, we value your privacy and are committed to protecting your data. This Privacy Policy explains how we handle your information and your rights as a user. By using Graft, you agree to the practices described below.
            </p>
            
            <h2 class="text-xl font-semibold mt-6">Data Collection</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                Graft is designed to safeguard your privacy. Here’s an overview of how your data is handled:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li>
                    <strong>RevenueCat Integration:</strong> Graft uses <strong>RevenueCat</strong> to manage in-app purchases and subscriptions. RevenueCat may collect limited data, such as:
                    <ul class="mt-2 pl-6 list-disc">
                        <li>Subscription status (e.g., active or expired).</li>
                        <li>Anonymous app usage events related to purchases.</li>
                    </ul>
                    RevenueCat does not collect sensitive personal or financial information. For details, see <a href="https://www.revenuecat.com/privacy" target="_blank" class="text-primary underline">RevenueCat’s Privacy Policy</a>.
                </li>
                <li>
                    <strong>Anonymized Metadata via Apple Metrics:</strong> Graft may use Apple’s built-in metrics system to collect anonymized metadata, such as general app usage trends and performance data. This data does not identify individual users and is processed in compliance with Apple’s privacy guidelines.
                </li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Data Usage</h2>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>RevenueCat Data:</strong> Limited subscription-related data collected by RevenueCat is used to manage and support in-app purchases.</li>
                <li><strong>Apple Metrics Data:</strong> Anonymized metadata is used solely to improve app performance and user experience.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Third-Party Services</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                Graft integrates with the following third-party services to enhance functionality:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>RevenueCat</strong> for managing in-app purchases and subscriptions.</li>
                <li><strong>Apple’s Metrics System</strong> for collecting anonymized app performance data.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Security</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                We are committed to safeguarding your data:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li>All data entered into the app is stored securely on your device.</li>
                <li>RevenueCat and Apple Metrics comply with global privacy standards to ensure the safety of any data processed.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Your Rights</h2>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>Control Over Data:</strong> Data stored on your device can be managed or deleted directly via your device settings. Uninstalling Graft from your device will delete data stored on your device.</li>
                <li><strong>Manage Subscriptions:</strong> Subscriptions can be managed or canceled through your device’s App Store settings.</li>
                <li><strong>Transparency:</strong> For inquiries regarding subscription management or collected metadata, please contact us or RevenueCat.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Changes to This Privacy Policy</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                We may update this Privacy Policy to reflect changes in the app, integrations, or applicable laws. Please check this policy periodically for updates.
            </p>
            
            <h2 class="text-xl font-semibold mt-6">Contact Us</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:  
                <strong>Email:</strong> <a class="text-primary underline" href="mailto:josh@s7.gg">josh@s7.gg</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: 'Graft - Privacy Policy - S7',
    meta: [
        {
            name: 'description',
            content: 'Graft Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices. Your privacy is our priority.'
        },
        {
            name: 'keywords',
            content: 'Graft, privacy policy, data protection, iCloud storage, RevenueCat, finance app privacy'
        },
        {
            property: 'og:title',
            content: 'Graft - Privacy Policy - S7'
        },
        {
            property: 'og:description',
            content: 'Graft Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://s7.gg/app/Graft/privacy-policy'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:title',
            content: 'Graft - Privacy Policy - S7'
        },
        {
            name: 'twitter:description',
            content: 'Graft Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices.'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://s7.gg/app/Graft/privacy-policy'
        }
    ]
})
</script>