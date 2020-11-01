<template>
    <div id="profile" class="d-flex justify-center">
        <top-header/>
        <v-card class="ma-12" min-width="400px" flat>
            <v-card-title class="my-3" >
                <h1>My Profile</h1>
            </v-card-title>

            <v-card-text class="ml-2">
                <p>First Name : {{ dataGet.firstName }}</p>
                <p>Last Name : {{ dataGet.lastName }}</p>
                <p>Email : {{ dataGet.email }}</p>
            </v-card-text>

            <v-card-actions class="d-flex justify-space-between">
                <v-btn @click.stop="dialogUp=true" title="edit">Edit</v-btn>
                <v-btn @click.stop="dialogDel=true" title="delete my profile">Delete</v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog persistent v-model="dialogUp" max-width="600px">
            <v-card>
                <v-card-title>Edit my profile</v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <v-text-field
                            v-model="dataUp.firstName"
                            :rules="nameRules"
                            label="First Name" prepend-icon="mdi-account-circle"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="dataUp.lastName"
                            :rules="nameRules"
                            label="Last Name" prepend-icon="mdi-account-circle"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="dataUp.email"
                            :rules="emailRules"
                            label="e-mail"
                            prepend-icon="mdi-at"
                            required>
                        </v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn text
                        @click="dialogUp=false">
                        Cancel
                    </v-btn>
                    <v-btn
                    text
                        :disabled="!valid"
                        @click="updateUser">
                        Update
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDel" max-width="350px">
            <v-card>
                <v-card-title>
                    Are you sure?
                </v-card-title>
                <v-card-text>
                    <p>By deleting your profile, you will also delete all your posts as well as your comments.</p>
                    <p>{{ msg }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialogDel=false">
                        Cancel
                    </v-btn>
                    <v-btn text @click="deleteUser">
                        Delete my profile
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader'
export default {
    name: 'Profile',
    data () {
        return {
            dialogDel: false,
            dialogUp: false,
            msg: '',
            dataGet: {
                firstName: '',
                lastName: '',
                email: ''
            },
            dataUp: {
                firstName: '',
                lastName: '',
                email: ''
            },
            dataUpS: '',
            valid: true,
            nameRules: [
                v => !!v || 'Name required'
            ],
            emailRules: [
                v => !!v || 'E-mail required',
                v => /.+@.+\..+/.test(v) || 'E-mail invalid'
            ]
        }
    },
    methods: {
        //
    },
    mounted () {
        //
    },

    components: {
        'top-header': TopHeader
    }
}
</script>

<style>
</style>