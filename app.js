/**
 * LOGIKA INTERAKTIF LENGKAP: Peta Partisipasi Politik Non-Konvensional & Matriks Tindak Lanjut Aspirasi
 * Studi Kasus Mahasiswa FISIP Universitas Siliwangi (Unsil) - Kelompok 5
 * Versi 2.1 (Anti Tumpang Tindih & Desain Kotak Proporsional)
 */

// =============================================================================
// 1. DATA POKOK & STATE MANAJEMEN
// =============================================================================

// Data Bedah Teori (Tab 1: Ekosistem Partisipasi)
const dataTeori = {
    aktor: {
        badge: "Klaster Teori 1 • Civic Voluntarism & Rational Choice",
        judul: "Peran Sentral Organisasi Mahasiswa sebagai Pusat Koordinasi & Rekrutmen",
        deskripsi: "Berdasarkan teori Civic Voluntarism (Sidney Verba dkk.), partisipasi aktif membutuhkan sumber daya (pengetahuan, waktu, jaringan) dan mobilisasi. Wawancara terhadap 6 informan dari 4 organisasi/komunitas FISIP Unsil menunjukkan bahwa organisasi mahasiswa menjadi pusat koordinasi, perumusan kajian, dan rekrutmen massa, bukan sekadar kerumunan tanpa struktur."
    },
    bentuk: {
        badge: "Klaster Teori 1 • Pilihan Rasional (Anthony Downs)",
        judul: "Kalkulasi Rasional: Mengapa Jalur Non-Konvensional Dipilih?",
        deskripsi: "Menurut teori Pilihan Rasional (Anthony Downs), mahasiswa bertindak berdasarkan kalkulasi efektivitas. Jalur non-konvensional (demonstrasi, pernyataan sikap, policy brief, kampanye digital) dipilih karena dinilai lebih cepat menekan pengambil kebijakan dan mudah diakses dibandingkan jalur formal yang sering kali lambat dan sekadar menampung aspirasi—meski mahasiswa tidak menolak jalur formal sepenuhnya."
    },
    media: {
        badge: "Klaster Teori 2 • Framing (Entman), Ruang Publik (Habermas), & Connective Action",
        judul: "Media Sosial sebagai Penguat (Amplifier) & Dualisme Framing Media Massa",
        deskripsi: "Observasi pada 3 unggahan Instagram PMII membuktikan gerakan ini bukan connective action murni (Bennett & Segerberg), karena komando tetap pada organisasi dan jangkauan digitalnya organik tanpa rekayasa buzzer (astroturfing). Sementara itu, analisis 8 berita menunjukkan framing (Entman) yang terbelah: aksi dibingkai sebagai tuntutan akuntabilitas sekaligus gangguan ketertiban."
    },
    budaya: {
        badge: "Klaster Teori 3 • Budaya Politik (Gabriel Almond & Sidney Verba)",
        judul: "Menuju Budaya Sipil (Civic Culture) dan Stabilitas Politik Lokal",
        deskripsi: "Almond & Verba membagi budaya politik menjadi parokial, subjek, dan partisipan. Orientasi mahasiswa FISIP Unsil mengarah pada budaya sipil (civic culture): aktif mengkritisi kebijakan publik namun tetap mengedepankan dialog rasional. Stabilitas politik Kota Tasikmalaya sangat ditentukan oleh respons pemerintah: terbuka dan ditindaklanjuti memperkuat kepercayaan, sedangkan pengabaian memicu kekecewaan."
    }
};

// Data Detail Spektrum Bentuk Aksi (Bisa Diklik di Tab 1 Kolom 2)
const dataBentukAksi = {
    kajian: {
        judul: "Kajian Akademis & Diskusi Publik",
        ikon: "fa-solid fa-book-open",
        teori: "Teori Ruang Publik Deliberatif (Jürgen Habermas)",
        deskripsi: "Tahap awal dan fondasi intelektual gerakan mahasiswa FISIP Unsil. Sebelum turun aksi ke jalan, mahasiswa berkumpul di koridor kampus atau sekretariat organisasi untuk membedah rancangan peraturan daerah, data APBD Kota Tasikmalaya, serta literatur hukum tata negara.",
        implementasi: "Menghasilkan naskah kajian tebal yang memuat dasar yuridis dan sosiologis mengapa sebuah kebijakan daerah perlu dikritisi. Menghindarkan gerakan dari tuduhan aksi tanpa dasar logis."
    },
    policy_brief: {
        judul: "Penyusunan Policy Brief (Naskah Rekomendasi Kebijakan)",
        ikon: "fa-solid fa-file-lines",
        teori: "Teori Pilihan Rasional (Downs) & Advokasi Kebijakan Berbasis Bukti",
        deskripsi: "Ringkasan eksekutif 2-4 halaman yang memadatkan kajian akademis menjadi opsi kebijakan konkret dan dapat langsung dieksekusi oleh pejabat daerah (Bapemperda DPRD atau Wali Kota).",
        implementasi: "Diserahkan saat audiensi formal sebagai bukti bahwa mahasiswa tidak hanya mengkritik masalah, namun juga memberikan solusi kebijakan terukur."
    },
    sikap_petisi: {
        judul: "Pernyataan Sikap & Petisi Publik",
        ikon: "fa-solid fa-bullhorn",
        teori: "Teori Tindakan Kolektif Simbolik (Charles Tilly)",
        deskripsi: "Manifesto tertulis yang dibacakan di hadapan publik dan ditandatangani oleh aliansi pimpinan ormawa serta masyarakat sipil Tasikmalaya.",
        implementasi: "Berfungsi menyatukan persepsi antarorganisasi (PMII, HMI, HMJ) dan menjadi rilis resmi bagi jurnalis media massa lokal dalam meliput tuntutan aksi."
    },
    demonstrasi: {
        judul: "Demonstrasi Lapangan ke DPRD / Balai Kota",
        ikon: "fa-solid fa-person-walking-arrow-right",
        teori: "Teori Politik Kontroversial / Contentious Politics (Sidney Tarrow)",
        deskripsi: "Bentuk partisipasi non-konvensional paling kasat mata yang melibatkan konvoi dan unjuk rasa damai di pusat-pusat kekuasaan daerah (Gedung DPRD dan Bale Kota Tasikmalaya).",
        implementasi: "Dipilih sebagai kalkulasi rasional ketika jalur persuratan dan dialog tertutup dinilai menemui jalan buntu (stalemate) di birokrasi pemerintah."
    },
    propaganda_digital: {
        judul: "Propaganda Media Sosial & Amplifikasi Digital (Instagram)",
        ikon: "fa-brands fa-instagram",
        teori: "Teori Framing (Entman) & Amplifikasi Ruang Siber",
        deskripsi: "Penyebaran infografis, poster konsolidasi, petisi online, dan siaran langsung (live streaming) aksi demonstrasi melalui akun media sosial ormawa.",
        implementasi: "Observasi menunjukkan akun seperti Instagram PMII Unsil menjangkau ratusan komentar warga lokal secara organik tanpa pengerahan buzzer bayaran (astroturfing)."
    }
};

