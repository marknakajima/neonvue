<template>
    <div>
        <h1
            class="headline text-center mt-5 mb-5 text-uppercase"
            :class="[$vuetify.breakpoint.mdAndDown ? 'subtitle-1' : '']"
        >
            Images
        </h1>
        <p class="grey--text text-center">Sorted by rating</p>

        <v-container>
            <v-row>
                <list-articles
                    :listName="'Images'"
                    :dataProp="getByTags(['images'], 10)"
                    :showTitle="false"
                    :rankIcon="true"
                />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListArticles from "~/components/ListArticles.vue";

export default {
    head() {
        return {
            title: "Images",
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
        ListArticles,
    },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        ...mapGetters(["getByTags"]),
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>


