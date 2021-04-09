<template>
    <div>
        <h1
            class="headline text-center mt-5 mb-5 text-uppercase"
            :class="[$vuetify.breakpoint.mdAndDown ? 'subtitle-1' : '']"
        >
            About
        </h1>

        <v-card max-width="540" class="mx-auto mt-n3" elevation="0">
            <v-card-text>
                <p class="mb-6">
                    Neonvue is a Vue sci-fi starter template to quickly
                    visualize your next futuristic theme.
                </p>

                <h4
                    class="mb-6 subtitle-1 text-uppercase text-center white--text"
                >
                    Tech stack used
                </h4>
                <v-list class="mb-6" disabled>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Vuetify</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Nuxt.js</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Vuex</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <h4
                    class="mb-6 subtitle-1 text-uppercase text-center white--text"
                >
                    Features
                </h4>
                <v-list disabled>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title
                                >Fully responsive
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title
                                >Lightweight and built for speed
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>SEO ready</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title
                                >Static site generation</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>


<script>
export default {
    head() {
        return {
            title: "About",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Put your description here",
                },
            ],
        };
    },
    components: {},
    data() {
        return {};
    },
    mounted() {},
    computed: {},
};
</script>

<style lang="scss" scoped>
</style>