// Data Dinamis 4 Kolom Ekosistem Berdasarkan Klaster Isu Terpilih
const dataEkosistemByIsu = {
    "semua": {
        nama: "Semua Klaster Isu (4 Bidang Utama)",
        ket: "Mencakup isu Tata Kelola Pemerintahan daerah, kelestarian Lingkungan, kebijakan Pendidikan, dan kualitas Pelayanan Publik di Kota Tasikmalaya.",
        aktor: {
            sub: "4 Organisasi / Komunitas Mahasiswa FISIP Unsil",
            desc: "Termasuk PMII, HMJ Ilmu Politik, dan komunitas kajian mahasiswa sebagai pusat konsolidasi, perumusan naskah, dan rekrutmen massa."
        },
        bentuk: "Mahasiswa memadukan jalur intelektual, digital, hingga aksi lapangan tanpa menolak jalur formal sepenuhnya.",
        media: "Media sosial memperluas keterlibatan warga, sementara 8 berita media massa lokal memperlihatkan polarisasi framing (akuntabilitas vs ketertiban).",
        budaya: "Orientasi mahasiswa mengarah pada Budaya Sipil (Civic Culture): kritis namun tetap menjaga dialog konstitusional dengan pemda."
    },
    "tata-kelola": {
        nama: "Klaster 1: Tata Kelola Pemerintahan & APBD",
        ket: "Fokus pada transparansi anggaran daerah, akuntabilitas kinerja pejabat publik, serta keterbukaan ruang dengar pendapat (public hearing) di DPRD dan Pemkot.",
        aktor: {
            sub: "Aliansi BEM & HMJ Ilmu Politik FISIP",
            desc: "Memimpin perumusan policy brief keterbukaan data APBD Tasikmalaya dan memobilisasi mahasiswa rumpun sosial politik."
        },
        bentuk: "Dominan menggunakan Kajian Yuridis Perda dan Audiensi Terbuka di Ruang Paripurna DPRD Kota Tasikmalaya.",
        media: "Framing media lokal condong menyoroti tuntutan transparansi anggaran dan integritas pejabat birokrasi.",
        budaya: "Respons terbuka dari Bapemperda terbukti menjaga stabilitas politik lokal dan meredakan desakan aksi jalanan."
    },
    "lingkungan": {
        nama: "Klaster 2: Lingkungan Hidup & Tata Ruang",
        ket: "Menyoroti pengelolaan sampah perkotaan di Tasikmalaya, alih fungsi lahan resapan air, dan pengawasan dampak lingkungan pembangunan.",
        aktor: {
            sub: "PMII Unsil & Gerakan Mahasiswa Peduli Lingkungan",
            desc: "Bekerja sama dengan warga sekitar TPS liar di pinggiran kota Tasikmalaya untuk menghimpun data empiris polusi."
        },
        bentuk: "Menggelar aksi teatrikal simbolik tumpukan sampah di depan Bale Kota dan petisi moratorium alih fungsi lahan.",
        media: "Media massa membingkai isu ini sebagai krisis darurat kebersihan kota Tasikmalaya vs kinerja dinas terkait.",
        budaya: "Kelambanan penanganan TPS liar sempat memicu eskalasi demonstrasi ke kantor Dinas Lingkungan Hidup."
    },
    "pendidikan": {
        nama: "Klaster 3: Kebijakan Pendidikan & Pemuda",
        ket: "Mengkaji aksesibilitas pendidikan tinggi, pemerataan fasilitas pendidikan daerah, serta pelibatan pemuda dalam perumusan kebijakan publik.",
        aktor: {
            sub: "Forum Mahasiswa FISIP & Organisasi Kedaerahan",
            desc: "Fokus pada advokasi beasiswa daerah Tasikmalaya dan dana riset tugas akhir bagi mahasiswa perguruan tinggi lokal."
        },
        bentuk: "Penyusunan Policy Brief tentang Skema Beasiswa Unggulan Daerah dan Focus Group Discussion (FGD) terbuka.",
        media: "Di Instagram, isu ini mendapat interaksi paling masif dari kalangan pelajar dan mahasiswa Tasikmalaya.",
        budaya: "Dialog dua arah dengan Dinas Pendidikan memperkuat budaya politik partisipan di kalangan generasi muda."
    },
    "pelayanan": {
        nama: "Klaster 4: Pelayanan Publik & Transportasi",
        ket: "Mengawal kualitas layanan administrasi kependudukan, trayek transportasi publik lokal, dan responsivitas aduan warga oleh pemerintah daerah.",
        aktor: {
            sub: "Komunitas Kajian Kebijakan Publik FISIP Unsil",
            desc: "Melakukan survei kepuasan layanan publik masyarakat Tasikmalaya dan audit berkas aduan warga yang mandek."
        },
        bentuk: "Notulensi Aksi & Penyerahan berkas pengaduan warga langsung ke meja pimpinan Balai Kota Tasikmalaya.",
        media: "Berita online mengapresiasi langkah mahasiswa yang membawa bukti konkret aduan warga tanpa perusakan fasilitas umum.",
        budaya: "Tercapainya komitmen digitalisasi layanan publik memperkuat kepercayaan konstituen terhadap pemerintah kota."
    }
};

