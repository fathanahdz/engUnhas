<template>
    <div>
    <div class="flex-col overflow-hidden relative flex bg-blue2">
        <section class="mx-16 mt-9">
            <div class="flex flex-col gap-2 relative items-center justify-center h-full w-full">
                <h1 class="text-blue text-xl font-bold text-center">   
                    TEKNIK INFO
                </h1>
                <h1 class="py-2 px-5 bg-grey text-xl font-bold text-center text-blue">
                    BERITA DAN ARTIKEL
                </h1>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-6">
                <div class="flex justify-center items-center">
                    <div class="flex flex-col items-stretch w-full">
                    <img loading="lazy" src="@/assets/images/berita-1.png" class="aspect-[1.7] object-fit-cover object-center max-w-[580] overflow-hidden max-w-full" />
                    <h3 class="text-black text-justify text-l font-bold py-4">
                        <a href="#">Kedatangan Profesor Dari Jepang, Departemen Teknik Industri Fakultas Teknik Universitas Hasanuddin Laksanakan International Guest Lecturer</a>
                    </h3>
                    <p class="line-clamp-2 text-justify text-black">
                        Departemen Teknik Industri Fakultas Teknik Universitas Hasanuddin menggelar
                        International Guest Lecturer yang dibawakan oleh Profesor yang juga sebagai 
                        Head Of Laboratory Ergonomics for All Ages and Abilities dari Kyushu 
                        University Prof. Satoshi Muraki, Ph.D., CPE. International Guest Lecturer 
                        dilaksanakan pada Senin 9, Oktober 2023 dan dilaksanakan secara daring dan 
                        luring di Gedung CSA LT 1 Fakultas Teknik Universitas Hasanuddin.
                    </p>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="flex flex-col items-stretch w-full">
                    <img loading="lazy" src="@/assets/images/berita-2.png" class="aspect-[1.7] object-fit-cover object-center max-w-[580] overflow-hidden max-w-full" />
                    <h3 class="text-black text-justify text-l font-bold py-4">
                        <a href="#">Fakultas Teknik Universitas Hasanuddin Mengembangkan Jejaring Kerjasama dengan Fakultas Teknik Universitas Siliwangi, Tasikmalaya.</a>
                    </h3>
                    <p class="line-clamp-2 text-justify text-black">
                        Fakultas Teknik Universitas Hasanuddin dan Fakultas Teknik Universitas
                         Siliwangi Tasikmalaya melakukan kerjasama dengan menandatangani 
                         Memorandum of Agreement. Penandatanganan MoA ini berlangsung pada
                         Jumat, 8 September 2023 di Kampus II Fakultas Teknik Universitas 
                         Siliwangi, Tasikmalaya, Jawa Barat.
                    </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-end inset-y-0 text-blue underline mt-4 mb-9 text-right">
                <a href="#">Lihat berita lainnya >></a>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
    async function getBerita(){
        const res = await fetch("http://localhost:8055/items/Berita")
        const data = await res.json()
        return data.data
    }

    const Berita = getBerita()
    console.log(Berita)
</script>