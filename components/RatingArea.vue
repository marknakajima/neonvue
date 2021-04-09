<template>
    <div class="d-flex flex-row align-center">
        <v-rating
            class="align-self-center mr-2"
            readonly
            v-model="ratingNum"
            background-color="white"
            :color="'#ff00cc'"
            dense
            half-increments
            size="14"
        ></v-rating>
        <span class="grey--text text--lighten-2 caption pt-1">{{
            ratingNum
        }}</span>
    </div>
</template>

<script>
export default {
    props: {
        ratingNum: Number,
    },
    data() {
        return {};
    },
};
</script>
