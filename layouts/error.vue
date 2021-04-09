<template>
    <div class="mt-5">
        <h1
            class="headline text-center mt-5 mb-5 text-uppercase"
            :class="[$vuetify.breakpoint.mdAndDown ? 'subtitle-1' : '']"
        >
            <div v-if="error.statusCode === 404">
                {{ pageNotFound }}
            </div>
            <div v-else>
                {{ otherError }}
            </div>
        </h1>

        <NuxtLink to="/"> Home </NuxtLink>
    </div>
</template>

<script>
export default {
    layout: "empty",
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title,
        };
    },
    data() {
        return {
            pageNotFound: "404 Not Found",
            otherError: "An error occurred",
        };
    },
};
</script>

<style scoped>
</style>
