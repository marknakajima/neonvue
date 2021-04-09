<template>
    <v-card class="pa-6 pt-12 pr-4 cursorShow" flat color="#22232e">
        <v-carousel
            :continuous="true"
            :cycle="cycle"
            :interval="4000"
            :show-arrows="true"
            :hide-delimiter-background="true"
            :hide-delimiters="true"
            :progress="true"
            :slide="true"
            v-model="model"
            delimiter-icon="mdi-circle"
        >
            <v-carousel-item
                v-for="(slide, i) in items"
                :key="i"
                @click="goDetail(slide)"
            >
                <v-container>
                    <v-row class="align-center">
                        <v-col cols="12" sm="8" md="8" lg="8" xl="8">
                            <v-img
                                :src="`/${slide.slug}/${slide.slug}-1.jpg`"
                                max-height="380"
                            ></v-img>
                        </v-col>
                        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                            <span class="headline pr-2 white-text">{{
                                slide.name
                            }}</span>

                            <rating-area
                                :ratingNum="slide.rating"
                            ></rating-area>

                            <v-row class="d-none d-lg-flex">
                                <v-col sm="6">
                                    <v-img
                                        max-height="90"
                                        :src="`/${slide.slug}/${slide.slug}-2.jpg`"
                                    ></v-img>
                                </v-col>
                                <v-col sm="6">
                                    <v-img
                                        max-height="90"
                                        :src="`/${slide.slug}/${slide.slug}-3.jpg`"
                                    ></v-img>
                                </v-col>
                                <v-col sm="6">
                                    <v-img
                                        max-height="90"
                                        :src="`/${slide.slug}/${slide.slug}-4.jpg`"
                                    ></v-img>
                                </v-col>
                                <v-col sm="6">
                                    <v-img
                                        max-height="90"
                                        :src="`/${slide.slug}/${slide.slug}-5.jpg`"
                                    ></v-img>
                                </v-col>
                            </v-row>

                            <v-row class="mt-4 subtitle-2 grey--text">
                                {{ currentInfo.snippet }}
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import RatingArea from "~/components/RatingArea.vue";

export default {
    props: {
        items: Array,
    },
    components: {
        RatingArea,
    },
    data() {
        return {
            cycle: true,
            model: 0,
        };
    },
    computed: {
        ...mapGetters(["goDetail"]),
        currentInfo() {
            return this.items[this.model];
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
