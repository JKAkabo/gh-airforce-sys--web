<template>
    <v-app>
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon @click="toggleDrawer"/>
            <v-spacer/>
            <v-text-field dense solo background-color="grey lighten-3" hide-details flat
                          prepend-inner-icon="mdi-magnify" clearable/>
            <v-spacer/>
            <v-btn icon>
                <v-icon>mdi-account-outline</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            :value="showNavigation"
            :mini-variant="showMiniNavigation"
            @input="toggleDrawer" app color="primary" dark>
            <v-list nav>
                <p-navigation-item icon="mdi-view-dashboard" title="Dashboard"/>
                <p-navigation-item icon="mdi-account-group" title="Personnel" :to="{name: 'Personnel'}"/>
                <p-navigation-item icon="mdi-briefcase-clock-outline" title="Leaves"/>
                <p-navigation-item icon="mdi-clipboard-clock-outline" title="Assignments"/>
                <v-divider/>
                <p-navigation-item icon="mdi-cogs" title="Wings"/>
                <p-navigation-item icon="mdi-cogs" title="Ranks"/>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import PNavigationItem from '@/components/PNavigationItem';

export default {
    name: 'Root',
    components: {PNavigationItem},
    data: function () {
        return {
            drawer: true
        };
    },
    computed: {
        showMiniNavigation: function () {
            return this.$vuetify.breakpoint.lgAndUp && !this.drawer;
        },
        showNavigation: function () {
            return this.$vuetify.breakpoint.lgAndUp || this.drawer;
        }
    },
    methods: {
        toggleDrawer: function () {
            this.drawer = !this.drawer;
        }
    }
};
</script>

<style scoped>

</style>