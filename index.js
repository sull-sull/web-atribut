function getkelas() {
  var selectedValue = document.getElementById('selectkelas').value;
  window.location.href = "form.html?kelas=" + encodeURIComponent(selectedValue);
}

// In form.html, retrieve the value from the URL
function showkelas() {
  var urlParams = new URLSearchParams(window.location.search);
  var kelas = urlParams.get('kelas');


  if (kelas == "X AK 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AIRIN OKTAVIANI',
      'ANISA IKA PUTRI',
      'AQILA KURNIA ANDARI',
      'ARIANA ZAHRANI',
      'AURA MEZZALUNA SYALUNA',
      'BUNGA RAHMAH',
      'FATIMAH BATUL',
      'FIONA ALIFYA MAULIDINA',
      'HANIFA ZASKKIA SUHERMAN',
      'JIHAN BILQIS UFAIRA',
      'JIHHAN JULIYANI',
      'KAFI AR JAISY',
      'KEYZA FERDIANSYAH',
      'MUHAMMAD ZAINAL ARIFIN',
      'MUZARI ARORA',
      'NABILA JIHAN RAMADHANI',
      'NADA SALSABILA',
      'NAILA BILQISTI',
      'NUR AGNIA ARISKA',
      'OCEAN CAMELIA BUSTANIL ILMIAH',
      'PUTRI AYU NASIKI',
      'RAISYAH FITRIA RAHMANI',
      'RIFKAH AWALIYAH',
      'RINDU ANANDA ABWAR',
      'SHATZHI ANASTASIA PUTRI',
      'SITI FADIA ZACHRA',
      'SITI MUSLIHAH',
      'SUCI ANASTASYA MUTIARA',
      'SYAFHIRA KEYZAHRA',
      'SYUFFI ARBAIRA',
      'UTAMI TRI JUNIARTI',
      'VICA FAUJIYA',
      'WULAN AGUSTYANI',
      'YOLIN MAULANA LESTARI',
      'ZAHRATUNISSA'

    ];

    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADINDA RASA NATASYA',
      'ADZKIA HANIFAH',
      'AISY KHALDA NAHILA',
      'ANASYA PUTRI MEISYILLA',
      'AURELIA CHANTIKA RAHAYU',
      'AZ ZAHRA NUR SILVIANA',
      'CALILISTA PUTRI MASSARDI',
      'DENIS MUHAMMAD RAFI',
      'DITA NURMALA',
      'EZIQHA',
      'FIRZA KHALILA RAMADHANI',
      'HANAN DZAKIRAH',
      'INTAN DWI MULYASARI',
      'KAMILA NUR AINI',
      'KESYA SALWA AURANISA',
      'LENA JELITA SARI',
      'MARISYAH',
      'MAULIDA AFIFA KHAIRUNISA',
      'MOZA AULIA PUTRI',
      'MUHAMMAD RAFFA',
      'NAJWA OKTAPIANI',
      'NAWAL SYAHRANI',
      'NAYSILA RAHAYU',
      'PUTRI FARAH DESINTA',
      'RAHEL ANGEL LEONITA',
      'RAISSYA AGUSTINA JUNIAR',
      'RISMA PERTIWI',
      'SAFA MAULIDAH',
      'SAFHA AFRILA PUTRI',
      'SALWA EDJA AZZAHRA',
      'SANTIKA NIA RAMADHANI',
      'SELLY NURMALASARI',
      'SITI NABILA KHANZA',
      'ZASKIA FAADHILLAH PRIYADI'
    ];

    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X BR") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADINDA PUTRI YULIANTI',
      'AFIFAH AFIANI',
      'AINI MAULIDA',
      'ALIYA PUTRI SAVITA',
      'AUFA MURSYID RAMDHANI',
      'AUREL SYAFRIANI',
      'CHARISA PUTRI',
      'CINTA PUTRI LEXSONO',
      'DEFINDRA PUJIARTHA',
      'DHANI RAMADHAN',
      'DHARIFAH NUR NAAFI FARWIDI',
      'ERIAN SALSABILLAH',
      'FAJAR SAFUTRA',
      'FATHIYA',
      'GIAN OPHELIA BAHTIAR',
      'HAIKAL AMY AZHARI',
      'HERWINDY AYU OKTAVIANI',
      'JESSICA ANASTACIA',
      'JUANGGA MAHARANI PUTRI',
      'KAILA OKTAVIANI',
      'KAYLA APRIANI',
      'LUBNA SYAROF',
      'LULU LUPIAH',
      'MUHAMMAD AFDAL DWI A.',
      'MUHAMMAD ALIF SATIBI',
      'MUTIA RANTI',
      'NABILUL ARKAN',
      'PUTRI SEPTIYANTI',
      'RIFAL MAULANA RAMDAN',
      'SAKIROTUN NISAI',
      'SAVIRA ESA WIDI',
      'SAVIRA SAFITRI',
      'SYARA PUTRI RAMADHANI',
      'SYAVANDI IBNU MAYID',
      'TESAVIA KEYSA SABILA',
      'TRI HANDAYANI AGUSTIN'
    ];

