<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" lg="8">
                    <id-carousel
                        :items="
                            getBySlugsWithSnippets([
                                {
                                    slug: 'futurecities',
                                    snip:
                                        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!',
                                },
                                {
                                    slug: 'robots',
                                    snip:
                                        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!',
                                },
                                {
                                    slug: 'neonlights',
                                    snip:
                                        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!',
                                },
                            ])
                        "
                    ></id-carousel>
                </v-col>

                <v-col cols="12" lg="4">
                    <v-row align="center" justify="center" class="my-4">
                        <v-col cols="12">
                            <h2
                                class="title text-center text-uppercase"
                                :class="[
                                    $vuetify.breakpoint.mdAndDown
                                        ? 'subtitle-2'
                                        : '',
                                ]"
                            >
                                Features
                            </h2>
                            <p class="text-center mt-4 mb-0 grey--text">
                                Vuetify + Nuxt + Vuex
                            </p>
                        </v-col>
                    </v-row>

                    <v-card color="#1c1e26" flat depressed>
                        <v-alert
                            icon="mdi-tablet-cellphone"
                            color="#22232e"
                            class="pa-4 pb-0"
                        >
                            <p class="subtitle-2 grey--text">
                                Fully responsive
                            </p>
                        </v-alert>
                        <v-alert
                            icon="mdi-speedometer"
                            color="#22232e"
                            class="pa-4 pb-0"
                        >
                            <p class="subtitle-2 grey--text">
                                Lightweight and built for speed
                            </p>
                        </v-alert>
                        <v-alert
                            icon="mdi-chart-line"
                            color="#22232e"
                            class="pa-4 pb-0"
                        >
                            <p class="subtitle-2 grey--text">SEO ready</p>
                        </v-alert>
                        <v-alert
                            icon="mdi-file"
                            color="#22232e"
                            class="pa-4 pb-0"
                        >
                            <p class="subtitle-2 grey--text">
                                Server side rendering
                            </p>
                        </v-alert>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <list-articles
                        :listName="'New'"
                        :dataProp="getLatest(3)"
                        :showTitle="true"
                    />
                    <div class="text-center mt-8">
                        <v-btn class="neonBtn" to="/new">See more</v-btn>
                    </div>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <list-articles
                        :listName="'Images'"
                        :dataProp="getByTags(['images'], 3)"
                        :showTitle="true"
                    />
                    <div class="text-center mt-8">
                        <v-btn class="neonBtn" to="/rank_images"
                            >See more</v-btn
                        >
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2
                        class="title text-uppercase"
                        :class="[
                            $vuetify.breakpoint.mdAndDown ? 'subtitle-2' : '',
                        ]"
                    >
                        Sideways layout
                    </h2>
                    <cards-grid :dataProp="getLatest(4)"></cards-grid>

                    <div class="text-center mt-n10">
                        <v-btn class="neonBtn" to="/new">See more</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import IdCarousel from "~/components/IdCarousel.vue";
import ListArticles from "~/components/ListArticles.vue";
import CardsGrid from "~/components/CardsGrid.vue";

export default {
    head() {
        return {
            title: "Futuristic sci-fi Vue theme",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Put your description here",
                },
            ],
        };
    },
    components: {
        IdCarousel,
        ListArticles,
        CardsGrid,
    },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        ...mapGetters([
            "getByTags",
            "getLatest",
            "getCurrent",
            "getBySlugsWithSnippets",
            "getLatestArticles",
            "goDetail",
        ]),
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>


