
<template>
    <div>
        <v-hover
            v-slot:default="{ hover }"
            v-for="(item, i) in currentItem.tags"
            :key="item"
            class="pa-2"
        >
            <v-chip
                small
                outlined　class="mr-2 mb-2 pa-3"
                @click="goTag(item, getByTags([item], 3))"
                :class="{ 'on-hover': hover }"
                >{{ item }}</v-chip
            >
        </v-hover>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        currentItem: Object,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["goTag", "getByTags"]),
    },
};
</script>
