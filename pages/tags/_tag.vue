<template>
    <div>
        <h1
            class="headline text-center mt-5 mb-5"
            :class="[$vuetify.breakpoint.mdAndDown ? 'subtitle-1' : '']"
        >
            Tag: {{ currentTag }}
        </h1>

        <v-container>
            <v-row no-gutters class="d-flex pt-1 mb-5" justify="space-between">
                <v-col v-for="item in tagItems" :key="item.slug">
                    <v-card
                        @click="goDetail(item)"
                        class="hoverCard mx-auto mb-10"
                        max-width="360"
                        height="94%"
                    >
                        <v-img
                            height="209px"
                            :src="`/${item.slug}/${item.slug}-1.jpg`"
                            alt="item.name"
                        ></v-img>
                        <v-card-title class="mb-4 mt-4">{{
                            item.name
                        }}</v-card-title>
                        <v-card-subtitle>
                            <div class="d-flex flex-row">
                                <v-rating
                                    class="align-self-center"
                                    readonly
                                    v-model="item.rating"
                                    background-color="white"
                                    color="yellow accent-4"
                                    dense
                                    half-increments
                                    size="18"
                                ></v-rating>
                                <span
                                    class="grey--text text--lighten-2 caption align-self-center mt-1"
                                    >{{ item.rating }}</span
                                >
                            </div>
                        </v-card-subtitle>

                        <v-card-text
                            class="grey--text d-inline-block text-truncate mt-4"
                            >{{ item.text }}</v-card-text
                        >
                        <v-card-text>
                            <template v-for="(tag, i) in item.tags">
                                <v-chip
                                    color="grey"
                                    small
                                    outlined　class="mr-2 mb-2 pa-3"
                                    :key="tag[i]"
                                    >{{ tag }}</v-chip
                                >
                            </template>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
    head() {
        return {
            title: `Tag - ${this.$route.params.tag}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Put your description here",
                },
            ],
        };
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["goDetail", "getByTags"]),
        currentTag() {
            return this.$route.params.tag;
        },
        tagItems() {
            return this.getByTags([this.$route.params.tag]);
        },
    },
};
</script>



<style lang="scss" scoped>
</style>
