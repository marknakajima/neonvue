<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card color="#22232e" class="mt-5 pa-4 pt-0" elevation="0">
                    <v-container>
                        <v-row class="align-center">
                            <v-col sm="12" md="12" lg="12" xl="6">
                                <v-img
                                    :src="`/${current.slug}/${current.slug}-1.jpg`"
                                    max-height="438"
                                ></v-img>
                            </v-col>
                            <v-col sm="12" md="12" lg="12" xl="6">
                                <v-row>
                                    <v-col cols="6">
                                        <v-img
                                            max-height="207"
                                            :src="`/${current.slug}/${current.slug}-2.jpg`"
                                        ></v-img>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img
                                            max-height="207"
                                            :src="`/${current.slug}/${current.slug}-3.jpg`"
                                        ></v-img>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img
                                            max-height="207"
                                            :src="`/${current.slug}/${current.slug}-4.jpg`"
                                        ></v-img>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-img
                                            max-height="207"
                                            :src="`/${current.slug}/${current.slug}-5.jpg`"
                                        ></v-img>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-container class="mt-n8">
                        <v-row>
                            <v-col sm="12" md="12" lg="12" xl="6">
                                <v-row class="d-flex align-center">
                                    <v-col cols="12" md="auto">
                                        <h1 class="pr-6">
                                            {{ current.name }}
                                        </h1>
                                    </v-col>
                                    <v-col cols="12" md="auto">
                                        <rating-area
                                            :ratingNum="current.rating"
                                        ></rating-area>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col cols="12" md="auto">
                                        <v-card
                                            :class="[
                                                $vuetify.breakpoint.mdAndDown
                                                    ? 'mt-6'
                                                    : '',
                                            ]"
                                            v-if="current.url"
                                            color="#1c1e26"
                                            elevation="0"
                                            class="pl-3"
                                        >
                                            <v-row
                                                no-gutters
                                                class="d-flex align-center"
                                            >
                                                <v-col
                                                    cols="6"
                                                    md="auto"
                                                    class="subtitle-2 pr-4 grey--text"
                                                >
                                                    Learn more{{
                                                        current.price
                                                    }}
                                                    <span
                                                        class="overline"
                                                    ></span>
                                                </v-col>
                                                <v-spacer></v-spacer>

                                                <v-col
                                                    cols="6"
                                                    md="auto"
                                                    align-self-center
                                                >
                                                    <a
                                                        :href="`${current.link}`"
                                                        target="_blank"
                                                    >
                                                        <v-btn
                                                            class="neonBtn"
                                                            width="100%"
                                                        >
                                                            Details
                                                            <v-icon right dark
                                                                >mdi-arrow-right-bold-circle-outline</v-icon
                                                            >
                                                        </v-btn>
                                                    </a>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-5">
                                    <v-col xs="12">
                                        <div
                                            v-html="current.text"
                                            class="grey--text"
                                        ></div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col sm="12" md="12" lg="12" xl="6">
                                <v-row>
                                    <v-col sm="12" lg="6">
                                        <v-list
                                            dense
                                            color="#1c1e26"
                                            disabled
                                            class="pa-0"
                                        >
                                            <v-subheader
                                                class="pt-2 ml-2 mb-2 white--text"
                                            >
                                                <v-icon>mdi-thumb-up</v-icon>
                                                <span
                                                    class="subtitle-1 ml-2 font-weight-black"
                                                    >Pros</span
                                                >
                                            </v-subheader>
                                            <v-list-item-group color="primary">
                                                <template
                                                    v-for="(
                                                        item, i
                                                    ) in current.points_good"
                                                >
                                                    <v-list-item :key="item[i]">
                                                        <v-list-item-content>
                                                            <v-list-item-title
                                                                class="grey--text"
                                                                v-text="item"
                                                            ></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>

                                                    <v-divider
                                                        v-if="
                                                            i + 1 <
                                                            current.points_good
                                                                .length
                                                        "
                                                        :key="i"
                                                    ></v-divider>
                                                </template>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                    <v-col sm="12" lg="6">
                                        <v-list
                                            dense
                                            color="#1c1e26"
                                            disabled
                                            class="pa-0"
                                        >
                                            <v-subheader
                                                class="pt-2 ml-2 mb-2 white--text"
                                            >
                                                <v-icon>mdi-thumb-down</v-icon>
                                                <span
                                                    class="subtitle-1 ml-2 font-weight-black"
                                                    >Cons</span
                                                >
                                            </v-subheader>
                                            <v-list-item-group color="primary">
                                                <template
                                                    v-for="(
                                                        item, i
                                                    ) in current.points_bad"
                                                >
                                                    <v-list-item :key="item[i]">
                                                        <v-list-item-content>
                                                            <v-list-item-title
                                                                class="grey--text"
                                                                v-text="item"
                                                            ></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>

                                                    <v-divider
                                                        v-if="
                                                            i + 1 <
                                                            current.points_bad
                                                                .length
                                                        "
                                                        :key="i"
                                                    ></v-divider>
                                                </template>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                </v-row>

                                <v-card
                                    color="#1c1e26"
                                    elevation="0"
                                    class="pa-4 pt-2 mt-4"
                                >
                                    <h3 class="subtitle-1 mb-5 white--text">
                                        Tag
                                    </h3>
                                    <tag-links
                                        :currentItem="current"
                                    ></tag-links>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

                <h3 class="subtitle-1 mt-4">Also viewed</h3>
                <CardsGrid
                    v-if="current.slug"
                    :dataProp="getRecommendation(current.slug)"
                ></CardsGrid>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CardsGrid from "~/components/CardsGrid.vue";
import TagLinks from "~/components/TagLinks.vue";
import RatingArea from "~/components/RatingArea.vue";
export default {
    head() {
        return {
            title: this.current.name,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `${this.current.meta_description}`,
                },
            ],
        };
    },
    components: {
        CardsGrid,
        TagLinks,
        RatingArea,
    },
    data() {
        return {
            tab_text_extra: null,
        };
    },
    computed: {
        ...mapGetters(["getCurrent", "getRecommendation", "getLatestArticles"]),
        current() {
            return this.getCurrent(this.$route.params.id);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
