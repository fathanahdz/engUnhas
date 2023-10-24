<template>
  <footer class="bg-blue flex flex-col mt-10 text-white h-[70vh] justify-center">
    <div id="final" class="flex flex-row my-4 justify-around py-10">
      <div id="footer-with-logo" class="w-[40vw]">
        <img src="@/assets/images/logo.png" alt="Logo" class="">
        <p class="my-4">Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan. 92171</p>
        <p>+(62) 852-9999-9958</p>
        <p>teknik@unhas.ac.id</p>
        <div id="socmed" class="flex flex-row gap-1 mt-4">
          <img src="@/assets/images/facebook.png" alt="Facebook">
          <img src="@/assets/images/twitter.png" alt="Twitter">
          <img src="@/assets/images/instagram.png" alt="Instagram">
        </div>
      </div>
      <div id="list-departemen" class="w-[40vw]">
          <h1 class="text-xl"><b>Departemen & Program Studi</b></h1>
          <div id="departemen-program-studi" class="flex flex-row justify-between gap-5 mt-2 text-sm">
          <ul class="flex flex-col justify-between gap-3">
            <li>Departemen Teknik Sipil</li>
            <li>Departemen Teknik Mesin</li>
            <li>Departemen Teknik Perkapalan</li>
            <li>Departemen Teknik Elektro</li>
            <li>Departemen Arsitektur</li>
            <li>Departemen Teknik Geologi</li>
            <li>Departemen Teknik Industri</li>
          </ul>
          <ul class="flex flex-col justify-between gap-3">
            <li>Departemen Teknik Kelautan</li>
            <li>Departemen Teknik Sistem Perkapalan</li>
            <li>Departemen Teknik PWK</li>
            <li>Departemen Teknik Pertambangan</li>
            <li>Departemen Teknik Informatika</li>
            <li>Departemen Teknik Lingkungan</li>
            <li>Departemen Teknik Metalurgi & Material</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="copyrights" class="flex justify-center items-center border-t-2 border-white basis-[10vh]">
      <p>© 2023 Fakultas Teknik Universitas Hasanuddin</p>
    </div>
  </footer>
</template>