// Data Peta Konsentrasi Aksi Kota Tasikmalaya (Tab 2: Peta Spasial)
const dataLokasi = {
    unsil: {
        badge: "Simpul 01 • Basis Konsolidasi & Intelektual",
        sumber: "Sumber: Wawancara 6 Informan (4 Organisasi)",
        ikon: "fa-solid fa-graduation-cap",
        title: "Kampus FISIP Universitas Siliwangi",
        subtitle: "Pusat Diskusi Ruang Publik, Perumusan Kajian, & Rekrutmen",
        aksi: "Menjadi titik awal konsolidasi lintas organisasi mahasiswa FISIP Unsil. Di ruang inilah mahasiswa menyusun kajian akademis, merumuskan naskah kebijakan (policy brief), dan mematangkan konsolidasi sebelum turun ke lapangan.",
        framing: "Di tingkat kampus, gerakan diposisikan sebagai bagian dari budaya sipil (civic culture) dan tanggung jawab moral intelektual mahasiswa dalam mengawal kebijakan daerah.",
        respons: "Menghasilkan rekomendasi perlunya wadah konsolidasi permanen antarorganisasi mahasiswa agar kajian tidak terputus setelah aksi demonstrasi selesai."
    },
    dprd: {
        badge: "Simpul 02 • Pusat Legislatif Daerah",
        sumber: "Sumber: Analisis 8 Berita Aksi & Wawancara",
        ikon: "fa-solid fa-landmark-dome",
        title: "Gedung DPRD Kota Tasikmalaya",
        subtitle: "Titik Utama Demonstrasi, Audiensi, & Penyampaian Tuntutan",
        aksi: "Demonstrasi lapangan dan audiensi terbuka oleh aliansi organisasi mahasiswa (termasuk PMII dan elemen FISIP Unsil) menyoroti tata kelola pemerintahan daerah, transparansi anggaran, serta kualitas pelayanan publik.",
        framing: "Media lokal menampilkan dua sudut pandang: membingkai aksi mahasiswa sebagai kontrol sosial & tuntutan akuntabilitas wakil rakyat, namun pada berita lain menyoroti kemacetan lalu lintas dan ketertiban umum.",
        respons: "Aspirasi sering kali baru sebatas ditampung dalam audiensi. Tanpa matriks tindak lanjut yang jelas di Bapemperda, mahasiswa menilai jalur formal berjalan lambat sehingga memicu aksi lanjutan."
    },
    balkot: {
        badge: "Simpul 03 • Pusat Eksekutif Pemerintah Kota",
        sumber: "Sumber: Studi Dokumen Berita Lokal",
        ikon: "fa-solid fa-city",
        title: "Balai Kota Tasikmalaya",
        subtitle: "Penyampaian Pernyataan Sikap & Tuntutan Pelayanan Publik",
        aksi: "Aksi simbolik, pembacaan pernyataan sikap, dan penyerahan dokumen tuntutan terkait isu lingkungan (pengelolaan sampah), pendidikan, dan reformasi birokrasi pelayanan publik kepada Pemerintah Kota.",
        framing: "Pemberitaan media massa menyoroti dinamika negosiasi antara massa aksi mahasiswa dengan perwakilan Pemkot serta aparat keamanan untuk menjaga kondusivitas kota.",
        respons: "Respons terbuka dari pimpinan daerah terbukti mampu meredam ketegangan dan menjaga stabilitas politik lokal, sedangkan kebuntuan komunikasi memicu kekecewaan mahasiswa."
    },
    digital: {
        badge: "Simpul 04 • Ruang Publik Virtual (Habermas)",
        sumber: "Sumber: Observasi 3 Unggahan Instagram PMII",
        ikon: "fa-brands fa-instagram",
        title: "Ruang Digital & Media Sosial (Instagram)",
        subtitle: "Propaganda Grafis, Penyebaran Informasi, & Dialektika Warga",
        aksi: "Publikasi poster seruan aksi, rilis pernyataan sikap, dan infografis kajian melalui akun Instagram organisasi mahasiswa sebagai penguat (amplifier) aksi lapangan.",
        framing: "Jangkauan unggahan tergolong relatif kecil namun autentik (tidak ditemukan tanda astroturfing/buzzer). Kolom komentar memperlihatkan interaksi dua arah yang beragam dari warga Tasikmalaya.",
        respons: "Berfungsi menjembatani informasi kepada mahasiswa non-organisasi dan masyarakat umum, sekaligus menjadi arsip digital tuntutan terhadap pemerintah daerah."
    }
};

