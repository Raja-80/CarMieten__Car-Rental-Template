<template>
    <div class=" flex flex-row justify-center items-center py-12 ">

        <div class=" ml-10 h-full">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.866140869463!2d-122.472867!3d37.803324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1703942729883!5m2!1sen!2sus"
                width="700" height="700" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

        </div>


        <div class="flex flex-col justify-center items-center ">
            <div class="pb-12">
                <h1 class="font-semibold text-black pb-6">Contact Us</h1>
                <div class="flex flex-row justify-around items-start">
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                    <div>
                        <p class="text-black font-light text-center text-sm">
                            DROP US LINE
                        </p>
                    </div>
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                </div>
            </div>
            <si-app-loader :placement="'AFTER_CONTACT_PAGE'"
                class=" text-black mx-10  pl-10" />
        </div>

        <!-- <div class="flex flex-col justify-center items-center w-2/4">
            <div class="pb-12">
                <h1 class="font-semibold text-black pb-6">Contact Us</h1>
                <div class="flex flex-row justify-around">
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                    <div>
                        <p class="text-black font-light text-center text-sm">
                            DROP US LINE
                        </p>
                    </div>
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between w-full text-xs pb-16 ">
                <div>
                    <input type="text" placeholder="NAME"
                        class="py-4 px-24 pl-6 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">
                </div>
                <div>
                    <input type="email" placeholder="EMAIL"
                        class="px-24 py-4 pl-6 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">

                </div>
            </div>
            <div class="flex flex-row justify-between w-full text-xs pb-16 ">
                <div>
                    <input type="tel" placeholder="PHONE"
                        class="px-24 py-4 pl-6 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">

                </div>
                <div>
                    <input type="text" placeholder="SUBJECT"
                        class="px-24 py-4 pl-6 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">

                </div>
            </div>
            <div class="flex flex-row justify-between w-full text-xs pb-16 ">
                <textarea name="msg" cols="30" rows="10" placeholder="MESSAGE"
                    class="w-full py-4 pl-6 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">

                </textarea>
            </div>
            <div>
                <button type="submit" class="w-96 bg-black text-center font-light text-white hover:bg-blue-400 py-3">SEND
                    MESSAGE</button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>