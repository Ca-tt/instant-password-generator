<script setup lang="ts">
import PasswordGenerator from "#/PasswordGenerator.vue"
</script>

<template>
  <Theme full-height x-y-center>
    <div class="page-content">
      <Row x-y-center>
        <!-- lessons -->
        <Column>
          <Suspense>
            <PasswordGenerator />
          </Suspense>
        </Column>
      </Row>
    </div>
  </Theme>
</template>

<style lang="scss" scoped>
@import "@scss/helpers/all.scss";

.page-content {
  @extend .p-r;
  flex-basis: 100%;
}

.solutions {
  flex-basis: 85%;
}
</style>