// Data Awal Matriks Tindak Lanjut (Tab 3: Platform Matriks)
let daftarMatriks = [
    {
        id: 1,
        judul: "Transparansi Anggaran & Pelibatan Pemuda dalam Musrenbang Daerah",
        pengusul: "Aliansi Mahasiswa FISIP Unsil",
        klaster: "Tata Kelola Pemerintahan",
        dokumen: "Policy Brief",
        instansi: "Bapemperda DPRD Kota Tasikmalaya",
        status: "Dibahas di Bapemperda",
        progres: 75,
        tanggal: "12 Nov 2026",
        ringkasan: "Mendesak pembukaan draf R-APBD Kota Tasikmalaya pada portal satu data daerah dan mewajibkan kuota representasi pemuda/mahasiswa dalam Musrenbang tingkat kecamatan hingga kota.",
        riwayat: [
            { tgl: "12 Nov 2026", status: "Penyerahan Policy Brief di Gedung DPRD" },
            { tgl: "16 Nov 2026", status: "Public Hearing bersama Fraksi Komisi I" },
            { tgl: "21 Nov 2026", status: "Masuk agenda telaah naskah Bapemperda" }
        ]
    },
    {
        id: 2,
        judul: "Optimalisasi Tata Kelola Sampah Perkotaan & Penertiban TPS Liar",
        pengusul: "PMII Komisariat Universitas Siliwangi",
        klaster: "Lingkungan",
        dokumen: "Kajian Akademis",
        instansi: "Dinas Lingkungan Hidup & DPRD",
        status: "Dijadwalkan Public Hearing",
        progres: 55,
        tanggal: "14 Nov 2026",
        ringkasan: "Mengidentifikasi 14 titik tempat pembuangan sampah liar di kawasan Tasikmalaya timur dan merekomendasikan penambahan armada truk sampah serta insentif bank sampah warga.",
        riwayat: [
            { tgl: "14 Nov 2026", status: "Aksi simbolik penyerahan sampel sampah ke Pemkot" },
            { tgl: "18 Nov 2026", status: "Verifikasi lapangan bersama tim Dinas Lingkungan Hidup" }
        ]
    },
    {
        id: 3,
        judul: "Percepatan Digitalisasi Layanan Administrasi Publik Terpadu",
        pengusul: "Komunitas Kajian Kebijakan FISIP",
        klaster: "Pelayanan Publik",
        dokumen: "Policy Brief",
        instansi: "Pemerintah Kota Tasikmalaya",
        status: "Dibahas di Bapemperda",
        progres: 80,
        tanggal: "15 Nov 2026",
        ringkasan: "Mengusulkan integrasi seluruh aplikasi aduan kecamatan ke dalam satu pintu layanan digital terpadu dengan standar SLA penyelesaian maksimal 3x24 jam.",
        riwayat: [
            { tgl: "15 Nov 2026", status: "Audiensi langsung dengan Sekretaris Daerah Kota" },
            { tgl: "20 Nov 2026", status: "Uji coba integrasi backend Diskominfo Tasikmalaya" }
        ]
    },
    {
        id: 4,
        judul: "Beasiswa Daerah & Dukungan Riset Mahasiswa untuk Pembangunan Lokal",
        pengusul: "Forum Diskusi Mahasiswa Ilmu Politik",
        klaster: "Pendidikan",
        dokumen: "Pernyataan Sikap",
        instansi: "Dinas Pendidikan & Pemkot",
        status: "Dalam Kajian Dinas",
        progres: 40,
        tanggal: "18 Nov 2026",
        ringkasan: "Mendorong alokasi minimal 2% anggaran pendidikan daerah untuk skema beasiswa mahasiswa berprestasi dan bantuan skripsi/tesis bertema solusi masalah Kota Tasikmalaya.",
        riwayat: [
            { tgl: "18 Nov 2026", status: "Penyerahan petisi 500 tanda tangan mahasiswa" },
            { tgl: "22 Nov 2026", status: "Pembahasan internal bidang anggaran Disdik" }
        ]
    },
    {
        id: 5,
        judul: "Evaluasi Trayek & Keamanan Transportasi Umum Kawasan Pendidikan",
        pengusul: "Konsolidasi Mahasiswa FISIP Unsil",
        klaster: "Pelayanan Publik",
        dokumen: "Notulensi Aksi",
        instansi: "Pemerintah Kota Tasikmalaya",
        status: "Dijadwalkan Public Hearing",
        progres: 60,
        tanggal: "20 Nov 2026",
        ringkasan: "Menyoroti kekosongan angkutan umum pada jam perkuliahan malam di sekitar jalan Siliwangi dan minimnya penerangan halte mahasiswa.",
        riwayat: [
            { tgl: "20 Nov 2026", status: "Notulensi aksi damai diserahkan ke Dinas Perhubungan" }
        ]
    },
    {
        id: 6,
        judul: "Audit Dampak Lingkungan Alih Fungsi Lahan Resapan Air",
        pengusul: "PMII & Gerakan Mahasiswa Peduli Lingkungan",
        klaster: "Lingkungan",
        dokumen: "Pernyataan Sikap",
        instansi: "Bapemperda DPRD Kota Tasikmalaya",
        status: "Menunggu Respons",
        progres: 20,
        tanggal: "22 Nov 2026",
        ringkasan: "Meminta pembentukan pansus DPRD untuk menyelidiki perizinan perumahan baru di kawasan resapan air yang kerap memicu genangan banjir bandang di jalan protokol.",
        riwayat: [
            { tgl: "22 Nov 2026", status: "Surat permohonan audiensi diterima sekretariat dewan" }
        ]
    }
];

// =============================================================================
// 2. FUNGSI NAVIGASI TAB UTAMA
// =============================================================================

function switchTab(tabId) {
    // Sembunyikan semua tab konten
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
    });

    // Reset tombol tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-navy-light', 'text-white', 'shadow-md', 'bg-taupe');
        btn.classList.add('bg-navy-dark/70', 'text-emerald-100');
    });

    // Tampilkan tab terpilih
    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }

    // Aktifkan style tombol terpilih
    const activeBtn = document.getElementById('btn-tab-' + tabId);
    if (activeBtn) {
        activeBtn.classList.remove('bg-navy-dark/70', 'text-emerald-100');
        activeBtn.classList.add('active', 'bg-navy-light', 'text-white', 'shadow-md');
    }
}

// =============================================================================
// 3. FUNGSI TAB 1: EKOSISTEM PARTISIPASI & BEDAH TEORI
// =============================================================================

