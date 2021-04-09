<template>
    <div>
        <h1
            class="headline text-center mt-5 mb-5  text-uppercase"
            :class="[$vuetify.breakpoint.mdAndDown ? 'subtitle-1' : '']"
        >
            New Articles
        </h1>
        <p class="grey--text text-center">Sorted by date</p>

        <v-container>
            <v-row>
                <CardsGrid :dataProp="getLatest()" />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardsGrid from "~/components/CardsGrid.vue";

export default {
    head() {
        return {
            title: "New",
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
        CardsGrid,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["getLatest"]),
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>


