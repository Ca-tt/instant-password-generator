<script setup lang="ts">
import PasswordWrapper from "@/password-generator/components/PasswordWrapper.vue";
import PasswordGenerator from "@/password-generator/PasswordGenerator.vue"

</script>

<template>
  <Theme full-height x-y-center>
    <div class="page-content">
      <Row x-y-center>
        <!-- lessons -->
        <Column>
          <Suspense>
            <PasswordWrapper />
          </Suspense>
        </Column>
      </Row>
    </div>
  </Theme>
</template>

<style lang="scss">
@import "@scss/rules/all.scss";

.message {
  font-size: 2em;
}

.page-content {
  @extend .p-r;
  flex-basis: 100%;
}
</style>