for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X DKV") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AHMAD FADIL',
      'AISYAHBILA JALIL',
      'ALFIERA MUTIARA SAFITRI',
      'ALISA',
      'ARRAFI PANTARA',
      'AULIA ZULFA',
      'DINDA FIKA AZAHRA',
      'FIRDA AWALIYAH',
      'GHANI NAUFAL HAFIZ',
      'HERNITA SAL BILQIS',
      'HUMAIRA',
      'IVONY GHEIZA MAHARANI',
      'KHANZA AZZAHRAA',
      'KHANZA ARIFATUL’ ARRIFATUL MUAMMANAH',
      'LINTANG GHINA AYUNINGTYAS',
      'MAULIDA HASANAH',
      'MIKAAEL AHMAD JAZZAERA',
      'MUHAMMAD BAGAS NADIFKHAIRULLAH',
      'MUHAMMAD FACHRUL RIDHO',
      'NADIN NUR FALISHA',
      'NAFILLA AULIA ATHAHADI',
      'NAIFA JANEETA',
      'NOVA AULIA',
      'QUEENSHE PUTTY ARIMBI SETTYO',
      'RAISSA NANDA ZASKIA',
      'RAISYA REIZQUITA',
      'RIFA SELA OKTAVIANI',
      'SALMA MUFIDAH ZULFA',
      'SALWA MAULIDA',
      'SANTIKA ALIFA ZEE RAYA',
      'SITI NAZWA NURKAILA',
      'SYAFIRA HUMAIRA YUSUF',
      'THALITA SYAHLA HUMAIRA',
      'ULIL ALBAB RAHMATULLAH',
      'ZALFA KAMELIA NURFAIH',
      'ZASKIA SEPTI RAMAHDANI'

    ];

      for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X MP 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ABRYLIA STEFANY GUNAWAN',
      'ADRIAN BINTANG',
      'ADZIRA',
      'ARTYA ISYAHIRA',
      'AUREL BUNGA ANJANI',
      'BILQIS MUTIA RAMADHANI',
      'CHIKA RAIHANA KAMILA',
      'CINTA ADELIANA DJUNRA',
      'FAZA ALTHOFUNNISA',
      'FITRI HAWA NUR AZIZA',
      'HAYQAL PRATAMA',
      'INDAH NOVITA SARI',
      'JIHAN FADIYAH AGUSTINA',
      'KALILA RAHMI WIDIANTI',
      'KEISHA ZAHROTUSSITA',
      'KESYA PUTRI DEFRIZAL',
      'MAULIDA NURUL HASANAH',
      'MAWAR RISA',
      'MEYRISKA AULIA PUTRI',
      'MOZA RIZKIA RAMADHANI',
      'MUHAMAD BINTANG ARDIAN RIZKI',
      'NADZIRA FARHAH ADIBAH',
      'NAJMA LADY ADEEBA',
      'NASYWA AZZAHRA SULAIMAN',
      'NYIMAS KAYIRAH SYARANI',
      'RADO WILLY',
      'REVI MAULIDYA',
      'RIZKY ALIYAH',
      'SAYIDAH NAZMAH BA’BUD',
      'SHEILA AURELIA',
      'SYARIFAH RAMADHANI',
      'TIARA SALSABILA SULISTIO',
      'VALENCIA VERTO ODILIA GUNANDI',
      'VANESYA CAHYA WARDANI',
      'WAHYUNI',
      'ZAHRA ANGGRAINI WIDYANINGSIH'

    ];
      
