<template>
    <div>
        <v-card height="94%" flat>
            <h3　 
				v-if="showTitle"
                class="title pa-4 pl-0  text-uppercase"
            >
                {{ this.listName }}
            </h3>

            <v-list three-line color="#22232e">
                <template v-for="(item, i) in dataProp">
                    <v-list-item
                        :key="item.title"
                        @click="goDetail(item)"
                        class="pt-6 pb-4 d-flex align-start"
                    >

                        <v-list-item-avatar v-if="rankIcon" tile class="mr-3 mt-2" :class="'d-none d-lg-block'" >
							<v-icon>
								mdi-numeric-{{i+1}}-box-multiple
							</v-icon>
                        </v-list-item-avatar>
 								<v-img
                                    :src="`/${item.slug}/${item.slug}-1.jpg`"
                                    alt="item.name"
									class="mr-6"
									:class="[$vuetify.breakpoint.mdAndUp ? 'd-md-inline-block' : 'block']"
									:max-width="[$vuetify.breakpoint.mdAndUp ? '320' : '120']"
                                ></v-img>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle-1 mt-n4" 
								:class="[$vuetify.breakpoint.mdAndUp ? 'mb-4' : 'mb-1']">{{
                                item.name
                            }}</v-list-item-title>

                            <v-list-item-subtitle
                     			:class="[$vuetify.breakpoint.mdAndUp ? 'mb-4' : 'mb-1']"
                            >
                                <rating-area
                                    :ratingNum="item.rating"
                                ></rating-area>
                            </v-list-item-subtitle>

                            <v-list-item-subtitle class="subtitle-2 mb-4">{{
                                item.text
                            }}</v-list-item-subtitle>

                            <v-list-item-subtitle class="subtitle-2 mb-3"
                                ><tag-links :currentItem="item"></tag-links
                            ></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider
                        v-if="i + 1 < dataProp.length"
                        :key="i"
                    ></v-divider>
                </template>
            </v-list>
        </v-card>
    </div>
</template>



<script>
import { mapGetters } from "vuex";
import TagLinks from "~/components/TagLinks.vue";
import RatingArea from "~/components/RatingArea.vue";
export default {
    props: {
        listName: String,
        dataProp: Array,
        showTitle: Boolean,
        rankIcon: Boolean,
    },
    components: {
        TagLinks,
        RatingArea,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["goDetail"]),
    },
};
</script>



<style lang="scss" scoped>
.rankNum {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    line-height: 0.875rem;

    z-index: 3;
    color: #1fffff;
    border: 1px solid #1fffff;
    padding: 0.5rem;
}
</style>
