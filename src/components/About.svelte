<script>
    import image from '../assets/me.jpg'
</script>

<section id="about" class="m-0 p-0 w-full h-screen flex items-center justify-center">
    <div class="lg:w-1/2 w-full flex items-center justify-center flex-col lg:flex-row p-10 rounded-xl hover:drop-shadow-xl hover:backdrop-brightness-75 durration-500 backdrop-blur-md">
        <div class="w-full lg:w-1/2">
            <h2 class="text-6xl">Hello, it's beldmian</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ut hic praesentium magnam facilis repellendus reiciendis quibusdam id illo voluptatum doloribus, totam eos aut cumque repudiandae dolorum eius ipsum libero.</p>
        </div>
        <div class="">
            <img class="rounded-xl h-96" src={image} alt="me">
        </div>
    </div>
</section>

<style scoped>
section {
    background-image: url('../assets/bg.jpg');
    background-size: cover;
}
</style>