<template>
    <div class=" flex flex-row justify-center items-center py-12 ">

        <div v-if="maps.show_adresse" class=" ml-10 h-full">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.866140869463!2d-122.472867!3d37.803324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1703942729883!5m2!1sen!2sus"
                width="700" height="700" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

        </div>


        <div class="flex flex-col justify-center items-center ">
            <div class="pb-12">
                <h1 v-if="contact.show_title" class="font-semibold text-black pb-6">{{contact.title}}</h1>
                <div v-if="contact.show_under_title" class="flex flex-row justify-around items-start">
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                    <div>
                        <p class="text-black font-light text-center text-sm">
                            {{contact.under_title}}
                        </p>
                    </div>
                    <div class="border-b-2 border-red-600 w-6 ">
                    </div>
                </div>
            </div>
            <si-app-loader :placement="'AFTER_CONTACT_PAGE'"
                class=" text-black mx-10  pl-10" />
        </div>

    </div>
</template>

<script>
export default {
data() {
    return {
        contact: this.$settings.sections.contact,
        maps: this.$settings.sections.maps,
    }
},
}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>