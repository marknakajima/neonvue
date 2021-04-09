<template>
    <v-container>
        <v-row class="d-flex mb-5" justify="space-between">
            <v-col v-for="item in myItems" :key="item.slug">
                <v-card
                    @click="goDetail(item)"
                    class="hoverCard mx-auto mb-10"
                    max-width="360"
                    height="94%"
                    flat
                >
                    <v-img
                        height="209px"
                        :src="`/${item.slug}/${item.slug}-1.jpg`"
                        alt="item.name"
                    ></v-img>
                    <v-card-title class="mb-4 mt-4 subtitle-1">{{
                        item.name
                    }}</v-card-title>
                    <v-card-subtitle>
                        <rating-area :ratingNum="item.rating"></rating-area>
                    </v-card-subtitle>

                    <v-card-text
                        class="grey--text d-inline-block text-truncate mt-4"
                        >{{ item.text }}</v-card-text
                    >
                    <v-card-text>
                        <tag-links :currentItem="item"></tag-links>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TagLinks from "~/components/TagLinks.vue";
import RatingArea from "~/components/RatingArea.vue";
export default {
    props: {
        dataProp: Array,
    },
    components: {
        TagLinks,
        RatingArea,
    },
    data() {
        // myItems is needed when this component is used in _id.vue that uses tabs. For unknown reason, clicking on the tabs and using dataProp directly in v-for results in items being shuffled around. Copying dataProp to this fixed shuffling
        return {
            myItems: this.dataProp,
        };
    },
    computed: {
        ...mapGetters(["goDetail"]),
    },
};
</script>



<style lang="scss" scoped>
</style>
