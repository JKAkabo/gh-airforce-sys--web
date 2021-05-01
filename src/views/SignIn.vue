<template>
    <v-app>
    <v-main class="">
        <v-container>
            <v-row justify="center">
                <v-col md="6" lg="3">
                    <div class="text-center my-6">
                        <v-icon x-large color="primary">mdi-shield-account-outline</v-icon>
                    </div>
                    <v-text-field outlined dense label="Email address" hide-details/>
                    <v-text-field outlined dense label="Password" hide-details class="mt-6" type="password"/>
                    <v-btn depressed block color="primary" class="mt-6">Sign in</v-btn>
                    <v-btn text small color="primary" class="mt-6 float-right">Forgot Password?</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-footer absolute color="white">
            <v-col class="text-center overline">
                copyright &copy; 2021 akabo, LLC
            </v-col>
        </v-footer>
    </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'SignIn'
};
</script>

<style scoped>

</style>