function showTeoriDetail(key) {
    const item = dataTeori[key];
    if (!item) return;

    const badgeElem = document.getElementById('detail-teori-badge');
    const judulElem = document.getElementById('detail-teori-judul');
    const descElem = document.getElementById('detail-teori-deskripsi');

    if (badgeElem) badgeElem.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${item.badge}`;
    if (judulElem) judulElem.textContent = item.judul;
    if (descElem) descElem.textContent = item.deskripsi;

    // Highlight kartu yang sedang aktif
    document.querySelectorAll('.ekosistem-card').forEach(c => c.classList.remove('card-active'));
    const targetCard = document.getElementById('card-teori-' + key);
    if (targetCard) targetCard.classList.add('card-active');

    // Gulir halus di layar kecil jika perlu
    const panel = document.getElementById('panel-analisis-teori');
    if (panel && window.innerWidth < 768) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function filterIsuEkosistem(isuKey, event) {
    // Reset state semua tombol filter isu
    document.querySelectorAll('.isu-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-navy', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
    });

    // Dapatkan tombol yang diklik
    const clickedBtn = event ? (event.currentTarget || event.target) : null;
    if (clickedBtn) {
        clickedBtn.classList.remove('bg-slate-100', 'text-slate-700');
        clickedBtn.classList.add('active', 'bg-navy', 'text-white');
    }

    const data = dataEkosistemByIsu[isuKey] || dataEkosistemByIsu["semua"];

    // Update panel ringkasan isu aktif
    const namaElem = document.getElementById('detail-isu-nama');
    const ketElem = document.getElementById('detail-isu-ket');
    if (namaElem) namaElem.textContent = data.nama;
    if (ketElem) ketElem.textContent = data.ket;

    // Dinamisasi konten kartu ekosistem sesuai isu
    const aktorSub = document.getElementById('card-aktor-sub');
    const aktorDesc = document.getElementById('card-aktor-desc');
    const bentukDesc = document.getElementById('card-bentuk-desc');
    const mediaDesc = document.getElementById('card-media-desc');
    const budayaDesc = document.getElementById('card-budaya-desc');

    if (aktorSub) aktorSub.textContent = data.aktor.sub;
    if (aktorDesc) aktorDesc.innerHTML = data.aktor.desc;
    if (bentukDesc) bentukDesc.textContent = data.bentuk;
    if (mediaDesc) mediaDesc.textContent = data.media;
    if (budayaDesc) budayaDesc.textContent = data.budaya;

    showToast(`Menampilkan ekosistem untuk: ${data.nama}`);
}

// Modal Detail Bentuk Aksi (Kotak Proporsional)
function showBentukAksiDetail(aksiKey) {
    const item = dataBentukAksi[aksiKey];
    if (!item) return;

    const modal = document.getElementById('modal-global');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerHTML = `<i class="${item.ikon} text-navy mr-2"></i> ${item.judul}`;
    modalBody.innerHTML = `
        <div class="space-y-3.5 text-xs sm:text-sm">
            <div class="inline-block px-2.5 py-1 rounded bg-navy/10 text-navy font-bold text-xs">
                ${item.teori}
            </div>
            <div>
                <h5 class="font-bold text-navy text-xs uppercase mb-1">Definisi & Relevansi Teoretis:</h5>
                <p class="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200 text-xs">
                    ${item.deskripsi}
                </p>
            </div>
            <div>
                <h5 class="font-bold text-navy text-xs uppercase mb-1">Praktik Mahasiswa FISIP Unsil di Lapangan:</h5>
                <p class="text-slate-700 leading-relaxed bg-taupe-soft p-3 rounded border border-taupe/40 text-xs">
                    ${item.implementasi}
                </p>
            </div>
            <div class="pt-3 border-t border-slate-200 flex justify-end">
                <button onclick="closeModalGlobal()" class="px-3.5 py-2 bg-navy text-white text-xs font-semibold rounded hover:bg-navy-light transition">
                    Tutup Penjelasan
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// =============================================================================
// 4. FUNGSI TAB 2: PETA SPASIAL & SIMULASI ALUR GERAKAN (ANTI TUMPANG TINDIH)
// =============================================================================

function selectMapLocation(locKey, animatePulse = false, pulseMode = 'click') {
    const loc = dataLokasi[locKey];
    if (!loc) return;

    // Perbarui kartu detail lokasi
    const badge = document.getElementById('loc-badge');
    const sumber = document.getElementById('loc-sumber');
    const title = document.getElementById('loc-title');
    const subtitle = document.getElementById('loc-subtitle');
    const aksi = document.getElementById('loc-aksi');
    const framing = document.getElementById('loc-framing');
    const respons = document.getElementById('loc-respons');

    if (badge) badge.innerHTML = `<i class="${loc.ikon || 'fa-solid fa-location-dot'} mr-1.5 text-secondary-light"></i> ${loc.badge}`;
    if (sumber) sumber.textContent = loc.sumber;
    if (title) title.innerHTML = `<i class="${loc.ikon || 'fa-solid fa-location-dot'} text-secondary mr-2"></i> ${loc.title}`;
    if (subtitle) subtitle.textContent = loc.subtitle;
    if (aksi) aksi.textContent = loc.aksi;
    if (framing) framing.textContent = loc.framing;
    if (respons) respons.textContent = loc.respons;

    // Perbarui active state tombol di bawah peta
    document.querySelectorAll('.loc-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-navy', 'text-white');
        btn.classList.add('bg-white', 'text-navy');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.remove('text-secondary-light');
            icon.classList.add('text-secondary');
        }
    });

    const mapOrder = { unsil: 0, dprd: 1, balkot: 2, digital: 3 };
    const allLocBtns = document.querySelectorAll('.loc-btn');
    if (allLocBtns && allLocBtns[mapOrder[locKey]]) {
        const activeBtn = allLocBtns[mapOrder[locKey]];
        activeBtn.classList.remove('bg-white', 'text-navy');
        activeBtn.classList.add('active', 'bg-navy', 'text-white');
        const icon = activeBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('text-secondary');
            icon.classList.add('text-secondary-light');
        }
    }

    // Sorot Pin SVG yang aktif
    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.classList.remove('pin-active');
        pin.classList.remove('pin-pulse');
        if (pin.pulseTimeout) {
            clearTimeout(pin.pulseTimeout);
            pin.pulseTimeout = null;
        }
    });
    const activePin = document.getElementById('pin-' + locKey);
    if (activePin) {
        activePin.classList.add('pin-active');
        if (animatePulse) {
            activePin.getBoundingClientRect();
            activePin.classList.add('pin-pulse');

            const mapSvg = document.getElementById('map-skema');
            if (mapSvg) mapSvg.classList.add('map-motion-active');

            if (pulseMode === 'click' && !simulationInterval) {
                clearTimeout(activePin.pulseTimeout);
                activePin.pulseTimeout = setTimeout(() => {
                    document.querySelectorAll('.map-pin').forEach(pin => pin.classList.remove('pin-pulse'));
                    if (mapSvg) mapSvg.classList.remove('map-motion-active');
                }, 3600);
            }
        }
    }
}

// Simulasi Otomatis Alur Gerakan (Kronologi Lapangan Mahasiswa)
let simulationInterval = null;
function startMovementSimulation() {
    const simBtn = document.getElementById('btn-simulasi-gerakan');
    const steps = ['unsil', 'dprd', 'balkot', 'digital'];
    const phaseNames = [
        "Fase 1: Konsolidasi & Kajian di Kampus Unsil",
        "Fase 2: Aksi Massa & Audiensi di Gedung DPRD",
        "Fase 3: Penyampaian Tuntutan Eksekutif di Balai Kota",
        "Fase 4: Amplifikasi & Advokasi Opini di Ruang Digital"
    ];

    if (simulationInterval) {
        clearInterval(simulationInterval);
        simulationInterval = null;
        document.querySelectorAll('.map-pin').forEach(pin => pin.classList.remove('pin-pulse'));
        document.getElementById('map-skema')?.classList.remove('map-motion-active');
        if (simBtn) simBtn.innerHTML = `<i class="fa-solid fa-play mr-1.5"></i> Putar Simulasi Alur Gerakan`;
        showToast("Simulasi gerakan dihentikan.");
        return;
    }

    let currentIndex = 0;
    selectMapLocation(steps[currentIndex], true, 'simulation');
    showToast(`Memulai Simulasi: ${phaseNames[currentIndex]}`);
    if (simBtn) simBtn.innerHTML = `<i class="fa-solid fa-pause mr-1.5"></i> Hentikan Simulasi`;

    simulationInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= steps.length) {
            clearInterval(simulationInterval);
            simulationInterval = null;
            document.querySelectorAll('.map-pin').forEach(pin => pin.classList.remove('pin-pulse'));
            document.getElementById('map-skema')?.classList.remove('map-motion-active');
            if (simBtn) simBtn.innerHTML = `<i class="fa-solid fa-play mr-1.5"></i> Putar Ulang Simulasi`;
            showToast("Simulasi selesai. Seluruh tahapan gerakan telah ditampilkan.");
            return;
        }
        selectMapLocation(steps[currentIndex], true, 'simulation');
        showToast(`Alur Gerakan: ${phaseNames[currentIndex]}`);
    }, 3800);
}

