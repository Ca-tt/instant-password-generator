<script setup lang="ts">
// import Examples from './lessons/examples/Examples.vue';
import Lesson from './Lesson.vue';
// import Solutions from './lessons/solutions/Solutions.vue';
</script>

<template>
    <Theme full-height x-y-center>
        <div class="page-content">
            <Row x-y-center>
              
                <!-- lessons -->
                <Column>
                    <Suspense>
                        <Lesson />
                    </Suspense>
                </Column>

            </Row>
        </div>
    </Theme>
</template>

<style lang="scss" scoped>
@import '@scss/helpers/all.scss';

.page-content {
    @extend .p-r;
    flex-basis: 100%;
}

.solutions {
    flex-basis: 85%;
}
</style>