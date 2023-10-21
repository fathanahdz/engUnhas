<template>
    <div>
      <header class="bg-blue-200 flex flex-col px-5">
        <div class="text-sm self-center flex w-full max-w-[1216px] items-start justify-between gap-5 mt-5 mb-4 max-md:max-w-full max-md:flex-wrap">
          <div class="items-start flex gap-4 ml-16">
            <div class="text-blue text-justify font-medium self-stretch">
              Phone: +(62) 852-9999-9958
            </div>
            <div class="text-blue text-justify font-medium self-stretch">
              Email: teknik@unhas.ac.id
            </div>
          </div>
          <div class="justify-between items-start flex max-w-full gap-5 max-md:justify-center mr-16">
            <a href="#" class="text-blue text-justify text-base font-medium self-stretch">
              SITE MAP
            </a>
            <a href="#" class="text-blue text-justify text-base font-medium self-stretch w-[123px]">
              QUICK ACCESS
            </a>
            <div class="justify-center items-start self-center flex gap-4 my-auto">
              <img loading="lazy" src="~/assets/images/id.png">
              <img loading="lazy" src="~/assets/images/uk.png">
            </div>
          </div>
        </div>
      </header>
      <div class="justify-left items-start bg-blue flex px-5">
        <img loading="lazy" src="~/assets/images/logo.png" class="object-cover object-left w-[500px] max-w-full ml-16 my-8" />
      </div>
      <div class="justify-center items-center content-center flex-wrap bg-yellow flex flex-col">
        <nav class="self-center flex w-full max-w-[1216px] items-start justify-between gap-5 my-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div class="items-start self-stretch flex justify-between gap-1 ml-16">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Beranda</a>
            </div>
            <div id="nav-item" class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Profil</a>
                <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                <ul id="submenu" class="absolute hidden bg-white text-blue text-justify text-base font-bold self-stretch w-[200px]">
                    <li><a href="#">Berita</a></li>
                    <li><a href="#">Sejarah Singkat</a></li>
                    <li><a href="#">Visi, Misi, dan Sasaran</a></li>
                    <li><a href="#">Manajemen</a></li>
                    <li><a href="#">Struktur Organisasi</a></li>
                    <li><a href="#">Master Plan</a></li>
                    <li><a href="#">Peta Kampus</a></li>
                    <li><a href="#">Mediatek</a></li>
                </ul>
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Akademik</a>
                <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Sumber Daya</a>
                <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div> 
            <div class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">K3</a>
                <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Riset dan Inovasi</a>
                <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
              <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Kemitraan</a>
              <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
              <a href="#" class="text-blue text-justify text-base font-bold self-stretch">GPM-PR</a>
              <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1">
              <a href="#" class="text-blue text-justify text-base font-bold self-stretch">COT</a>
              <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
            <div class="items-start self-stretch flex justify-between gap-1 mr-16">
              <a href="#" class="text-blue text-justify text-base font-bold self-stretch">Dharma Wanita</a>
              <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
            </div>
        </nav>
      </div>
    </div>
</template>
          
