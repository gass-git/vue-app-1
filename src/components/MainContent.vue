<template>
    <table>
        <tr>
            <th>first name</th>
            <th>last name</th>
            <th>age</th>
            <th>height</th>
            <th>weight</th>
            <th>fat percentage</th>
        </tr>
        <tr v-for="customer in customers" v-bind:key="customer.id">
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.height }}</td>
            <td>{{ customer.weight }}</td>
            <td>{{ customer.fatPercentage }}</td>
        </tr>
    </table>
</template>

<script>
import CustomerService from '../services/CustomerService'

export default {
    name: 'CustomerList',
    data(){
        return{
            customers: []
        }
    },
    methods: {
        logCustomers(){
            return CustomerService.getCustomers().then((resp) => {
                console.log(resp.data)
            })
        },
        getCustomers(){
            CustomerService.getCustomers().then((resp) => {
                this.customers = resp.data;
            })
        }
    },
    created(){
        this.logCustomers()
        this.getCustomers()
    }
}
</script>

<style scoped>
@import '../assets/globalStyles.css';

table{
    margin:40px auto;
    font-family: arial, sans-serif;
    font-size:18px;
    border:1px solid #ddd;
}
th{
    text-transform: capitalize;
}
td,th{
    padding:8px;
}
tr:nth-child(even){
    background:#ddd;
}

</style>