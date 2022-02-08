<template>

<div class="container p-2 mx-auto">
    <div class="flex flex-row flex-wrap py-4">
        <aside class="w-full px-2 sm:w-1/3 md:w-1/4">
            <div class="sticky top-0 w-full p-4 bg-white rounded-xl">
                <ul class="flex flex-col overflow-hidden nav">
                    <li class="nav-item">
                        <a class="text-purple-800 truncate nav-link hover:text-purple-600" href="/#home">
                            <span class="mr-2 fa fa-home"></span> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="text-purple-800 truncate nav-link hover:text-purple-600" href="/#orders">
                            <span class="mr-2 fa fa-list-alt"></span> Orders </a>
                    </li>
                    <li class="nav-item">
                        <a class="text-purple-800 nav-link hover:text-purple-600" href="/#products">
                            <span class="mr-2 fa fa-cart-plus"></span> Products </a>
                    </li>
                    <li class="nav-item">
                        <a class="text-purple-800 nav-link hover:text-purple-600" href="/#customers">
                            <span class="mr-2 fa fa-user"></span> Customers </a>
                    </li>
                    <li class="nav-item">
                        <a class="text-purple-800 nav-link hover:text-purple-600" href="/#reports">
                            <span class="mr-2 fa fa-chart-bar"></span> Reports </a>
                    </li>
                    <li class="nav-item">
                        <a class="text-purple-800 nav-link hover:text-purple-600" href="/#int">
                            <span class="mr-2 fa fa-layer-group"></span> Integrations </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main role="main" class="w-full px-2 pt-1 sm:w-2/3 md:w-3/4">
            <h1 class="text-2xl" id="home">Main Content</h1>
            <p>Let's look at the base Tailwind classes that are used for this layout. There are 2 columns. The left sidebar (aside), and the main content area on the right. </p>
            <p class="pt-4"> The flexbox (parent) container: </p>
            <ul>
                <li><span class="text-purple-700">flex</span> - for <code>dislay:flex</code></li>
                <li>flex-row - for <code>flex-direction: row</code></li>
                <li>flex-wrap - for <code>flex-wrap: wrap</code></li>
                <li>py-4 - for <code>padding-(top|bottom): 1rem</code></li>
            </ul>
            <p class="pt-4"> The aside (left) column: </p>
            <ul>
                <li>w-full - for 100% width</li>
                <li>sm:w-1/3 - for 33% width on sm and larger</li>
                <li>md:w-1/4 - for 25% width on md and larger</li>
                <li>px-2 - for <code>padding-(left|right): .5rem</code></li>
            </ul>
            <p class="pt-4"> The main (right) column: </p>
            <ul>
                <li>w-full - for 100% width</li>
                <li>sm:w-1/3 - for 66% width on sm and larger</li>
                <li>md:w-1/4 - for 75% width on md and larger</li>
                <li>pt-1 - for <code>padding-top: .25rem</code></li>
                <li>px-2 - for <code>padding-(left|right): .5rem</code></li>
            </ul>
            <hr class="my-5">
            <section class="min-h-screen" id="orders">
                <h1 class="mt-5 text-2xl">Orders</h1>
                <p class="pb-4">Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
            </section>
            <section class="min-h-screen" id="products">
                <h1 class="mt-5 text-2xl">Products</h1>
                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
            </section>
            <section class="min-h-screen" id="customers">
                <h1 class="mt-5 text-2xl">Customers</h1>
                <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
            </section>
            <section class="min-h-screen" id="reports">
                <h1 class="mt-5 text-2xl">Reports</h1>
                ...
                <p>Put'cha content here</p>
            </section>
            <section class="" id="int">
                <h1 class="mt-5 text-2xl">Integrations</h1>
                ...
                <p>Put'cha content here</p>
            </section>
        </main>
    </div>
</div>
<footer class="mt-auto bg-black">
    <div class="container p-4 mx-auto text-white">
        <h1 class="text-2xl" >Footer</h1>
        <div class="flex">
            <div class="flex flex-col flex-grow">
                <a href="/#home">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex flex-col flex-grow">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex flex-col flex-grow">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
            <div class="flex flex-col flex-grow">
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
                <a href="#">Boom</a>
            </div>
        </div>
        <div class="py-4 text-xs text-right">
            <a href="">&copy;2021 Someco Inc.</a>
        </div>
       
    </div>
</footer>
</template>

<script>

</script>

<style>
</style>
