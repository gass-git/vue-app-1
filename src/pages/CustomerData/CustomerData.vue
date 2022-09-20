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
import CustomerService from '../../services/CustomerService'

export default {
    name: 'CustomerData',
    data(){
        return{
            customers: []
        }
    },
    methods: {
        getCustomers(){
            CustomerService.getCustomers().then((resp) => {
                this.customers = resp.data;
            })
        }
    },
    created(){
        this.getCustomers()
    }
}
</script>

<style scoped>
table{
    background: white;
    margin:40px auto;
    font-size:16px;
    border-radius: 5px;
    padding:10px 20px 10px 20px;
}
tr > * {
    text-align: left;
    padding:8px 25px 8px 25px;   
}
th{
    text-transform: capitalize; 
}
td{
    border-top:1px solid #F2F2F2;
}
</style>