for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X MP 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ANANDA LUTFIA INDIRIANI',
      'ANAYA PUTRI KHAIRIN',
      'ANGGUN YULIA AZZAHRA',
      'ANISA RAYHAN',
      'ARTIKA RAHMADINI',
      'AWALLIYAH AISYAH FATHIN',
      'AZKA PUTRI MAULIDIA',
      'AZKIYA SYAUQI PARADIBA',
      'BILGIS SYAHIRA',
      'DANIEL PUTRA PRATAMA',
      'DESIRA ARTITA WANODYATAMA',
      'DHEDHE GHENDIS KUSUMANINGRUM',
      'FAHIMA KADHIMI',
      'HANNA ZAHRA SYARARA BATU BARA',
      'JASMINE REVALINA',
      'KEISHA AURELIA RAIHANAH',
      'KHANZA SABIYA BILQIS',
      'KHYLA ASMAUL KHUSNA',
      'MARSHA MAULIDA',
      'MUHAMAD ARZATIL KAHFI',
      'NATALIYA ZAHRA AYUNDA PUTRI',
      'NAYLA KHUMAIRA PUTRI',
      'NISRINA AKARUI AMIN',
      'NOVIA TRI AHSANI',
      'NUR AJENG MULIA MAHARANI',
      'RAYHAN RASYA SAPUTRA',
      'RERE CARLYSTA',
      'RETNO SULISTIA NINGSIH',
      'RODERICA CHRISTABEL',
      'SAFIRA AMELIA PUTRI',
      'SITI CINTA FLO',
      'SITI SALWA',
      'SYIFA KHOIRUNNISA',
      'TIARA NUR RAMADHANI',
      'VELIKA AURELIA',
      'VERA APRILIANI'
    ];

    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "X PPLG") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ABIYASHA NADYA OLIVIA',
      'ADILA NURIL HANDOYO',
      'AFNI LABIBAH AFIFAH',
      'AHMAD AFRIANO',
      'AISYAH NUR ABDILAH RAMADHANI',
      'AKBAR AFANDI',
      'AELXSANDER CAESAR HETHARIA',
      'ALIYAH RAMADHANI',
      'ALIYA RADITA UTAMA',
      'BAYU EKA PUTRA',
      'CHOIRULLOH ACHMAD DONI',
      'CINTA MAURA PUTRI',
      'DENIS INDINAR',
      'DEWO NDARU TUNJUNG BIRU',
      'DIAZ RIZQI ARNANDI',
      'EKA BIMA ALFIANSYAH',
      'ERNES NADIRA PUTRI',
      'FERDIO REYVANZA',
      'FREDDY HASIHOLAN HUTANGALUNG',
      'KESILA DESTA APRILLIA',
      'KEVIN NEO RACHADIAN',
      'KIRANA PUTRI SASKIA',
      'MIKHAIL FARIZI',
      'MUHAMAD RIZKI PUTRA',
      'MUHAMMAD FARREL AL ZAHIR',
      'NAUFAL HILMYANDARA',
      'NHMIRRA AZKA DIFANI',
      'RAHANDIKA ALWIYANSHA',
      'RAIHAN WAHYU PRATAMA',
      'RAKHA ATHALLAH',
      'RHAFI AULIA RAHMAN',
      'RIKZA FADHLI ABARUZ',
      'SITI MARWAH',
      'TINO SY\'BAN LUMINTANG',
      'ZOE EZRA RAUUF WAHYUDI'
    ];

  for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI AK 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADINDA RUSMAYANTI',
      'AISYAH RAMADHANI',
      'ALISYA RAHMA SARI',
      'BUNGA SAFIRA PUTRI RIDI',
      'CAMELIA NUR RAHMAH',
      'DWI SEPTY RAMADHANI',
      'FACHRI DIRGANTARA',
      'GHIFARAH',
      'HANIFAH FAUZIAH',
      'HERVAT WANARA',
      'INAYA ADI PUTRI SENTANI',
      'KAYLA MAULIDA ZAHRA',
      'KEYLA OKTAVIA',
      'KHALILA DWITISNA KUMALA',
      'MELINDA CAHYA',
      'MOHAMMAD KEMAL PASHA',
      'NABILA KEISYAH PUTRI',
      'NADHIFAH KIRANA',
      'NADYA TUSSITA',
      'NURSIFAHNI',
      'PERTIWI AGUSTINA',
      'PUTRI DWI LESTARI',
      'RAISSA DEFITRI',
      'RARA PUSPA DEWI',
      'REFANI ALISYA',
      'REFI NUR SYAIBAH',
      'RENA NATALIA PUTRI',
      'SAHNIA RAHMADHANI',
      'SAKINAH NURUL SHAFAR',
      'SINTIA PUTRI RAHMASARI',
      'SYAFIRA RIZKY APRILIA',
      'SYALU BUNGA CANTIKA',
      'SYIFA AULIYA MAULIDINA',
      'SYIFA CLAUDIA',
      'ZAHRA TUSITA DEWI',
      'ZALFA MAULIDYA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIFAH LEVINDYA MASSYAA’ILA BALQIS',
      'AQILAH AKROM',
      'ASSYIFA DWI PUTRIA',
      'BALQIS NABILA PUTRI',
      'DAVINA VEGLIA AZZAHRA',
      'FAISHAL ARDHI',
      'FIKRI AULIA PRATAMA',
      'GADIS PUTRI LESTARI',
      'INTAN NUR KANDRI',
      'JOSUA MANUEL',
      'KAMILA AGNISTI',
      'KASYIFA TUSSAJAA',
      'KHALILAH DAHAYU FATHINAH',
      'KHANSA KHAYYIRAH SAKHI',
      'KHANZA NAFISA AYYASY',
      'LATHTIFAH KHOIRUN NISSA',
      'MAYA GISELLA CRISTIANY MANURUNG',
      'MAYSSA PUTRI CANTIKA',
      'NARIMBI KIRANA LARASATI',
      'NASYIFA PUTRI PRIASTUTI',
      'NAYLA PUTRI HERMANDA',
      'NICHOLAS EDGARD SIAHAAN',
      'NIDA AULIA NUR AZIZA',
      'PUTRI HERLLY OKTAVIANA',
      'PUTRI JULIANA',
      'QOTRUN ADZRINA CHOIRUNNISA',
      'SALSABILLA INDRAWATI',
      'SARAH HUMAIRA',
      'SHAFA NUR MAGHFIROH',
      'TIARA MIFTAHUL JANNAH',
      'VRISKA CAHYA DWI ARIANI',
      'WINNY DESTIA GUNAWAN',
      'ZALFA TYAND PUTRI',
      'ZIBRAN HAFISZ MUBARAK'      
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI BR 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AHMAD FADLAN',
      'ALIFA NAILA',
      'ALIN AGUSTINE',
      'AMELIA NUR AINI',
      'ANNISA PUTERI AULIA',
      'ASLAMIATUS SYIFA',
      'ASTRID INDAH FITRIANI',
      'ATHALIYAH ARIYANI',
      'BRIAN EVAN APTA ANDIKA',
      'DIMAS IRVAN MARDIYAN',
      'ELI PEBRIANTI',
      'FIRDA SOLEHA',
      'FITRIA NUR JANNAH',
      'HAPPY NADIA SULISTYOWATI',
      'IMRON BUKHORI',
      'INGGRID KAYLA LATIEF',
      'KHANSYA UMAIDA',
      'KHAYLA APTA RINJANI',
      'KHUZAIMAH NAFIISA SYAKIB',
      'LAURA APRIANTI',
      'LINTANG CHAMILA',
      'MUHAMMAD NOUVAN ALFAHREZIE',
      'NADIA RAHMAH SYAHIRA',
      'NADIN TAHIRAH INNAYAH',
      'NAJUBA HANUN',
      'NANDA ALIFIYANTI',
      'RADEN KIRANA SEPTIANA',
      'RAFFASYA RAMADHAN FATHURI',
      'RAISYA ANNISA BILQIS',
      'RASYA IBRAHIM',
      'SALMA ANISYAI MAHARANI',
      'SAVA MARWA LIDYA',
      'SYIFA NADHIFAH',
      'TALITHA PUTRI AZ-AHRA',
      'ZAHRA AULIA',
      'ZAKY HARSA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI BR 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIFAH RAHMADANI',
      'ALUDYA PUTRI MAHARANI',
      'ALYSSA PUTRI ZAHRA',
      'AMELIA RISNA WATI',
      'AMELYA SYAH RIZAL',
      'ANASTASIA KAREN VALENTINE',
      'ANAYA KIRANA',
      'ANGGREANI AYU SITASARI',
      'BUNGA SYAFIRA',
      'DAMAR SURO AJI PUTRO',
      'DIFA LAELATUL FERANIKA',
      'ELIS NATALY AUDINA',
      'FACHRY ARDIANSYAH',
      'FRISKA NARAYA AYUNINGTIYAS',
      'FUAD ADAM GUSAI',
      'GAGA PUTRA PRAKOSO',
      'KALILA AURELIA',
      'KALISTA PUTRI',
      'KESYA ZULFA SHOLIHA',
      'KEYSA MAYLOVANI',
      'NAYLA GAIA PUTRI',
      'NESYA KALIFA PUTRI',
      'NONA JULIA',
      'NOVIANZA HAYATI',
      'PUTRIA SYABILLA',
      'RATIH RAHMADANI HARYANTI',
      'REINATA PRABOWO',
      'RIRIN AISYAH',
      'RIYAN RAIS ABDURRASYID',
      'SAFA KYNA MAHESWARI',
      'SAFIRA FIRDAUS VAN GOBEL',
      'SEPTIANA WAHAB',
      'SITI AULIA AMANAHTUSSOLEHA',
      'TIARA ANGGRAINI',
      'TRI INDAH YULIANA',
      'ZAHRA AYU PRADITHA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI DKV") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADAM FADHLURRAHMAN',
      'ADHITYA FADHLURRAHMAN NUGROHO',
      'ANDINI JULIASTRI',
      'ATTALA RAFFA ANANDITYA',
      'DAFFY AL FARABI',
      'FABIAN RAMADHAN HAYANTO',
      'FARANIE ALIATAMA',
      'FATHAN REFAYA NAWANDI',
      'FATIMAH ROSYATUL HUDA',
      'KALUNA AMALIA AYUDHIA',
      'KEYLA ARDIANA OKTANIVA',
      'KHAFI FAUZAN HAFIDZ',
      'MARWATI RAHMADANI LIANDI',
      'MAUDY ALTA VUNISHA',
      'MEISYA WULANDARI',
      'MELA NAFISA',
      'MUHAMMAD DAFFA AISY',
      'MUHAMMAD HAIKAL',
      'MUHAMMAD RAFA AZIZI',
      'MUHAMMAD RAUF FARIS RAMADHAN',
      'MUHAMMAD RIDWAN',
      'NAURA HISANAH PUTRI PERMANA',
      'NUR AISYAH AZZAHRA',
      'RAISYA HUMAIRA',
      'RASSYA YUSUF RABBANI',
      'REVA MAULIDYA',
      'SACHSIA HUMAIRA DHARMAWAN',
      'SAFIRA DWITA MAHARANI',
      'SAVIRA MAHARANI',
      'SEKAR TSABITAH',
      'SOFIE AZ-ZAHRA ANANDYNA',
      'SYAFITRI',
      'TALITA AYU LESTARI',
      'VANESSA ADARA CALISTA',
      'VIA AULIA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI MP") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADELLIA NAZHWA',
      'AGNES VERONIKA NAIBAHO',
      'AI CANTIK LESTARI',
      'AJENG RAHELLIA',
      'ALLEGRI MAESTRO TRESNA',
      'ALVIRANIA HILMAYA',
      'ANESKA MALVI IMTIYAZ',
      'AURELIA DAMAYANTI',
      'CHAIRUNISA',
      'DISKA NUNGGRAINI',
      'EKA SRI WIJAYANTI',
      'INTAN KHARISMA PUTRI',
      'JIHAN SAFITRI',
      'KHANSA SAUSAAN MUFIDAH',
      'KHOIRUNNISA',
      'MARSELLA DWI PUSPITA',
      'MAULIYA NAZHIFA',
      'MELANI CHASANATI',
      'NADIA KHOIRUNNISYA',
      'NAJLA AZIZAH',
      'NOVI ASTARY',
      'PRIHARTONO JAYANASASTRA',
      'RAISYA ANASTASIA SALSABILA', 
      'RAMDANI',
      'RESNU KUSNANDAR',
      'RHAMANDHA AUDRIANI KHOIRUNISA',
      'SARAH ADHITYA SALSABILA',
      'SATYA HADI NUGRAHA',
      'THALITA DWI SYAFIRA',
      'VANESSA KENCANA SUKMA',
      'WIDIA NINGSIH',
      'YULIA OKTAVIA',
      'ZAHRAWANI',
      'ZAHWA AQILLA',
      'ZALWA ALGUEZA RAMADANI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI PPLG 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ABDUL HARITS',
      'ABDULLAH RAYHAN AL-AYYUBI',
      'ADITYA ANGGARA PUTRA',
      'ADVENT IMANUEL',
      'BADRINA KAMILAH AKHBAARY',
      'CAHAYA SABNAH SAHFITRI',
      'DEFA ASRI KURNIAWATI',
      'FAHRI AFFANDI',
      'FATHAN DENING KAYANA',
      'FIRMAN NUR SHOLEH',
      'GIBRANT SYAHREZA WIJAYA',
      'HALWA HASHIFAH',
      'INDIRA MELIANA ZAHRA',
      'KHARISMA HAJAR ANWAR',
      'LIVO MARCELINO',
      'MASAGUS MOCHAMAD RIFQY',
      'MOCHAMAD FADHLI AL BAASITH',
      'MUHAMAD AFIF DHAIFULLOH',
      'MUHAMMAD ELANG RABBANI',
      'NADHIENNIA MAULANA',
      'NATHANIA DAHAYU INDURASMI',
      'NIHAT HERLANGGA',
      'NUR AISYAH MEL SABILA',
      'NUR SYIFA KHOIRUNNISA',
      'RADEN FAJAR BUANA RIZKY',
      'RADITHYA ARDIN SUDRAJAT',
      'RAISYA HAURA ALIFTANIA',
      'RAKA ADITYA',
      'RAKSA DEWA FARABY',
      'RENALDI AHMAD RAMADHAN',
      'RIZELTO ATTARIO',
      'SAKHA PUTRA SOFARI',
      'STEFANY BLEZE NEIRA',
      'SYIFA MAGHFIRA OKTAVIANI',
      'ZAHARA AMELIA PUTRI',
      'ZAHRA KAMILA EFENDI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XI PPLG 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AHMAD FAQIL',
      'AIRA YASMIN DJAKILA',
      'AKBAR WALIDINATA',
      'ANANDYTA PUTRI SUCIPTO',
      'ANDINI SEPTIA RAHMADANI',
      'ANILA ESHAL',
      'ANSORI FAHMI',
      'FAKHRI CAESARAINANTO',
      'FAREL AL AFIEF',
      'FATIA AL ZAHRA',
      'FEIRUZ NADFHIF ADITYA NURRACHMAN',
      'FILTHAN DEMIANT',
      'ISNI NUR AINI',
      'JIHAN ZASKIA',
      'JOFAN WISNU NIGROHO',
      'JOSE ANDREANO SIMBOLON',
      'KEISHYA MARVA ELLENA',
      'KHALISA CAHAYA MEDINA',
      'KIRANA NATHANIA AZIZZA',
      'KISWA NUR FAIZA',
      'MUHAMMAD FADHEL RUZAIN',
      'MUHAMMAD FAHRI AKBAR',
      'MUHAMMAD HABIBI',
      'MUHAMMAD HAIKAL RASYAPUTRA',
      'MUHAMMAD IHYA ULUMIDDIN',
      'MUHAMMAD RAFFAH',
      'MUHAMMAD REVAND FAHLEVI',
      'NUR HUSNA SYA\'BANDIAH',
      'NUR USHWATUN HASANAH',
      'RACHEL PUTRI',
      'RIFA AZHAR RAHMADHAN',
      'RIFDAH RIDHHADATUL AISY',
      'SHELLY NOVELLA',
      'TONI WIYANTO',
      'ZIDANE ACHMAD NURJAYYIN'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII AK 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIYA SAFIYANA',
      'ALLYSA PRICILIA',
      'ALYA RATU NAJWA',
      'ANDISTY GALUH PRATIWI',
      'AQIILAH ZAINI',
      'EILLINE HADASYAH DAMAYANTI',
      'FATIM AZWA NABILAH SEHA',
      'HANUM PUTRI SETIAWAN',
      'HANYTYA MAULYZA',
      'IDNAIMU NADIYYUL KAFFI',
      'INDAH MAHARANI',
      'IRWAN ARDIANSAH',
      'JIHAN ANNISA AZZAHRA',
      'KENTRIA SETIAHATI NINGRUM',
      'KEYSSIA AULIA HARYANTO',
      'KHANSAH MUNTAZ YULIANAH',
      'KINAYA KEISHA NUGRAHA',
      'MUHAMMAD IQBAL',
      'MUHAMMAD YAQZAN FAIRUZY',
      'MUHARAHMA SUCI KIRANI',
      'MUHARIK ALIF FAUZAN',
      'NAURA SALSABILA',
      'NOFA ALIKA',
      'NOVA ALESYA',
      'NURJANNAH',
      'RIKA FITRIYANI',
      'RIRIN PERMATA SARI',
      'RIZKA SYATHYRI',
      'RIZKY RAMADHAN',
      'ROBBIATUL ADAWIYAH',
      'SABILA PUTRI KINANTI',
      'SYAHARA FEBBYANI',
      'TIARA ANGGITA',
      'UMMU HANI',
      'WULAN OKTAVIA NERI',
      'ZELDA SAHARA SHARAPOVA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII AK 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ADRIAN PURNAMA FEBRIANSYAH',
      'ARDELIA TALITHA AZZANI',
      'ARIA WIBAWA WIRAYUDA',
      'AZAHRA TUSSHITA',
      'DESWANTI AFRIANI',
      'DUTA AKBAR',
      'ELIZA CHAERANI PRATIWI',
      'FACHRI RAGIL SAPUTRA',
      'FARAH TRIANA',
      'IZMI AISYAH NURAINI',
      'JIHAN ZAHIYA PUTRI',
      'KARTIKA PUTRI NIDJI',
      'KARTIKA SARI',
      'KAYLA AZZAHRA',
      'KRISTIN AMELIA',
      'LUSIANA SALSABILA',
      'MARNI ELFRIDA WASTI NAPITUPULU',
      'MONA CALISTA',
      'MUTIA BINTANG SHOLEHA',
      'NAFIS AHMAD NAUFAL',
      'NAFISAH NAILAL HUSNA',
      'NAILAH KHAIRANI',
      'NAJWA NAFISAH',
      'RAFIFAH NADIF ATIQAH',
      'RAISAH NUR ADIVA',
      'RANA NAIFA HANUN',
      'RANI AZZA ATSILAH',
      'RATIH',
      'SATRYA PUTRA RIDWANTO',
      'SHARREN NABIHA SAKHI',
      'SHOFIYAH ZAINAH RAMADHANI',
      'SITI NUR AINI',
      'SITI UMAIROH',
      'SYAFIRA DWI FEBRIYANTI',
      'SYILLA TRI CAHAYANI',
      'TAMARA SORAYA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII BR 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'AHMAD FAHRUROZI AL MALIKI',
      'ALDA DWI MEISYA',
      'ALLSADRY ZILDJIAN',
      'ALYA MEGA SAKIRA',
      'ANISYAH MEILINA',
      'AULIA FAHRUNISA',
      'CHINDY NAIRA NUR SUBANDA',
      'DANIA ZAHRA',
      'FEBRYANI BAHARUDIN AL AMUDI',
      'FEBY ZALIANTI',
      'FIKA IRAWAN',
      'FINA NAYLATUL HIDAYATI',
      'FLORA AZZAHRA',
      'INDRIA AFRILIANTY',
      'IRA NOPITA SARI',
      'KEYSHA CHANDRA',
      'KHAIRA RAMADHANI',
      'KHAYLA CAHAYA MAHENDRA',
      'KINAR RAMADANI',
      'LARA NURFAIZAH',
      'LINDA PRATIWI',
      'MIRA ZARREFA ANGELINA',
      'MUHAMMAD ADITYA RAMADHAN',
      'MUTIA AYU LISTY',
      'NABILAH ANDRIANI',
      'NADIN PRATIWI',
      'NAYLA KAISAN',
      'NAYLA KARTIKA SARI',
      'NAYLA ZALFA BUSTAMI',
      'SITI AISYAH',
      'SITI KHALIFAH TULJANAH',
      'SRI FAKHITAH AN NAHROWI',
      'TARRISKA ISMADANI',
      'ZAHRA KHUMAYIRA',
      'ZAKIYAH AULIA',
      'ZYAHRA SITI NURAINI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII BR 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ANNASTYA MUKHOFIFAH',
      'ARINI CLARISSA ZAHARA',
      'AURA NOVA DWI PRIHATINI',
      'CHARISYAH MAULIDINAYA',
      'DECA PUJI LESTARI',
      'DEWI AYUSITA',
      'FARAH ADILLA PUTRI',
      'FARRAH AQILA',
      'FATIMAH SALSABILA',
      'FEBRIANA NUR ANGGRAENI',
      'GINA ALIFAH',
      'GINA NOVIANA',
      'HANA RAIHANUN',
      'KEYLA ANINDYA PUTRI',
      'KEYLA YUSTIANA',
      'KEYLIN RAHMA YASIFA',
      'LAELA SASKIA PUTRI',
      'LAILA NAFILA',
      'MEILANI PUTRI',
      'MEISTA OKTAVIA',
      'MERRY FEBRIYANTI',
      'MUHAMAD IQBAL FIRDAUS',
      'NADINE NARWASTU',
      'NEZSA ANDARA PUTRI',
      'NI PUTU SUPRATISTATI SWADAYA',
      'NURUL MELATI SABNA',
      'PUPUT LUSFI AMELIANA',
      'RAYSHA NUR AFIFAH',
      'RISKITA PRASANAYANG',
      'SEPTYANINGRUM',
      'SHABILA NURUL ASSYIFA',
      'SITI ACKASYA PUTRI',
      'TEUKU UMAIR MUKAFIH',
      'TRI FEBRIYANTI',
      'VIVI SEPTIANINGSIH',
      'ZAHRA DESWITA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII DKV") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALDINA REYNA ACHMAD DIMYATI',
      'AMIRUL FADLY',
      'ANNISA SOFIA MOGHA',
      'BALQIS ZOFIA',
      'BIMMA EXA ALEXANDER',
      'DEWI NURHAYATI',
      'DIVA AMELIA PUTRI',
      'FACHRI SYAH PUTRA',
      'GHENDIS DHAMAYANTI',
      'HANI EKA MAULIDA',
      'INDAH DWI PUSPITA',
      'JESSLYN SUTJIONO',
      'KAYLA ZAKIA ZAHRA',
      'M. DEVANDI YUNDIANSYAH',
      'MOCHAMAD DEWA DARWINSYAH',
      'MUHAMMAD YUSUF HABIBI',
      'MUHAMMAD ZIDAN EFENDI',
      'MUHAMMAD FABIO PRADANA',
      'NAIRA PUTRI HANITA',
      'NIKEISHA SALSABILA PUTRI RIANDA',
      'NIKEN AYU AGUSTIN',
      'RAIDITHA EKA KURNIAWAN',
      'RESYAH MARLITA SAPTIYANI',
      'RHOUDOTUL JANNAH',
      'RIZKA PUSPITA',
      'SATRIO DWINUR SETIAWAN',
      'SEPTIA RAMADHANIA',
      'SITA HAPSARI',
      'TIARA APRILLIA',
      'TIFFANI SYIFA SALSABILLAH',
      'TYAS NAURARAH ARDINING',
      'ULAYA JAHRO MURTAJA',
      'ZASQYA RABBY SALSABILA',
      'ZEFANIA CALLISTA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII MP 1") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ABIYYAH HUMAIRA',
      'ADHISTY KIRANI PUTRI',
      'ADINDA AULIA PUTERI',
      'AINUN SARI',
      'AIRIN AULIA',
      'BUNGA FEBRIYANTI',
      'CHIKA KHAERUNNISA',
      'DEWI LESTARI',
      'ERLIA YULIANDARI',
      'JENIS RODIYAH AZAHRA',
      'KAFKA NAVISHA',
      'LINA DWI FEBRIANTI',
      'MAHADIKA DWI MULIANI',
      'MARSYAH ANJANI',
      'MUTHIA FEBRINA NAZARI',
      'MUTIA FUJI ARYANTI',
      'NABILA',
      'NOVIA TRI WAHYUNI',
      'NUR HALIMAH',
      'PELANGI NIKEN AMANDA',
      'PRISCA AURELLIA',
      'PUTRI RAMADHANI',
      'RISA KARUNIA MAULID',
      'RISKA AMELIA',
      'RIZKI MULIYANINGSIH',
      'RIZKY STEVANY WULANDARI',
      'SABRINA ADE CAHYANI',
      'SALWA NISRINA AL FATIN',
      'SAYRA NAYSILA',
      'SHERRON ALVIANY',
      'WINDRIANTI FURQONIDA',
      'WULAN SARI',
      'ZAHROTUL MAHABBAH',
      'ZAHWA ALLYA MALIKA',
      'ZAHWA JULIARTI',
      'ZALFA NIDA ZAHRAH'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII MP 2") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
