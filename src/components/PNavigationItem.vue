<template>
    <v-list-item link dense exact class="my-1" :to="to">
        <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item>
</template>

<script>
export default {
    name: 'PNavigationItem',
    props: {
        icon: String,
        title: String,
        to: [String, Object]
    }
};
</script>

<style scoped>

</style>