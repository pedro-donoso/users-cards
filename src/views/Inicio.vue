<template>

  <div class="container">
     
          <!--recorrido-->
         <div v-for="post in posts" :key="post">
     
              <div class="item">
                   <h3 class="card__name">{{ post.name.first }} {{ post.name.last }}</h3>
      <img :src="post.picture.large" class="card__image" alt="image" />
 <p>Edad: {{ post.dob.age }}</p>
      <div class="card__body">
       

            <h4>Vive en:</h4>
        <p>Calle: {{ post.location.street.name }} #{{post.location.street.number}}</p>
        <p>Ciudad: {{ post.location.city }} - {{post.location.state}}</p>
        <p>País: {{ post.location.country }}</p>

         

        <h4>Contacto:</h4>
        <p>Email: {{ post.email }}</p>
       
        <p>Telefonos: {{ post.phone }} / {{ post.cell}}</p>

      </div> 
   
    
    </div>
    <!--recorrido--> 
      </div>
     
  </div>
 
</template>

<script>
// importar axios
import axios from "axios";
// importar axios

export default {
  name: "Inicio",
  data() {
    return {
      posts: [],
    };
  },
  // para axios Mounted se carga automáticamente, antes de cualquier data
  mounted() {
    let vue = this;
    axios.get("https://randomuser.me/api/?results=10").then(function(response) {
      vue.posts = response.data.results;
    });
  },
};
</script>

<style lang="scss" scoped>

.container{
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
      padding: 1rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

 

}

.item{

    text-align: center;
    padding: 0 1rem;
    margin: 1rem 1rem;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,36,121,1) 35%, rgba(0,212,255,1) 100%);
color: #ffffff;
text-shadow: 0.1em 0.1em rgb(0, 0, 0);
    border-radius: 1rem;
    width: 20rem;
    height: 34rem;
    border: solid 1px blue;


}

.card__image{
    border: solid 0.3rem white;
    border-radius: 0.5rem;

}

</style>
