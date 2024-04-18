<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import PasswordGenerator from '@/password-generator/PasswordGenerator.vue'

</script>

<template>
    <NMessageProvider placement="bottom">
        <PasswordGenerator />
    </NMessageProvider>
</template>

<style lang="scss" scoped></style>