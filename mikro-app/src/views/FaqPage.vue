<template>
    <NavigationBar/>
    <div class="faq" style="margin-left: 78px;">
        <h1>This is the FAQ Page.</h1>
        <p>
            Todo:
            1. How do I check my progress?
            2. Not about finance terminology
        </p>
    </div>
  </template>

<script>
    import NavigationBar from '../components/NavigationBar.vue';
    export default 
    {
        name: 'FaqPage',
        components: { NavigationBar },
        props: 
        {
    
        }
    }
</script>