'AISYAH AZZAHRA PUTRI',
      'ALIFFA NUR SALFANI',
      'ANI MARLA',
      'APRILLIA AL DINIYAH',
      'BALQIS SALMANDA',
      'CAHYA RAHMADANI',
      'DEA BUNGA ARTIKASARI',
      'DEVINA PUTRI HUMAIRA',
      'GUNTUR',
      'HANNA RIMTHA GINTING',
      'HARSYA OKTADHEA PUTRI',
      'INESYA MAHARANI',
      'KESYA ARDIANI',
      'KEYSHA AURA SARFENA',
      'MAULINA SETELA WATI',
      'MEYLINDA DINA ISTIANA',
      'MUHAMMAD FARHAN',
      'NABILA MAULIDA',
      'NAJWA INAYAH',
      'NAJWA ULFA',
      'NATASYA INDRIANI SIAHAAN',
      'NOVI WIDYASTUTI',
      'NUR RISMA WATI',
      'PASHA SYALWALYNO',
      'RAHELLIA NINDY AGUSTINA',
      'RAISYA SAHARA PUTRI',
      'REVA ARSHINTA',
      'SILMI AZZURA',
      'SINTA AYU PUSPITA SARI',
      'SITI NURHASANAH',
      'SYALWAH AULIA NANDITA',
      'SYIFA FITRIAWATI',
      'WAHDAH AULIA MARINI',
      'ZENNA FAIZAH',
      'ZHAFIRAH SHAFA TIYANDARI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII RPL") {
    var selectElement1 = document.getElementById("kelas");
    selectElement1.innerHTML = "";
    var newOptions1 = kelas;
    var option1 = document.createElement("option");
    option1.value = newOptions1;
    option1.text = newOptions1;
    selectElement1.appendChild(option1);

    var selectElement2 = document.getElementById("nama");
    selectElement2.innerHTML = "";
    var newOptions2 = [
      'ALIF RAMADHANI',
      'ANGGISNA FEBRIYANI',
      'ASYFA NURRAHMA',
      'BINTANG YUDHA PUTRA PURNOMO',
      'CANTIKA AZKA AQILA',
      'DIMAS PRADIPTA MULYA',
      'ELANG NUR FADILLAH',
      'FADHLAN AGHNATAN',
      'FAJRI SUHADA HAJAT',
      'FITRI HANDAYANI',
      'HUSNI MUBAROK',
      'IBNU HABIBULLAH',
      'IRFA ZAHRA TUZZIQRIYAH',
      'JORDANIUS HALOMOAN HAUTAPEA',
      'KIRANIA NUR FATIMAH',
      'MUHAMMAD AKHSEL DWINANDA',
      'MUHAMMAD AMRI IKHDA RIFAAN',
      'MUHAMMAD ARTHUR FADILAH',
      'MUHAMMAD ILYASA',
      'MUHAMMAD NABIL AL GHIFARI',
      'MUKAFI ARZAQA',
      'NELSI CORNELIA',
      'NUR MUHAMMAD NAUFAL',
      'RADITYA PUTRANTORO',
      'RAKA PRATAMA SAFIRA',
      'RIZKI MAULANA FIRDAUS',
      'RIZQI ALFARIANSYAH SALIM',
      'RIZQI TIRTA AYU',
      'SAYID ARIP',
      'SEKAR INDAH LESTARI',
      'SULTAN ARHABURRIZQI EL QUDSI',
      'SUNANDIKA',
      'TADZKYA SANINA',
      'YAAHANIIZH MUTIARA',
      'ZALFA APRILIA JUVENTINI'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyAvl1oqrQ8GVbKjIMewngTGrc3emGfheNk",
  authDomain: "database-test-2-50f4f.firebaseapp.com",
  databaseURL: "https://web-atribut-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "database-test-2-50f4f",
  storageBucket: "database-test-2-50f4f.appspot.com",
  messagingSenderId: "365710343232",
  appId: "1:365710343232:web:c85818587bf74f6223b3a5"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Set database variable
var database = firebase.database()

function save() {
  // Show loading modal
  $('#loadingModal').modal({
    backdrop: 'static',
    keyboard: false
  });

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var today;

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;
  document.getElementById("tanggal").value = today;

  var kelas = document.getElementById('kelas').value
  var nama = document.getElementById('nama').value
  var pelanggaran1 = document.getElementById('pelanggaran1')?.value || '---';
  var pelanggaran2 = document.getElementById('pelanggaran2')?.value || '---';
  var pelanggaran3 = document.getElementById('pelanggaran3')?.value || '---';
  var pelanggaran4 = document.getElementById('pelanggaran4')?.value || '---';
  var pelanggaran5 = document.getElementById('pelanggaran5')?.value || '---';

  database.ref(today + '/' + kelas + '/' + nama).set({
    pelanggaran1: pelanggaran1,
    pelanggaran2: pelanggaran2,
    pelanggaran3: pelanggaran3,
    pelanggaran4: pelanggaran4,
    pelanggaran5: pelanggaran5
  })

  // Hide loading modal after 4 seconds
  setTimeout(function () {
    $('#loadingModal').modal('hide');
    alert('Berhasil');
    // Redirect to a new page
    window.location.href = "index.html";
  }, 4000);
}
function displayData() {
  var dataRef = database.ref();
  var dataContainer = document.getElementById('dataContainer');

  // Retrieve data from Firebase
  dataRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();

      // Create buttons for each tanggal
      for (const tanggal in data) {
        if (data.hasOwnProperty(tanggal)) {
          var tanggalButton = createButton('Tanggal: ' + tanggal, ['btn', 'btn-primary', 'animate__animated', 'animate__fadeIn', 'mb-2']);

          // Add event listener for tanggal button click
          tanggalButton.addEventListener('click', function () {
            showKelas(data[tanggal]);
          });

          // Append the tanggal button to the container
          dataContainer.appendChild(tanggalButton);
        }
      }
    })

  // Function to create a button with inner HTML and Bootstrap classes
  function createButton(htmlContent, classes) {
    var button = document.createElement('button');
    button.innerHTML = htmlContent;
    button.classList.add(...classes); // Spread the array of classes
    return button;
  }

  // Function to create a div with inner HTML
  function createDiv(htmlContent) {
    var div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div;
  }

  function showKelas(kelasData) {
    // Clear existing content
    dataContainer.innerHTML = '';

    // Create buttons for each kelas
    for (const kelas in kelasData) {
      if (kelasData.hasOwnProperty(kelas)) {
        var kelasButton = createButton('Kelas: ' + kelas, ['btn', 'btn-success', 'animate__animated', 'animate__fadeIn', 'mb-2']);

        // Add event listener for kelas button click
        kelasButton.addEventListener('click', function () {
          showNamaPelanggaran(kelasData[kelas]);
        });

        // Append the kelas button to the container
        dataContainer.appendChild(kelasButton);
      }
    }

    // Append the Back button to go back to the initial state
    var backButton = createButton('Back', ['btn', 'btn-secondary', 'animate__animated', 'animate__fadeIn', 'mb-2']);
    backButton.addEventListener('click', function () {
      // Clear existing content and display the initial state
      dataContainer.innerHTML = '';
      displayData();
    });
    dataContainer.appendChild(backButton);
  }

  function showNamaPelanggaran(namaPelanggaranData) {
    // Clear existing content
    dataContainer.innerHTML = '';

    // Create divs for each nama and pelanggaran
    for (const nama in namaPelanggaranData) {
      if (namaPelanggaranData.hasOwnProperty(nama)) {
        var namaDiv = createDiv('Nama: ' + nama);
        
        // Append a space (empty div) after each "Nama" entry
        var spaceDiv = createDiv('');
        spaceDiv.style.marginBottom = '10px'; // Adjust the margin as needed

        const jenisPelanggaranKey = namaPelanggaranData[nama];
        for (const jenisPelanggaran in jenisPelanggaranKey) {
          if (jenisPelanggaranKey.hasOwnProperty(jenisPelanggaran)) {
            const Pelanggaran = jenisPelanggaranKey[jenisPelanggaran];

            var jenisPelanggaranDiv = createDiv('Jenis Pelanggaran: ' + Pelanggaran);

            // Append the jenisPelanggaranDiv to the namaDiv
            namaDiv.appendChild(jenisPelanggaranDiv);
            namaDiv.style.fontWeight = "bold";
            jenisPelanggaranDiv.style.fontWeight = "normal";
          }
        }

        // Append the namaDiv and spaceDiv to the container
        dataContainer.appendChild(namaDiv);
        dataContainer.appendChild(spaceDiv);
      }
    }

    // Append the Back button to go back to the initial state
    var backButton = createButton('Back', ['btn', 'btn-secondary', 'animate__animated', 'animate__fadeIn', 'mb-2']);
    backButton.addEventListener('click', function () {
      // Clear existing content and display the initial state
      dataContainer.innerHTML = '';
      displayData();
    });
    dataContainer.appendChild(backButton);
  }
}

