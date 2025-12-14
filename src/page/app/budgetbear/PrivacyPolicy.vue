<template>
    <div class="space-y-6">
        <div class="space-y-2">
            <h1 class="text-3xl font-bold">BudgetBear: Privacy Policy</h1>
            <p class="text-sm text-zinc-600">Effective Date: <span class="font-medium">04/01/2025</span></p>
        </div>
        
        <div class="p-6 border-2 rounded-lg border-black border-b-4 bg-white">
            <h2 class="text-xl font-semibold">Introduction</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                At BudgetBear, we value your privacy and are committed to protecting your data. This Privacy Policy explains how we handle your information and your rights as a user. By using BudgetBear, you agree to the practices described below.
            </p>
            
            <h2 class="text-xl font-semibold mt-6">Data Collection</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                BudgetBear is designed to safeguard your privacy. Here’s an overview of how your data is handled:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li>
                    <strong>User Data Storage in iCloud:</strong> All data entered into BudgetBear, including transactions, categories, budgets, and settings, is securely stored in your personal <strong>iCloud account</strong>. iCloud ensures that your data is synced across your devices logged into the same Apple ID. BudgetBear does not store or access your data outside of iCloud.
                </li>
                <li>
                    <strong>RevenueCat Integration:</strong> BudgetBear uses <strong>RevenueCat</strong> to manage in-app purchases and subscriptions. RevenueCat may collect limited data, such as:
                    <ul class="mt-2 pl-6 list-disc">
                        <li>Subscription status (e.g., active or expired).</li>
                        <li>Anonymous app usage events related to purchases.</li>
                    </ul>
                    RevenueCat does not collect sensitive personal or financial information. For details, see <a href="https://www.revenuecat.com/privacy" target="_blank" class="text-primary underline">RevenueCat’s Privacy Policy</a>.
                </li>
                <li>
                    <strong>Anonymized Metadata via Apple Metrics:</strong> BudgetBear may use Apple’s built-in metrics system to collect anonymized metadata, such as general app usage trends and performance data. This data does not identify individual users and is processed in compliance with Apple’s privacy guidelines.
                </li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Data Usage</h2>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>iCloud Data:</strong> Your financial data is stored exclusively in your iCloud account and is not accessed or transmitted by BudgetBear or third parties.</li>
                <li><strong>RevenueCat Data:</strong> Limited subscription-related data collected by RevenueCat is used to manage and support in-app purchases.</li>
                <li><strong>Apple Metrics Data:</strong> Anonymized metadata is used solely to improve app performance and user experience.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Third-Party Services</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                BudgetBear integrates with the following third-party services to enhance functionality:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>iCloud</strong> for secure storage and syncing of user data.</li>
                <li><strong>RevenueCat</strong> for managing in-app purchases and subscriptions.</li>
                <li><strong>Apple’s Metrics System</strong> for collecting anonymized app performance data.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Security</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
                We are committed to safeguarding your data:
            </p>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li>Your financial data is securely stored in iCloud, leveraging Apple’s industry-leading security measures.</li>
                <li>RevenueCat and Apple Metrics comply with global privacy standards to ensure the safety of any data processed.</li>
            </ul>
            
            <h2 class="text-xl font-semibold mt-6">Your Rights</h2>
            <ul class="mt-4 space-y-3 text-zinc-600 leading-relaxed list-disc pl-6">
                <li><strong>Control Over Data:</strong> Data stored in iCloud can be managed or deleted directly via your iCloud account. Uninstalling BudgetBear from your device will not delete data stored in iCloud.</li>
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
    title: 'BudgetBear - Privacy Policy - S7',
    meta: [
        {
            name: 'description',
            content: 'BudgetBear Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices. Your privacy is our priority.'
        },
        {
            name: 'keywords',
            content: 'BudgetBear, privacy policy, data protection, iCloud storage, RevenueCat, finance app privacy'
        },
        {
            property: 'og:title',
            content: 'BudgetBear - Privacy Policy - S7'
        },
        {
            property: 'og:description',
            content: 'BudgetBear Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://s7.gg/app/budgetbear/privacy-policy'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:title',
            content: 'BudgetBear - Privacy Policy - S7'
        },
        {
            name: 'twitter:description',
            content: 'BudgetBear Privacy Policy - Learn how we protect your financial data with iCloud storage and secure practices.'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://s7.gg/app/budgetbear/privacy-policy'
        }
    ]
})
</script>