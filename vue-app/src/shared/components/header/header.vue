<template>
            <header class = "header">
                    <ul>
                        <li class="branding"><router-link to="/"><img v-bind:src="logo" alt="LOGO"/> </router-link></li>
                        <li><router-link to="/"> <span>Home </span> </router-link></li>
                        <li><router-link to="/about"> <span>About </span> </router-link></li>
                        <li><router-link to="/contact"> <span>Contact </span> </router-link></li>
                        <li class="cart-count"><router-link to="/cart"> <span>Cart: {{cartCount.length}} item(s) </span> </router-link></li>
                    </ul> 
            </header>  
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Header",
    methods: {  
        ...mapActions(["fetchCartCount"])
    },
    computed: mapGetters(['cartCount']),
    created() {  
        this.fetchCartCount()   
    },
    data: function() {
        return  {
            cartItem:0,
            logo:'/logo.png'                   
        }
    }
}
</script>

 <style scoped>
 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

.branding{
    float:left;
}

.cart-count{
    float:right;
}
img {  
  height:1em;
  width:5em;
}
 </style>
 