<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn color="info" depressed small class="mx-1">
                    refresh
                </v-btn>
                <v-btn color="info" depressed small class="mx-1">
                    filter
                </v-btn>
                <v-btn color="primary" depressed small class="mx-1">
                    new
                </v-btn>
                <v-btn color="error" depressed small class="mx-1">
                    delete
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <v-data-table loading :headers="dataTable.headers"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Personnel',
    data: function () {
        return {
            dataTable: {
                headers: [
                    {text: 'Rank', value: 'rank.name'},
                    {text: 'First Name', value: 'firstName'},
                    {text: 'Last Name', value: 'lastName'},
                    {text: 'Email', value: 'email'},
                    {text: 'Phone', value: 'phone'},
                    {text: '', value: '', sortable: false, filterable: false}
                ]
            }
        }
    }
};
</script>

<style scoped>

</style>