// Memuat data tahun secara dinamis ke dropdown filter
function loadAvailableYears() {
  database.ref().once('value').then(snapshot => {
    const data = snapshot.val();
    const yearSet = new Set();

    // Ambil tahun dari setiap tanggal
    for (const tanggal in data) {
      if (data.hasOwnProperty(tanggal)) {
        const year = tanggal.split('-')[0];
        yearSet.add(year);
      }
    }

    // Tambahkan opsi tahun ke dropdown
    const filterYear = document.getElementById('filterYear');
    yearSet.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      filterYear.appendChild(option);
    });
  });
}

// Fungsi untuk memuat dan memfilter leaderboard
function displayLeaderboard(filterMonth = "all", filterYear = "all") {
  var dataRef = database.ref();
  var dataContainer = document.getElementById('displayLeaderboard');

  dataRef.once('value')
    .then(snapshot => {
      const data = snapshot.val();
      var namaInfo = {};

      for (const tanggal in data) {
        if (data.hasOwnProperty(tanggal)) {
          const [year, month] = tanggal.split('-');
          const kelasData = data[tanggal];

          // Filter berdasarkan bulan dan tahun
          if ((filterYear === 'all' || filterYear === year) &&
              (filterMonth === 'all' || filterMonth === month)) {
            for (const kelas in kelasData) {
              if (kelasData.hasOwnProperty(kelas)) {
                const namaPelanggaranData = kelasData[kelas];
                for (const nama in namaPelanggaranData) {
                  if (namaPelanggaranData.hasOwnProperty(nama)) {
                    const pelanggaran1 = namaPelanggaranData[nama].pelanggaran1;
                    const pelanggaran2 = namaPelanggaranData[nama].pelanggaran2;
                    const pelanggaran3 = namaPelanggaranData[nama].pelanggaran3;

                    const pelanggaranList = [
                      { jenis: pelanggaran1, tanggal },
                      { jenis: pelanggaran2, tanggal },
                      { jenis: pelanggaran3, tanggal }
                    ].filter(p => p.jenis !== '---');

                    if (!namaInfo[nama]) {
                      namaInfo[nama] = {
                        kelas: kelas,
                        pelanggaran: [],
                        totalPelanggaran: 0
                      };
                    }

                    namaInfo[nama].pelanggaran.push(...pelanggaranList);
                    namaInfo[nama].totalPelanggaran += pelanggaranList.length;
                  }
                }
              }
            }
          }
        }
      }

      let leaderboardArray = Object.entries(namaInfo).map(([nama, info]) => ({
        nama,
        kelas: info.kelas,
        totalPelanggaran: info.totalPelanggaran,
        pelanggaran: info.pelanggaran
      }));

      leaderboardArray.sort((a, b) => b.totalPelanggaran - a.totalPelanggaran);

      let leaderboardHTML = '';
      leaderboardArray.forEach((entry, index) => {
        leaderboardHTML += `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${index + 1}. ${entry.nama}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Kelas: ${entry.kelas}</h6>
              <p class="card-text">Total Pelanggaran: ${entry.totalPelanggaran}x</p>
              <h6>Detail Pelanggaran:</h6>
              <ul>
                ${entry.pelanggaran.map(p => `<li>${p.tanggal}: ${p.jenis}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      });

      dataContainer.innerHTML = leaderboardHTML || 'No data available.';
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      dataContainer.innerHTML = "Terjadi kesalahan saat mengambil data.";
    });
}

// Fungsi untuk menangani filter bulan dan tahun
function filterLeaderboard() {
  const selectedMonth = document.getElementById('filterMonth').value;
  const selectedYear = document.getElementById('filterYear').value;
  displayLeaderboard(selectedMonth, selectedYear);
}

// Muat data awal dan dropdown tahun
document.addEventListener('DOMContentLoaded', () => {
  loadAvailableYears();
  displayLeaderboard();
});
