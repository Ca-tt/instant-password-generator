<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import PasswordGenerator from '@/PasswordGenerator.vue'

const modalLimit = 2
</script>

<template>
    <NMessageProvider placement="bottom" :max="modalLimit">
        <PasswordGenerator />
    </NMessageProvider>
</template>

<style lang="scss" scoped></style>