// =============================================================================
// 5. FUNGSI TAB 3: PLATFORM MATRIKS, QUICK FILTER & DETAIL MODAL
// =============================================================================

function getStatusBadge(status) {
    switch (status) {
        case 'Dibahas di Bapemperda':
            return 'bg-emerald-100 text-emerald-800 border-emerald-300';
        case 'Dijadwalkan Public Hearing':
            return 'bg-blue-100 text-blue-800 border-blue-300';
        case 'Dalam Kajian Dinas':
            return 'bg-amber-100 text-amber-800 border-amber-300';
        default:
            return 'bg-slate-100 text-slate-700 border-slate-300';
    }
}

// State filter aktif untuk matriks
let currentFilterStatus = 'semua';

function renderMatriks() {
    const searchInput = document.getElementById('search-matriks');
    const statusSelect = document.getElementById('filter-status-matriks');
    const tbody = document.getElementById('tbody-matriks');

    if (!tbody) return;

    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let statusFilter = statusSelect && statusSelect.value ? statusSelect.value : currentFilterStatus;
    if (!statusFilter) statusFilter = currentFilterStatus || 'semua';
    currentFilterStatus = statusFilter;

    const filtered = daftarMatriks.filter(item => {
        const matchKeyword = item.judul.toLowerCase().includes(keyword) || 
                             item.pengusul.toLowerCase().includes(keyword) ||
                             item.klaster.toLowerCase().includes(keyword) ||
                             item.instansi.toLowerCase().includes(keyword);
        
        let matchStatus = true;
        if (statusFilter === 'semua' || !statusFilter) {
            matchStatus = true;
        } else if (statusFilter === 'proses') {
            matchStatus = (item.status === 'Dalam Kajian Dinas' || item.status === 'Menunggu Respons');
        } else {
            matchStatus = item.status === statusFilter;
        }
        return matchKeyword && matchStatus;
    });

    // Perbarui statistik ringkas
    const totalEl = document.getElementById('stat-total');
    const bapemperdaEl = document.getElementById('stat-bapemperda');
    const hearingEl = document.getElementById('stat-hearing');
    const prosesEl = document.getElementById('stat-proses');

    if (totalEl) totalEl.textContent = daftarMatriks.length;
    if (bapemperdaEl) bapemperdaEl.textContent = daftarMatriks.filter(i => i.status === 'Dibahas di Bapemperda').length;
    if (hearingEl) hearingEl.textContent = daftarMatriks.filter(i => i.status === 'Dijadwalkan Public Hearing').length;
    if (prosesEl) prosesEl.textContent = daftarMatriks.filter(i => i.status === 'Dalam Kajian Dinas' || i.status === 'Menunggu Respons').length;

    // Perbarui active state pada quick filter stat-card
    document.querySelectorAll('.stat-card').forEach(card => card.classList.remove('stat-active'));
    if (statusFilter === 'semua') {
        document.getElementById('card-stat-total')?.classList.add('stat-active');
    } else if (statusFilter === 'Dibahas di Bapemperda') {
        document.getElementById('card-stat-bapemperda')?.classList.add('stat-active');
    } else if (statusFilter === 'Dijadwalkan Public Hearing') {
        document.getElementById('card-stat-hearing')?.classList.add('stat-active');
    } else if (statusFilter === 'proses' || statusFilter === 'Dalam Kajian Dinas' || statusFilter === 'Menunggu Respons') {
        document.getElementById('card-stat-proses')?.classList.add('stat-active');
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="py-10 text-center text-slate-400">
                    <i class="fa-solid fa-folder-open text-2xl mb-1.5 block text-slate-300"></i>
                    <span>Tidak ada data aspirasi yang sesuai dengan kata kunci atau filter status.</span>
                </td>
            </tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(item => `
        <tr class="hover:bg-emerald-50/40 transition border-b border-slate-100 last:border-b-0 fade-in">
            <td class="py-3 px-3.5 align-top">
                <div class="font-bold text-navy leading-snug hover:underline cursor-pointer" onclick="showModalDetailAspirasi(${item.id})">
                    ${item.judul}
                </div>
                <div class="text-[11px] text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                    <span class="inline-flex items-center gap-1 font-medium">
                        <i class="fa-solid fa-users-line text-slateBlue"></i> ${item.pengusul}
                    </span>
                    <span>•</span>
                    <span class="text-slate-400"><i class="fa-regular fa-calendar mr-1"></i>${item.tanggal}</span>
                </div>
            </td>
            <td class="py-3 px-3.5 align-top">
                <span class="inline-block px-2 py-0.5 rounded bg-taupe-soft text-navy font-semibold text-[11px] border border-taupe/40 mb-1">
                    ${item.klaster}
                </span>
                <div class="text-[11px] text-slate-600 flex items-center gap-1">
                    <i class="fa-regular fa-file-lines text-slate-400"></i>
                    <span>${item.dokumen}</span>
                </div>
            </td>
            <td class="py-3 px-3.5 align-top text-slate-700 font-medium text-xs">
                ${item.instansi}
            </td>
            <td class="py-3 px-3.5 align-top">
                <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusBadge(item.status)}">
                    ${item.status}
                </span>
                <div class="w-full bg-slate-200 progress-bar-container h-1.5 mt-2 overflow-hidden">
                    <div class="bg-navy h-1.5 progress-bar-fill" style="width: ${item.progres}%"></div>
                </div>
                <div class="text-[10px] text-slate-500 mt-0.5 text-right font-medium">Progres: ${item.progres}%</div>
            </td>
            <td class="py-3 px-3.5 align-top text-center whitespace-nowrap">
                <div class="flex items-center justify-center gap-1">
                    <button onclick="showModalDetailAspirasi(${item.id})" title="Lihat Naskah Lengkap & Riwayat"
                        class="btn-table-action w-7 h-7 bg-navy/10 hover:bg-navy text-navy hover:text-white transition flex items-center justify-center text-xs">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button onclick="showModalUbahStatus(${item.id})" title="Ubah Status Kebijakan"
                        class="btn-table-action w-7 h-7 bg-emerald-100 hover:bg-emerald-600 text-emerald-800 hover:text-white transition flex items-center justify-center text-xs">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="hapusAspirasi(${item.id})" title="Hapus Aspirasi"
                        class="btn-table-action w-7 h-7 bg-rose-100 hover:bg-rose-600 text-rose-800 hover:text-white transition flex items-center justify-center text-xs">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Quick Filter dari Statistik Card
function quickFilterStatus(status) {
    currentFilterStatus = status;
    const select = document.getElementById('filter-status-matriks');
    if (select) {
        select.value = status;
    }
    renderMatriks();
}

// Modal Detail Lengkap Aspirasi (Audit Trail & Naskah) - Kotak Proporsional
function showModalDetailAspirasi(id) {
    const item = daftarMatriks.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('modal-global');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const riwayatHtml = (item.riwayat && item.riwayat.length > 0)
        ? item.riwayat.map((r, idx) => `
            <div class="flex items-start gap-2.5">
                <div class="w-5 h-5 rounded bg-navy text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ${idx + 1}
                </div>
                <div>
                    <div class="text-xs font-bold text-navy">${r.status}</div>
                    <div class="text-[11px] text-slate-500">${r.tgl}</div>
                </div>
            </div>
        `).join('')
        : `<div class="text-xs text-slate-400 italic">Belum ada riwayat audiensi lanjutan.</div>`;

    modalTitle.innerHTML = `<i class="fa-solid fa-file-invoice text-navy mr-2"></i> Detail Naskah & Riwayat Tindak Lanjut`;
    modalBody.innerHTML = `
        <div class="space-y-3.5 text-xs sm:text-sm">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                <div>
                    <span class="px-2.5 py-0.5 rounded bg-taupe-soft text-navy font-bold text-xs border border-taupe/40">
                        ${item.klaster}
                    </span>
                    <span class="ml-2 text-xs text-slate-500">• ${item.dokumen}</span>
                </div>
                <span class="px-2.5 py-0.5 rounded text-xs font-bold border ${getStatusBadge(item.status)}">
                    ${item.status} (${item.progres}%)
                </span>
            </div>

            <div>
                <h4 class="font-display font-bold text-navy text-base leading-snug">${item.judul}</h4>
                <div class="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                    <span><strong>Pengusul:</strong> ${item.pengusul}</span>
                    <span>•</span>
                    <span><strong>Instansi Tujuan:</strong> ${item.instansi}</span>
                </div>
            </div>

            <div class="bg-slate-50 p-3.5 rounded border border-slate-200">
                <div class="font-bold text-navy text-xs uppercase mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-align-left text-slateBlue"></i> Ringkasan Substansi & Rekomendasi Kebijakan
                </div>
                <p class="text-slate-700 leading-relaxed text-xs">
                    ${item.ringkasan || 'Naskah tuntutan diajukan untuk ditindaklanjuti secara resmi oleh instansi berwenang di Kota Tasikmalaya.'}
                </p>
            </div>

            <div>
                <div class="font-bold text-navy text-xs uppercase mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-timeline text-slateBlue"></i> Jejak Penanganan & Disposisi
                </div>
                <div class="space-y-2.5 bg-white p-3 rounded border border-slate-200">
                    ${riwayatHtml}
                </div>
            </div>

            <div class="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <button onclick="showModalUbahStatus(${item.id})" class="px-3.5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 transition">
                    <i class="fa-solid fa-pen-to-square"></i> Perbarui Status
                </button>
                <button onclick="closeModalGlobal()" class="px-3.5 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition">
                    Tutup
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// Modal Ubah Status Progres Kebijakan
function showModalUbahStatus(id) {
    const item = daftarMatriks.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('modal-global');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerHTML = `<i class="fa-solid fa-pen-to-square text-emerald-700 mr-2"></i> Perbarui Status Aspirasi #${item.id}`;
    modalBody.innerHTML = `
        <form onsubmit="simpanPerubahanStatus(event, ${item.id})" class="space-y-3.5 text-xs sm:text-sm">
            <div>
                <label class="block font-bold text-navy mb-1">Judul Aspirasi</label>
                <div class="text-xs text-slate-600 p-2.5 bg-slate-100 rounded">${item.judul}</div>
            </div>

            <div>
                <label class="block font-bold text-navy mb-1">Pilih Tahapan Status Baru</label>
                <select id="edit-status-pilihan" class="w-full px-3 py-2 rounded border border-slate-300 input-focus-ring bg-white">
                    <option value="Menunggu Respons" ${item.status === 'Menunggu Respons' ? 'selected' : ''}>Menunggu Respons (15-30%)</option>
                    <option value="Dalam Kajian Dinas" ${item.status === 'Dalam Kajian Dinas' ? 'selected' : ''}>Dalam Kajian Dinas (35-50%)</option>
                    <option value="Dijadwalkan Public Hearing" ${item.status === 'Dijadwalkan Public Hearing' ? 'selected' : ''}>Dijadwalkan Public Hearing (55-70%)</option>
                    <option value="Dibahas di Bapemperda" ${item.status === 'Dibahas di Bapemperda' ? 'selected' : ''}>Dibahas di Bapemperda (75-100%)</option>
                </select>
            </div>

            <div>
                <label class="block font-bold text-navy mb-1">Catatan Progres / Agenda Baru</label>
                <input type="text" id="edit-catatan-agenda" placeholder="Contoh: Rapat kerja komisi bersama mahasiswa tgl 28 Nov..."
                    class="w-full px-3 py-2 rounded border border-slate-300 input-focus-ring bg-white" required>
            </div>

            <div class="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button type="button" onclick="closeModalGlobal()" class="px-3.5 py-2 rounded bg-slate-200 text-slate-700 font-semibold text-xs">
                    Batal
                </button>
                <button type="submit" class="px-3.5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs">
                    Simpan Perubahan
                </button>
            </div>
        </form>
    `;

    modal.classList.remove('hidden');
}

function simpanPerubahanStatus(e, id) {
    e.preventDefault();
    const item = daftarMatriks.find(i => i.id === id);
    if (!item) return;

    const newStatus = document.getElementById('edit-status-pilihan').value;
    const catatan = document.getElementById('edit-catatan-agenda').value.trim();

    item.status = newStatus;
    if (newStatus === 'Dibahas di Bapemperda') item.progres = 85;
    else if (newStatus === 'Dijadwalkan Public Hearing') item.progres = 65;
    else if (newStatus === 'Dalam Kajian Dinas') item.progres = 45;
    else item.progres = 25;

    if (!item.riwayat) item.riwayat = [];
    item.riwayat.unshift({
        tgl: "23 Nov 2026 (Update)",
        status: catatan || newStatus
    });

    renderMatriks();
    closeModalGlobal();
    showToast(`Status aspirasi #${item.id} berhasil diubah ke: ${newStatus}`);
}

function hapusAspirasi(id) {
    const item = daftarMatriks.find(i => i.id === id);
    if (!item) return;

    if (confirm(`Yakin ingin menghapus data aspirasi "${item.judul.substring(0, 40)}..." dari matriks pantauan?`)) {
        daftarMatriks = daftarMatriks.filter(i => i.id !== id);
        renderMatriks();
        showToast("Data aspirasi berhasil dihapus dari matriks.");
    }
}

// Modal Panduan Template Dokumen
function showTemplatePanduan() {
    const modal = document.getElementById('modal-global');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerHTML = `<i class="fa-solid fa-graduation-cap text-navy mr-2"></i> Panduan Format Dokumen Kebijakan (Standar FISIP)`;
    modalBody.innerHTML = `
        <div class="space-y-3.5 text-xs sm:text-sm">
            <div class="bg-slate-50 p-3.5 rounded border border-slate-200">
                <div class="font-bold text-navy text-xs uppercase mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-file-lines text-slateBlue"></i> 1. Policy Brief (Naskah Kebijakan)
                </div>
                <p class="text-slate-600 text-xs mb-2">Ditujukan langsung kepada pengambil keputusan daerah dengan struktur:</p>
                <ul class="list-disc list-inside text-xs text-slate-700 space-y-1">
                    <li><strong>Ringkasan Eksekutif:</strong> 1 paragraf inti masalah dan usulan solusi.</li>
                    <li><strong>Kritik Masalah Kebijakan:</strong> Bukti empiris di Kota Tasikmalaya.</li>
                    <li><strong>Opsi Alternatif Kebijakan:</strong> Perbandingan pro dan kontra opsi.</li>
                    <li><strong>Rekomendasi Aksi:</strong> Langkah konkret yang harus diambil dinas/DPRD.</li>
                </ul>
            </div>

            <div class="bg-taupe-soft p-3.5 rounded border border-taupe/40">
                <div class="font-bold text-navy text-xs uppercase mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-book-open text-taupe-dark"></i> 2. Kajian Akademis
                </div>
                <p class="text-slate-600 text-xs">Analisis komprehensif memuat landasan yuridis, sosiologis, dan filosofis perda.</p>
            </div>

            <div class="pt-3 border-t border-slate-200 flex justify-end">
                <button onclick="closeModalGlobal()" class="px-3.5 py-2 bg-navy text-white text-xs font-semibold rounded hover:bg-navy-light transition">
                    Saya Mengerti
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// Ekspor Data Matriks ke CSV
function exportMatriksCSV() {
    if (daftarMatriks.length === 0) {
        showToast("Tidak ada data untuk diekspor!");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,Judul Tuntutan,Pengusul,Klaster Isu,Dokumen,Instansi Tujuan,Status,Progres (%),Tanggal Masuk\n";

    daftarMatriks.forEach(item => {
        const row = [
            item.id,
            `"${item.judul.replace(/"/g, '""')}"`,
            `"${item.pengusul.replace(/"/g, '""')}"`,
            `"${item.klaster}"`,
            `"${item.dokumen}"`,
            `"${item.instansi}"`,
            `"${item.status}"`,
            item.progres,
            `"${item.tanggal}"`
        ].join(",");
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Matriks_Tindak_Lanjut_FISIP_Unsil_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("File CSV Matriks berhasil diunduh!");
}

