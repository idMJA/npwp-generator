/*!
 * NPWPbyWarkim v.1 (https://npwp.warkim.com)
 * Author: Warkim (Warkim Rapii)
 * Website: www.warkim.com
 * Contact: me@warkim.com
 * Facebook: warkim.rapii
 * Instagram: warkimwarkim
 *
 * Copyright 2020 npwpbywarkim
 * Shareware license
 * Do not modification, remove any attributes in sources or in this program.
 */
$(document).ready(function(){
    // VALIDASI KODE KPP -------------------------------------
   // COMING SOON  
   // VARIABEL NILAI DEFAULT
           var kpp_default     = '000'; // 3 digit kode kantor pajak pratama (kpp) npwp
           var cabang_default  = '000';  // 3 digit kode cabang npwp
           
       // MENU NAVIGASI
           function TampilkanGenerate(){
               document.querySelector('#form-generate').removeAttribute('hidden');
               $('.row-form').addClass('justify-content-center');
           }
           function SembunyikanGenerate(){
               document.querySelector('#form-generate').setAttribute('hidden','');
           }
           function TampilkanValidasi(){
               document.querySelector('#form-validasi').removeAttribute('hidden');
               $('.row-form').addClass('justify-content-center');
           }
           function SembunyikanValidasi(){
               document.querySelector('#form-validasi').setAttribute('hidden','');
           }
   
           $('#menu-generate').click(function(){
               TampilkanGenerate();
               SembunyikanValidasi();
           });
           $('#menu-validasi').click(function(){
               TampilkanValidasi();
               SembunyikanGenerate();
           });
           $('#link-generate').click(function(){
               TampilkanGenerate();
               SembunyikanValidasi();
           });
   
       // MULAI FUNGSI UNTUK NPWP
           function AmbilKodeKPP(kpp){
               kpp = $('#input-kode-kpp').val();
               return kpp;
           } // end of AmbilKodeKPP function
   
           function AmbilKodeCabang(cabang){
               cabang = $('#input-kode-cabang').val();
               return cabang;
           } // end of AmbilKodeCabang function
   
           function BtnReset() {
               $('#modal-reset').click(function(){
                   $('.pesan-khusus').remove();
                   $('#modal-reset').remove();
   
                   $('#input-kode-kpp').val('');
                   $('#input-kode-cabang').val('');
   
                   $('.pesan-inputan').append(`
                       <div class="pesan-khusus alert alert-primary alert-dismissible fade show" role="alert">
                           <strong>Successfully reset!</strong> Please close and Generate NPWP.
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                           </button>
                       </div>`);
               });
           } // end of Reset button function
   
           
           $('#ubah-kpp').click(function(){
               
               $('.pesan-khusus').remove();
   
               $('#modal-simpan').click(function(){
                  
                   $('.pesan-khusus').remove();
   
                   const kodeKpp = AmbilKodeKPP($('#input-kode-kpp').val());
                   const kodeCabang = AmbilKodeCabang($('#input-kode-cabang').val());
   
                   const cek_min_kpp       = kodeKpp.toString().length;
                   const cek_min_cabang    = kodeCabang.toString().length;
   
                   if( cek_min_kpp < 3 && cek_min_cabang < 3) {
                       $('#input-kode-kpp').val('');
                       $('#input-kode-cabang').val('');
   
                           $('.pesan-inputan').append(`
                           <div class="pesan-khusus alert alert-danger alert-dismissible fade show" role="alert">
                               <strong>The KPP/Branch Code must be filled in with 3 digits!</strong> Please fill in or close.
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                               </button>
                           </div>`);
                           
                       } else if(cek_min_kpp < 3 && cek_min_cabang >= 3){
                           $('#input-kode-kpp').val('');
                           $('.pesan-inputan').append(`
                           <div class="pesan-khusus alert alert-warning alert-dismissible fade show" role="alert">
                               <strong>The KPP code must be 3 digits!</strong> Please fill in or close.
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                               </button>
                           </div>`);
                       } else if(cek_min_kpp >= 3 && cek_min_cabang < 3){
                           $('#input-kode-cabang').val('');
                           $('.pesan-inputan').append(`
                           <div class="pesan-khusus alert alert-warning alert-dismissible fade show" role="alert">
                               <strong>The KPP code must be 3 digits!</strong> Please fill in or close.
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                               </button>
                           </div>`);
                       } else {
                           $('.pesan-inputan').append(`
                           <div class="pesan-khusus alert alert-success alert-dismissible fade show" role="alert">
                           <strong>Saved!</strong> Please close and Generate NPWP.
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                           </button>
                           </div>`);
   
                           $('#modal-reset').remove();
                           $('.modal-footer').first().append(`
                           <button type="reset" class="btn btn-outline-danger" id="modal-reset"><i class="fa fa-recycle"></i> Reset</button>`);
   
                       }
   
                       BtnReset();
                   });
           }); // end of ubah data function
   
           // =================================================================
           // GENERATE NPWP
           // =================================================================
       
           function generateNPWP(){
   
       // TAHAP PERTAMA    : MENEMUKAN 8 DIGIT NILAI
               const a = Math.round(Math.random() * 9);
               const b = Math.round(Math.random() * 9);
               const c = Math.round(Math.random() * 9);
               const d = Math.round(Math.random() * 9);
               const e = Math.round(Math.random() * 9);
               const f = Math.round(Math.random() * 9);
               const g = Math.round(Math.random() * 9);
               const h = Math.round(Math.random() * 9);
               // JADIKAN ARRAY
               const angka = [a,b,c,d,e,f,g,h];
       // TAHAP KEDUA      : MENGKALIKAN BARIS
               var thp2 = [
                   angka[0] * 1,
                   angka[1] * 2,
                   angka[2] * 1,
                   angka[3] * 2,
                   angka[4] * 1,
                   angka[5] * 2,
                   angka[6] * 1,
                   angka[7] * 2
                   ];
       // TAHAP KETIGA     : JADIKAN SATUAN DAN JUMLAHKAN HASILNYA
                   var nilaiGenap1 = Number(thp2[1].toString().substr(0,1)) + Number(thp2[1].toString().substr(1,1));
                   var nilaiGenap2 = Number(thp2[3].toString().substr(0,1)) + Number(thp2[3].toString().substr(1,1));
                   var nilaiGenap3 = Number(thp2[5].toString().substr(0,1)) + Number(thp2[5].toString().substr(1,1));
                   var nilaiGenap4 = Number(thp2[7].toString().substr(0,1)) + Number(thp2[7].toString().substr(1,1));
                   // DIJUMLAHKAN SEMUA
                   const barisGanjil   = thp2[0] + thp2[2] + thp2[4] + thp2[6];
                   const barisGenap    = nilaiGenap1 + nilaiGenap2 + nilaiGenap3 + nilaiGenap4;
                   // HASIL TAHAP KETIGA
                   const jumlah = barisGanjil + barisGenap;
      
                   // RANGE
                   // 10 - 20 <= 20
                   // 21 - 30 <= 30
                   // 31 - 40 <= 40
                   // 41 - 50 <= 50
                   // 51 - 60 <= 60
                   // 61 - 70 <= 70
                   
       // TAHAP KEEMPAT    : PEMBULATAN KE ATAS MENJADI PULUHAN
                   var key;
                   if(jumlah <= 20) {
                       key = 20 - jumlah;
                   } else if(jumlah <= 30){
                       key = 30 - jumlah;
                   } else if(jumlah <= 40){
                       key = 40 - jumlah;
                   } else if(jumlah <= 50) {
                       key = 50 - jumlah;
                   } else if(jumlah <=60) {
                       key = 60 - jumlah;
                   } else if(jumlah<=70) {
                       key = 70 - jumlah;
                   } else {
                       console.log('lebih dari 70');
                   }
                   const kpp = AmbilKodeKPP();
                   const cabang = AmbilKodeCabang();
   
                   if( kpp === '' && cabang === ''){
                       $('#hasil-generate').text(
                           angka[0]+''
                           +angka[1]+'.'
                           +angka[2]+''
                           +angka[3]+''
                           +angka[4]+'.'
                           +angka[5]+''
                           +angka[6]+''
                           +angka[7]+'.'
                           +key+'-'+kpp_default+'.'+cabang_default);
                           $('#hasil-generate-rekomendasi').text(
                               angka[0]+''
                               +angka[1]+''
                               +angka[2]+''
                               +angka[3]+''
                               +angka[4]+''
                               +angka[5]+''
                               +angka[6]+''
                               +angka[7]+''
                               +key+''+kpp_default+''+ cabang_default);
                           
                   } else if( kpp < 1 && cabang < 1){
                       $('#hasil-generate').text(
                           angka[0]+''
                           +angka[1]+'.'
                           +angka[2]+''
                           +angka[3]+''
                           +angka[4]+'.'
                           +angka[5]+''
                           +angka[6]+''
                           +angka[7]+'.'
                           +key+'-'+kpp_default+'.'+cabang_default);
                           $('#hasil-generate-rekomendasi').text(
                               angka[0]+''
                               +angka[1]+''
                               +angka[2]+''
                               +angka[3]+''
                               +angka[4]+''
                               +angka[5]+''
                               +angka[6]+''
                               +angka[7]+''
                               +key+''+kpp_default+''+ cabang_default);
                           
                   }
                   else if(kpp > 0 && cabang > 0){
                       $('#hasil-generate').text(
                           angka[0]+''
                           +angka[1]+'.'
                           +angka[2]+''
                           +angka[3]+''
                           +angka[4]+'.'
                           +angka[5]+''
                           +angka[6]+''
                           +angka[7]+'.'
                           +key+'-'+kpp+'.'+ cabang);
                           $('#hasil-generate-rekomendasi').text(
                               angka[0]+''
                               +angka[1]+''
                               +angka[2]+''
                               +angka[3]+''
                               +angka[4]+''
                               +angka[5]+''
                               +angka[6]+''
                               +angka[7]+''
                               +key+''+kpp+''+ cabang);
                           
                   } else if(kpp < 1 && cabang > 0){
                       $('#hasil-generate').text(
                           angka[0]+''
                           +angka[1]+'.'
                           +angka[2]+''
                           +angka[3]+''
                           +angka[4]+'.'
                           +angka[5]+''
                           +angka[6]+''
                           +angka[7]+'.'
                           +key+'-'+kpp_default+'.'+ cabang);
                           $('#hasil-generate-rekomendasi').text(
                               angka[0]+''
                               +angka[1]+''
                               +angka[2]+''
                               +angka[3]+''
                               +angka[4]+''
                               +angka[5]+''
                               +angka[6]+''
                               +angka[7]+''
                               +key+''+kpp_default+''+ cabang);
                   }
                   else if(kpp > 0 && cabang < 1){
                       $('#hasil-generate').text(
                           angka[0]+''
                           +angka[1]+'.'
                           +angka[2]+''
                           +angka[3]+''
                           +angka[4]+'.'
                           +angka[5]+''
                           +angka[6]+''
                           +angka[7]+'.'
                           +key+'-'+kpp+'.'+cabang_default);
                           $('#hasil-generate-rekomendasi').text(
                               angka[0]+''
                               +angka[1]+''
                               +angka[2]+''
                               +angka[3]+''
                               +angka[4]+''
                               +angka[5]+''
                               +angka[6]+''
                               +angka[7]+''
                               +key+''+kpp+''+ cabang_default);
                   }
               
           } 
           // end fungsi generate npwp
   
           $('#generate-npwp').click(function(){
               generateNPWP();    
           });
   
           $('#modal-tutup').click(function(){
               var cek_isi_kode_kpp = $('#input-kode-kpp').val().toString().length;
               var cek_isi_kode_cabang = $('#input-kode-cabang').val().toString().length;
   
               if( cek_isi_kode_kpp >= 3 && cek_isi_kode_cabang >= 3){
                   generateNPWP();        
               } else if(cek_isi_kode_kpp < 3 && cek_isi_kode_cabang < 3){
                   $('#input-kode-kpp').val('');
                   $('#input-kode-cabang').val(''); 
   
                   $.confirm({
                       title: '<i class="fa fa-exclamation text-danger"></i> Perhatian',
                       content: `KPP dan Cabang jadi 000 gaes!
                               <br>karena Anda tidak mengisi atau kurang dari 3 digit`,
                       theme: 'dark',
                       type: 'red',
                       autoClose: 'tutup|6000',
                       animation: 'zoom',
                       animationClose: 'rotate',
                       buttons: {
                           tutup: {
                               text: 'Tutup',
                               btnClass: 'btn-red',
                               action: function(){}
                           }
                       }
                   });
   
                   generateNPWP();
   
               } else if(cek_isi_kode_kpp < 3) {
                   $('#input-kode-kpp').val('');
                   generateNPWP();
               } else if(cek_isi_kode_cabang < 3){
                   $('#input-kode-cabang').val('');
                   generateNPWP();
               }
               
              
           });
   
           // =================================================================
           // VALIDASI NPWP
           // =================================================================
   
           function AmbilNilaiNPWP(){
               //ambil nilai input npwp
               const ambilIsiNPWP = $('#input-nomor-npwp').val();
               return ambilIsiNPWP;
           }
           function ResetValidasiNPWP(){
               $('.pesan-khusus-tambahan').remove();
               $('.pesan-khusus').remove();
               const ambilNilaiNPWP = $('#input-nomor-npwp').val('');
               // const resetNilaiNPWP = ambilNilaiNPWP.val('');
               return ambilNilaiNPWP;
           }
           // Fungsi Hitung dan Ambil Angka Ke Sembilan
           function HitungNPWP(){
   
               const i = AmbilNilaiNPWP().substr(0, 1);
               const j = AmbilNilaiNPWP().substr(1, 1);
               const k = AmbilNilaiNPWP().substr(2, 1);
               const l = AmbilNilaiNPWP().substr(3, 1);
               const m = AmbilNilaiNPWP().substr(4, 1);
               const n = AmbilNilaiNPWP().substr(5, 1);
               const o = AmbilNilaiNPWP().substr(6, 1);
               const p = AmbilNilaiNPWP().substr(7, 1);
               // JADIKAN ARRA7
               const angka = [i,j,k,l,m,n,o,p];
       // TAHAP KEDUA      : MENGKALIKAN BARIS
               var thp2 = [
                       angka[0] * 1,
                       angka[1] * 2,
                       angka[2] * 1,
                       angka[3] * 2,
                       angka[4] * 1,
                       angka[5] * 2,
                       angka[6] * 1,
                       angka[7] * 2
                   ];
       // TAHAP KETIGA     : JADIKAN SATUAN DAN JUMLAHKAN HASILNYA
                   var nilaiGenap1 = Number(thp2[1].toString().substr(0,1)) + Number(thp2[1].toString().substr(1,1));
                   var nilaiGenap2 = Number(thp2[3].toString().substr(0,1)) + Number(thp2[3].toString().substr(1,1));
                   var nilaiGenap3 = Number(thp2[5].toString().substr(0,1)) + Number(thp2[5].toString().substr(1,1));
                   var nilaiGenap4 = Number(thp2[7].toString().substr(0,1)) + Number(thp2[7].toString().substr(1,1));
                   // DIJUMLAHKAN SEMUA
                   const barisGanjil   = thp2[0] + thp2[2] + thp2[4] + thp2[6];
                   const barisGenap    = nilaiGenap1 + nilaiGenap2 + nilaiGenap3 + nilaiGenap4;
                   // HASIL TAHAP KETIGA
                   const jumlah = barisGanjil + barisGenap;
   
                   var kesembilan;
                   if(jumlah <= 20) {
                       kesembilan = 20 - jumlah;
                   } else if(jumlah <= 30){
                       kesembilan = 30 - jumlah;
                   } else if(jumlah <= 40){
                       kesembilan = 40 - jumlah;
                   } else if(jumlah <= 50) {
                       kesembilan = 50 - jumlah;
                   } else if(jumlah <=60) {
                       kesembilan = 60 - jumlah;
                   } else if(jumlah<=70) {
                       kesembilan = 70 - jumlah;
                   } else {
                       console.log('lebih dari 70');
                   }
                   return kesembilan;
           }
           // FUNGSI VALIDASI
           function Validasi(){
               
               //ambil nilai input npwp
               AmbilNilaiNPWP($('#input-nomor-npwp').val());
               let panjang_npwp = AmbilNilaiNPWP().toString().length;            
               // ambil dan jumlahkan 8 digit awal
               var delapanAwal = AmbilNilaiNPWP().substring(0, 8);
               // ambil nilai ke-9
               var nilaiKeSembilan = AmbilNilaiNPWP().substr(8, 1);
               // KONDISI VALIDASI NPWP
               if(AmbilNilaiNPWP() == ''){
                   $('.pesan-khusus').remove();
                   $('.pesan-khusus-validasi').append(`
                   <div class="alert pesan-khusus alert-warning alert-dismissable fade show" role="alert"><i class="fa fa-question-circle"></i> <strong>NPWP is empty guys!</strong> Please fill in or close.
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   </div>
                   `);
               } else if(AmbilNilaiNPWP() < 1){
                   $('.pesan-khusus').remove();
                   $('.pesan-khusus-validasi').append(`
                   <div class="alert pesan-khusus alert-info alert-dismissable fade show" role="alert"><i class="fa fa-question-circle"></i> NPWP is empty = <strong>Don't have NPWP guys!</strong>
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   </div>
                   `);
               }else if(AmbilNilaiNPWP() > 0){
                   
                   $('.pesan-khusus').remove();
                   if(nilaiKeSembilan == HitungNPWP()){ // jika angka kesembilan sama dengan HitungNPWP
                       $('.pesan-khusus-validasi').append(`<div class="alert pesan-khusus font-weight-bold alert-success text-uppercase alert-dismissable fade show" role="alert"><i class="fa fa-thumbs-up"></i> npwp valid
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                       </div>
                       `);
                   } 
                   else { // jika angka kesembilan tidak sama dengan HitungNPWP
                       $('.pesan-khusus-validasi').append(`<div class="alert pesan-khusus alert-danger text-uppercase font-weight-bold alert-dismissable fade show" role="alert"><i class="fa fa-thumbs-down"></i> npwp invalid
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                       </div>
                       `);
                   }
               } 
               // KONDISI PANJANG NPWP            
               if(AmbilNilaiNPWP() < 1){
                   $('.pesan-khusus-tambahan').remove();
               }
               else if(panjang_npwp < 15){
                   $('.pesan-khusus-tambahan').remove();
                   $('.pesan-khusus-validasi').append(`
                   <div class="alert pesan-khusus-tambahan alert-light alert-dismissable fade show" role="alert"><i class="fa fa-question-circle"></i> <strong>NPWP length `+panjang_npwp+` ?</strong> it should be 15 digits guys!.
                       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   </div>
                   `);
               }
               
           } // end Validasi funstion
   
       // FUNSI VALIDASI DENGAN KLIK
           $('#validasi-npwp').click(function(){
               $('.pesan-khusus-tambahan').remove();
               Validasi();
           }); // end button validasi npwp function
   
       // FUNGSI VALIDASI DENGAN ENTER
           $('#input-nomor-npwp').on('keyup', function(e){
               if(e.keyCode == 13){
                   $('.pesan-khusus-tambahan').remove();
                   Validasi();
               }
           });
       
       // FUNGSI RESET PADA VALIDASI NPWP    
           $('#reset-npwp').click(function(){
               ResetValidasiNPWP();
           }); // end button reset npwp function
   
       // FUNGSI NOTIFIKASI
           $('.notifikasi').fadeTo(0, 0.8);
           $('.notifikasi').click(function(){
               $('.container-notifikasi').remove();
           });
           $('.close').click(function(){
               $('.container-notifikasi').remove();
           });
   
   
       }); // end render document
