<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list>
                <v-list-item class="pa-4">
                    <v-list-item-action>
                        <v-avatar>
                            <img src="/profile.jpg" alt="" />
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content
                        ><span class="grey--text"> Space Guy</span>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <div v-for="(item, i) in items" :key="i">
                    <v-list-item :to="item.to" v-if="!item.children">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title" />
                        </v-list-item-content>
                    </v-list-item>
                    <div v-else>
                        <v-divider></v-divider>
                        <v-subheader
                            class="text-center subtitle-2 grey--text font-weight-light"
                            >{{ item.title }}</v-subheader
                        >
                        <v-list-item
                            v-for="(child, x) in item.children"
                            :to="child.to"
                            :key="x"
                        >
                            <v-list-item-action>
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title v-text="child.title" />
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </div>
                <v-divider></v-divider>
                <v-subheader
                    class="text-center subtitle-2 grey--text font-weight-light"
                    >Tag cloud</v-subheader
                >
                <v-container class="pa-4 pl-6">
                    <v-row>
                        <div v-for="(tag, i) in getAllTags()" :key="i">
                            <v-hover v-slot:default="{ hover }">
                                <v-chip
                                    small
                                    outlined　
                                    class="mr-2 mb-2 pa-3"
                                    @click="goTag(tag)"
                                    :class="{ 'on-hover': hover }"
                                    >{{ tag }}</v-chip
                                >
                            </v-hover>
                        </div>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed app color="#22232e">
            <v-app-bar-nav-icon
                :class="{ 'mr-5': isMounted && $vuetify.breakpoint.mdAndUp }"
                @click.stop="drawer = !drawer"
            />
            <v-spacer class="d-lg-none" />
            <router-link to="/">
                <img
                    src="/logo.png"
                    :class="{
                        'ml-n5': isMounted && $vuetify.breakpoint.xsAndDown,
                        'ml-0': isMounted && $vuetify.breakpoint.mdAndUp,
                    }"
                    alt=""
                    width="240"
                    height="37"
                />
            </router-link>
            <span class="ml-4 mb-1 d-none d-lg-flex caption"
                >Futuristic sci-fi theme for Vue</span
            >
            <v-spacer />

            <span class="caption grey--text d-none d-lg-flex mr-6"
                >Total：{{ getNumTotalArticles() }}</span
            >

            <v-btn
                text
                small
                class="d-none d-md-flex caption"
                @click="bookmarkSheet = !bookmarkSheet"
            >
                <a href="#">Bookmark</a>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container>
                <transition name="fade">
                    <nuxt />
                </transition>
                <v-footer class="pa-2">
                    <v-container>
                        <v-row justify="center" class="text-center">
                            <v-col sm="auto">
                                <v-btn text small>
                                    <nuxt-link to="/about">About</nuxt-link>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col sm="auto">
                                <p class="overline text-center">
                                    Neonvue : Images from Unsplash
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-footer>
            </v-container>
        </v-content>

        <v-snackbar
            v-model="bookmarkSheet"
            min-width="240px"
            :color="'#33343e'"
            centered
            right
        >
            <v-container>
                <v-row justify="center" align="center" no-gutters>
                    <v-icon large color="primary" class="mr-4">
                        mdi-bookmark-check </v-icon
                    >Press " Ctrl + D " to bookmark
                </v-row>
            </v-container>
        </v-snackbar>
    </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            isMounted: false,
            clipped: true,
            drawer: this.$vuetify.breakpoint.lgAndUp,
            fixed: false,
            bookmarkSheet: false,
            items: [
                {
                    icon: "mdi-home",
                    title: "Home",
                    to: "/",
                },
                {
                    icon: "mdi-open-in-new",
                    title: "New",
                    to: "/new",
                },
                {
                    title: "Pages",
                    children: [
                        {
                            icon: "mdi-watch-vibrate",
                            title: "Gadgets",
                            to: "/rank_gadgets",
                        },
                        {
                            icon: "mdi-file-image",
                            title: "Images",
                            to: "/rank_images",
                        },
                    ],
                },
                {
                    icon: "mdi-info",
                    title: "Others",
                    children: [
                        {
                            icon: "mdi-information-outline",
                            title: "About",
                            to: "/about",
                        },
                    ],
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
        };
    },
    computed: {
        ...mapGetters(["getNumTotalArticles", "getAllTags", "goTag"]),
    },
    mounted() {
        // https://stackoverflow.com/questions/50991071/vuetify-breakpoints-not-working-in-nuxt-js
        // use this hack to move logo to the left to center it on page load
        this.isMounted = true;
    },
};
</script>

