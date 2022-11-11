<template>
    <NavigationBar/>
    <div id="progress" style="margin-left: 63px;">
        <h1>This is the Conversion Page.</h1>
       
    </div>
  </template>
  
<script>
    import NavigationBar from '../components/NavigationBar.vue';

    export default 
    {
    name: "ConversionPage",
    components: { NavigationBar },
    props: {},
    
}
</script>