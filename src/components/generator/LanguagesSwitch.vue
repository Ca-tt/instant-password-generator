<script setup lang="ts">
import { NTabs, NTab } from 'naive-ui'
import { siteLanguage } from '@ts/SiteLanguage'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()


/** language tab click handler */
function updateLanguage(newLanguage: string) {
    siteLanguage.activeLanguage = newLanguage
    router.push(`/${newLanguage}`)
}
</script>

<template>
    <!-- 
        code - language short code
        name - language full name
    -->
    <section class="languages">
        <NTabs type="segment" :default-value="siteLanguage.defaultLanguage" size="small" @update:value="updateLanguage"
            animated v-model:value="siteLanguage.activeLanguage">
            <NTab v-for="language in siteLanguage.supportedLanguages" :key="language.name" :name="language.code"
                :tab="language.name" />
        </NTabs>
    </section>

</template>

<style lang="scss">
@import '@scss/settings/media.scss';

.languages,
.n-tabs-rail {
    overflow-y: auto;
}

/* у вкладочки есть обёртка с размером */
.n-tabs .n-tabs-rail .n-tabs-tab-wrapper {
    flex-basis: 33.33%;
    background: var(--n-color-segment);

    @include mobile-large {
        flex-basis: 25%;
    }

    @include tablet {
        flex-basis: 20%;
    }

    @include desktop {
        flex-basis: auto;
    }
}
</style>