<style lang="scss">
// Custom heading
.v-application {
    .display-4,
    .display-3,
    .display-2,
    .display-1,
    .headline,
    .title {
        font-family: "Titillium Web", sans-serif !important;
        font-weight: bold;
        letter-spacing: 2px !important;
        background-color: #1c1e26 !important;
    }
}

// Base color changes

.theme--dark.v-application {
    background-color: #1c1e26;
}

.theme--dark.v-list {
    background-color: #22232e;
}

// Card color changes

.theme--dark.v-card {
    background-color: #1c1e26;
}

.theme--dark.v-card.hoverCard {
    background-color: #22232e;
    &:hover {
        background-color: #33343e;
    }
}

// Side navigation color changes

.theme--dark.v-navigation-drawer {
    background-color: #1c1e26;
}

// Footer color changes

.theme--dark.v-footer {
    border-top: 1px solid #383940;
    margin-top: 3rem;
    background-color: #1c1e26;
}

// Show cursor hover
.cursorShow {
    cursor: pointer;
    color: #1fffff;
    &:hover {
        color: #fefefe;
    }
}

// Side Navigation

.v-list-item__title {
    font-size: 0.825rem;
}

.theme--dark.v-list-item--active:hover::before,
.theme--dark.v-list-item--active::before {
    background-color: #1c1e26;
    opacity: 0;
}

.v-list .v-list-item--active {
    color: #1fffff;
}

// transitions
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
}

.fade-enter-active {
    transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

// Remove weird background corner dots
.theme--dark.v-tabs-items {
    background-color: #22232e;
}

// v-chip hover
.v-chip.on-hover {
    border: 1px solid #1fffff;
}

.hoverLink:not(.on-hover) {
    opacity: 0.8;
}

// disable hover row color change

tbody {
    tr:hover {
        background-color: transparent !important;
    }
}

.txtEmph1 {
    padding: 1rem;
    background-color: rgba(34, 35, 46, 0.8);
    width: 90%;
    @media screen and (min-width: 600px) {
        width: 50%;
    }
}

// Remove padding from all v-list
.v-list {
    padding: 0 !important;
}

// Custom emphasis
.neon {
    text-shadow: 0 0 3px #fff, 0 0 4px #ff00cc, 0 0 20px #ff00cc;
}

// Button
.neonBtn {
    padding: 1.25rem;
    font-size: 1.5rem;
    text-decoration: none;
    text-shadow: -2px 4px 4px #091243, 0 0 10px #ff00cc, inset 1px 1px 1px white;
    color: #fefefe;
    border: 2px solid;
    border-radius: 4px;
    background-color: transparent;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3),
        2px 4px 3px rgba(3, 0, 128, 0.3), 0 0 7px 2px rgba(0, 208, 255, 0.6),
        inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 2px 1px 4px rgba(0, 0, 0, 0.3),
        inset 2px 4px 3px rgba(3, 0, 128, 0.3),
        inset 0 0 7px 2px rgba(0, 208, 255, 0.6);
    animation: flickering 5s infinite;
}

@keyframes flickering {
    0% {
        border-color: transparent;
        opacity: 0.2;
    }

    2% {
        border-color: #1fffff;
        opacity: 1;
    }

    4% {
        border-color: transparent;
        opacity: 0.2;
    }

    8% {
        border-color: #1fffff;
        opacity: 1;
    }

    28% {
        border-color: #1fffff;
        opacity: 1;
    }

    30% {
        border-color: transparent;
        opacity: 0.2;
    }

    36% {
        border-color: #1fffff;
        opacity: 1;
    }

    100% {
        border-color: #1fffff;
        opacity: 1;
    }
}
</style>