// Cetak Lembar Pantauan Matriks
function printMatriks() {
    window.print();
}

function closeModalGlobal() {
    const modal = document.getElementById('modal-global');
    if (modal) modal.classList.add('hidden');
}

function tambahAspirasi(e) {
    if (e) e.preventDefault();

    const pengusulInput = document.getElementById('input-pengusul');
    const klasterInput = document.getElementById('input-klaster');
    const dokumenInput = document.getElementById('input-dokumen');
    const instansiInput = document.getElementById('input-instansi');
    const judulInput = document.getElementById('input-judul');

    if (!pengusulInput || !judulInput) return;

    const pengusul = pengusulInput.value.trim();
    const klaster = klasterInput ? klasterInput.value : 'Tata Kelola Pemerintahan';
    const dokumen = dokumenInput ? dokumenInput.value : 'Policy Brief';
    const instansi = instansiInput ? instansiInput.value : 'Bapemperda DPRD Kota Tasikmalaya';
    const judul = judulInput.value.trim();

    if (!pengusul || !judul) {
        showToast("Mohon lengkapi nama pengusul dan judul aspirasi!");
        return;
    }

    const itemBaru = {
        id: daftarMatriks.length + 1,
        judul: judul,
        pengusul: pengusul,
        klaster: klaster,
        dokumen: dokumen,
        instansi: instansi,
        status: "Menunggu Respons",
        progres: 15,
        tanggal: "23 Nov 2026 (Baru)",
        ringkasan: `Aspirasi baru diajukan oleh ${pengusul} mengenai isu ${klaster} kepada ${instansi}.`,
        riwayat: [
            { tgl: "23 Nov 2026", status: "Pengajuan baru diunggah ke Matriks Publik" }
        ]
    };

    daftarMatriks.unshift(itemBaru);
    renderMatriks();

    const form = document.getElementById('form-aspirasi');
    if (form) form.reset();

    showToast("Aspirasi berhasil ditambahkan ke Matriks Tindak Lanjut Publik!");
}

function showToast(pesan) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = "toast-item text-xs font-semibold px-3.5 py-2.5 shadow-lg flex items-center gap-2.5";
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check text-taupe-light text-base shrink-0"></i>
        <span>${pesan}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 3500);
}

// =============================================================================
// 6. INISIALISASI SAAT HALAMAN DIMUAT
// =============================================================================

window.addEventListener('DOMContentLoaded', () => {
    renderMatriks();
    selectMapLocation('dprd'); // Default pin terpilih di Tab 2
    showTeoriDetail('aktor');  // Default teori terpilih di Tab 1

    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                pin.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }
        });
    });
});
