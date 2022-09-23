 <script setup>
import CustomerService from '../../services/CustomerService'

/**
 *** composition API ***
 **/
import {defineProps, watchEffect} from 'vue'
import {ref, onMounted} from 'vue'
import colors from "../../assets/themeColors"

    const { white, dark} = colors
    const props = defineProps({currentTheme:String})
    const customers = ref([])
    
    // style variables
    const fontColor = ref(dark)
    const tableBackground = ref(white)

    watchEffect(() => {
        if(props.currentTheme === 'light'){
            fontColor.value = dark
            tableBackground.value = white
        }   
        else{
            fontColor.value = white
            tableBackground.value = dark
        }
    })
    

    onMounted(() => {
        CustomerService.getCustomers()
            .then((resp) => {
                customers.value = resp.data
            })
            .catch((error) => {
                console.log(error)
            })
    })

/**
 *  options API
 *
    export default {
        name: 'CustomerData',
        data(){
            return{
                customers: []
            }
        },
        methods: {
            getCustomers(){
                CustomerService.getCustomers()
                    .then((resp) => {
                        this.customers = resp.data;
                    .catch((error) => {
                        console.log(error)
                    })
                })
            }
        },
        created(){
            this.getCustomers()
        }
    }
*/
</script>

<template>
    <table>
        <tr>
            <th>first name</th>
            <th>last name</th>
            <th>sex</th>
            <th>age</th>
            <th>height (m)</th>
            <th>weight (kg)</th>
            <th>fat percentage</th>
        </tr>
        <tr v-for="customer in customers" v-bind:key="customer.id">
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.sex }}</td>
            <td>{{ customer.age }}</td>
            <td>{{ customer.height }}</td>
            <td>{{ customer.weight }}</td>
            <td>{{ customer.fatPercentage }}</td>
        </tr>
    </table>
</template>

<style scoped>
table{
    margin:0 auto;
    background:v-bind(tableBackground);
    font-size:16px;
    color:v-bind(fontColor);
    border-radius: 10px;
    padding:10px 20px 10px 20px;
}
tr > * {
    text-align: left;
    padding:12px 15px 12px 15px;   
}
th{
    text-transform: capitalize; 
}
td{
    color:v-bind(fontColor);
    border-top:1px solid #f2f2f2;
}
</style>
