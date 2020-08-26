<template>
  <div id="componente" class="container">
      <h3>este texto viene desde el Componente Hijo</h3>
      <ul>
          <li>Text 1</li>
          <li>Text 2</li>
      </ul>
      Hola {{ nombre }}
  </div>
</template>

<script>
export default {
    name: 'Prueba',
    data(){
        return{
            nombre: 'Componente Hijo'
        }
    }
}
</script>

<style>
.container{
    background: gray;
}
</style>