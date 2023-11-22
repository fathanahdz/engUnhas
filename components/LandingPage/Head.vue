<template>
    <div>
      <header class="bg-blue-200 flex flex-col">
        <div class="text-sm self-center flex w-full max-w-[80vw] justify-between items-start gap-5 mt-5 mb-4 max-md:max-w-full max-md:flex-wrap">
          <div class="items-start flex gap-4 self-start">
            <div class="text-blue text-justify font-medium self-stretch">
              Phone: +(62) 852-9999-9958
            </div>
            <div class="text-blue text-justify font-medium self-stretch">
              Email: teknik@unhas.ac.id
            </div>
          </div>
          <div class="self-end justify-between items-start flex max-w-full gap-5 max-md:justify-center">
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
      <div class="justify-left items-start bg-blue flex pl-[10vw]">
        <img loading="lazy" src="~/assets/images/logo.png" class="object-cover object-left w-[500px] max-w-full my-8"/>
      </div>
      <div class="justify-center items-center content-center flex-wrap bg-yellow flex flex-col">
        <nav class="self-center flex w-full max-w-[100%] items-start justify-between gap-5 my-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div class="items-start self-stretch flex justify-between gap-1">
                <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">Beranda</a>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">Profil</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Berita</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Sejarah Singkat</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Visi, Misi, dan Sasaran</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Manajemen</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Struktur Organisasi</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Master Plan</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Peta Kampus</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Mediatek</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">Akademik</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Departemen</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Program Profesi</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Program Magister</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Program Doktor</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Akreditasi</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Kalender Akademik</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch whitespace-nowrap">Sumber Daya</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Guru Besar</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Tenaga Pendidikan</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Sarana dan Prasarana</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Perpustakaan</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">K3</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Profil K3</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Struktur Organisasi K3</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Tentang K3 FT-UH</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">File Pendukung</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">Kemahasiswaan</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">UPT Asrama (RAMTEK)</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Pengembangan Karakter Mahasiswa</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Peningkatan Prestasi Mahasiswa</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Mahasiswa Inbound dan Outbound</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Alumni</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Aturan Kemahasiswaan</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Pengumuman</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch whitespace-nowrap">Riset dan Inovasi</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Daftar Penelitian LBE Tahun 2020</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Hasil Inovasi</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Hak Kekayaan Intelektual</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">Kemitraan</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Kerjasama Dalam Negeri</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Kerjasama Luar Negeri</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch whitespace-nowrap">GPM-PR</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Profil GPM-PR</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Dokumen Mutu</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Audit Mutu Akademik Internal</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Akreditasi</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">LAM Teknik</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Laporan Kepuasan Pengguna</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Survei Kepuasan Layanan Mahasiswa</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Galeri</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch">COT</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">COT Website</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Jurnal COT</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">COT Newsletter</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">U-I-G Collaboration</div>
                </div>
            </div>
            <div class="items-start self-stretch flex flex-col justify-between gap-1 relative inline-block dropdown-area">
                <span class="items-start self-stretch flex justify-between gap-1">
                  <a href="#" class="text-blue text-justify text-sm font-bold self-stretch whitespace-nowrap">Dharma Wanita</a>
                  <img loading="lazy" src="~/assets/images/dropdown.png" class="aspect-square object-cover object-center w-4 overflow-hidden self-center shrink-0 my-auto" />
                </span>
                <div class="hidden absolute z-10 right-0 top-6 max-w-[25vw] dropdown-content">
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Halaman Utama Dharma Wanita</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Profil Dharma Wanita</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Stuktur Organisasi Dharmawanita</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Program Kerja</div>
                  <div class="py-2 px-5 bg-yellow overflow-hidden whitespace-nowrap">Kegiatan Dharma Wanita</div>
                </div>
            </div>
        </nav>
      </div>
    </div>
</template>
          
