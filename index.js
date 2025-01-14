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

  if (kelas == "X BR 1") {
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

  if (kelas == "X BR 2") {
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

  if (kelas == "X MP") {
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
      'KANIA SUKMA APRILIA',
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

  if (kelas == "X PPLG 1") {
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

  if (kelas == "X PPLG 2") {
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
      'FARRAS ZAFIR IMRAN',
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
      'RACHEL PUTRI EFFENDI',
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

  if (kelas == "XI MP 1") {
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

  if (kelas == "XI MP 2") {
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

  if (kelas == "XI RPL") {
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
      'ADINDA ANUGRAH RIZKY',
      'ANGGITA RISMA DEWI',
      'APRILA ANGGARI',
      'ASKA ASKIA',
      'ASYIFA NURSA\'ADAH',
      'AULIA AZAHRA',
      'AYUNA KHAIRUNNISA',
      'CHELSE JESY OLIVIA',
      'CITRA RAHMA AULIA',
      'DEVI FATMA SARI',
      'DINA AULIA SISWANTO',
      'EMELY RESTIANA',
      'ERLANGGA AFRIANSYAH PUTRA',
      'FADIRA GUSTIYANA',
      'FAUZIAH NUR KAMILAH',
      'FIRDA SAKINAH',
      'GUSTI AYU CHARMEN SAVITRI',
      'KHANA KHAIDAH NINGSIH',
      'LINDA PUTRI PURNOMO',
      'MAR\'ATUL AULIA NUR ISNAENI',
      'MESSI SYAHRANI',
      'MOZA ADITIYA',
      'NABILA DWI HIDAYAT',
      'NADINE KARTIKA DARWIN',
      'NIKE OKTAVIA RAHMASARI',
      'NURMALINDA',
      'PUTRI MEYKA ANDINI',
      'RAHMADANIA',
      'REVINA ADLIA FACHRANI',
      'SAJIDAH RAMADHANI',
      'SEVILA AULIA',
      'SILVIA SYAHRONI',
      'SITI ROBIATUL ADAWIYAH',
      'SYAHLA NAVISA',
      'TIFANIA RAMADHANI',
      'VIKA KHAIRIYAH'
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
      'ALISYA NUUR KHOFIYA',
      'ANIS ISMA NURJANAH',
      'ASTRID OCTA RAMADHANI',
      'AULIA APRILIANI',
      'AURA NADIA HADI PUTRI',
      'BUNGA SEROJA PUTRI GUFRON',
      'CHRISTIN BUNGA NATALIA',
      'CITRA AULIA',
      'DESI LESTARI',
      'DIAN AHIRIYANI',
      'ELSA MAULIDIYA',
      'FATIHA NUR ZAHWA',
      'FIRDA DIAH AGUSTINA',
      'GENDYS ROBBIATUL SYIFA',
      'HANINA NAYARA SYAFA',
      'KHOIROTUN NISSA',
      'LINTANG JULIANA ZAHRA',
      'MAWADDAH SYAKINAH SETIADI',
      'MIA AMELIA',
      'MUHAMMAD RIZQI MAULANA',
      'NADIA',
      'NEIZQILLASHAQQA AURENZZA',
      'NUR SAKINAH QOLBI MAULIDI',
      'PUTRI MAHARANI',
      'PUTRI RAMADHAN',
      'RAHMAT FADILAH',
      'SAFIRA NUR\'AINI',
      'SELFIA AMELLIA',
      'SHAFIQAH MISTAM',
      'SIDNEY MILLENIA',
      'SINDI',
      'SUKMANING AYU WANDIRAH',
      'SYALSABILA DWI RAMADHANI',
      'VERINA ZAHRA',
      'YUSROFUL FUMAIDA AMELIA'
  ];
  
    for (var i = 0; i < newOptions2.length; i++) {
        var option2 = document.createElement("option");
        option2.value = newOptions2[i];
        option2.text = newOptions2[i];
        selectElement2.appendChild(option2);
    }
  }

  if (kelas == "XII BR") {
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
      'ALIN ARINI',
      'ALISA',
      'ALLYSA AGUSTIN',
      'ALMA RISMARTANTI',
      'ALYA FAIHAA RAMADHANI',
      'ANNISA DWI YUNIATI',
      'ARINI NUR HANIFAH',
      'BUNGA ZELIA AKMALIA PUTRI',
      'DINA ASITA',
      'DZAKY ARSAN HIDAYAT',
      'FATIKHAH RAHMADHANI',
      'GENDHIS AJENG RAHMANIA S',
      'HILDA YULIANTI',
      'INARA RAZANA WAFA',
      'JHESICHA FEBIOLA',
      'KAYLA ADINDA PANGESTU',
      'KAYLA SYAHARANIE',
      'KEYSA SYOFYANI',
      'KYRA SANMILDEN',
      'NABILLA KHANZA',
      'NAILA MUAZZALA',
      'NAJWA HASYA DAMAR',
      'NANDA SABELA',
      'NAYLA ORCHIDELIA',
      'NAZWA SALWANISA',
      'NUR FADIAH RAMADHANI',
      'NURLAILA RAMADHANI',
      'PUTRI ZAHRA ALYA',
      'SAEPUL UMAR',
      'SARAH KIRANI FATURAHMAN',
      'SHALWA AMELIA',
      'SYIFAA SALSABIILA',
      'TISYAH UMAIRAH',
      'WITRI RAHMADANI',
      'WULANDARI',
      'ZAKIAH MAUDIANA'
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
      'ADINDA DENISSA CANDRAKANTI',
      'CELSA AGUSTINA',
      'DHIYAA ALYA RAMADHANI',
      'DIDAH IRMA YANTI',
      'DWI WAHYU SULISTYO',
      'FARHAM DINA',
      'FINA SEPTIANA',
      'FUZIAH',
      'INDIRA RUSDA',
      'ISNNI ALANA MULYAWAN',
      'IVANA NATALIE QUINN',
      'JELITA NURUL ALINI',
      'MUHAMAD IKSAN FADILAH',
      'MUHAMMAD JAFAR SHIDIQ',
      'NABIL FAJRI HAKIM',
      'NADINE SULISTYA PASHA',
      'NASHWA ARNIA SAFWA',
      'NASWA ZAHRANI HUDA',
      'NAYLA HUSNA ALIATHA HADI',
      'NEISA NADEA PUTRI',
      'NOENNAFATRA AZAHRA NEYFARATU',
      'NOVA ISMAINI',
      'NUR HIDAYAH',
      'NURUL AZ ZAHRA',
      'PATRESIA HELENA DANI',
      'PERMATA SYANI',
      'RAZAN MUHAMMAD SAKHA',
      'SALWA AMELIA PUTRI',
      'SHELINA ROYDINATA SAFIRA',
      'SHIRENNA MICHELE PUTRI HENDRAWAN',
      'TIARA RACHMADINA',
      'UMAR AL - FARUQ',
      'ZAHWA ZAUZA RIFAI'
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
      'ADELIA SYAFIRA',
      'AISYAH ROHMAN',
      'ARSYA BILLA',
      'AULIA CAHAYA',
      'AURELITA CINTA RACHMAN',
      'BINTA MA\'RIFA',
      'CAMILLA JULIA AZZAHRA',
      'CHIKA NUR ARDILA',
      'DEFI FATMAWATI',
      'DELIANA SASKIA RAHMADANI',
      'DINDA FATIA AZ ZAHRA',
      'FADIA RAHMA AULIA',
      'FITRI LESTARI',
      'HANIFAH OLIVIA QEISA',
      'INDRESSWARI PRAPTI RAHAYU',
      'INNE RAMADHANI',
      'IRMA FEBRIANI',
      'JIHAN DELIA LESTARI',
      'KESYA ZAHWA AZ-ZAHRA',
      'MELA PUSPITA LUPI',
      'NETI FERITA LOIDE ULANA',
      'NILDZA SERAFINA',
      'NUR FAJRIYAH',
      'NURIN NABILA',
      'RAIHAN RAMADHAN',
      'RATRI FADILLAH',
      'SALSABILA AINI RAMADHANI',
      'SALWA DINAR HAURA',
      'SARAH SEVILIA',
      'SEKAR AULIA FEBRIYANTI',
      'SHAZKIA AULIA PUTRI',
      'SUHAILAH',
      'TRY WIDYA RESTYA NINGRUM',
      'VANIA PUTRI CAHYANI',
      'WULANDARI AVRILIANI',
      'ZAHRA DINA AMERA'
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
      'AISYAH RANI',
      'AMIRAH AVRILLA',
      'ANAYA PUTRI',
      'ASYILA NAILA ALIFAH',
      'AUREL ANGGRAINI',
      'AVRILIA EUNIKE MUKE',
      'CALLYSTA NATHANIA PUTRI',
      'CHELSEA SHAVONNE MAGDALENA',
      'CITRA PUTI JAMI',
      'DEVI SOLEHAH AGUSTIANI',
      'DWI SURYANI ASTUTI',
      'FITRIA AL ZAHRA',
      'GINNA PITALOKA',
      'IMA ANGGUN SALAMAH',
      'INTAN RAMADHANI',
      'JEANNY OLIVIA',
      'KEISYAH FIRDINIYA',
      'LULU INDRIYANI',
      'MAYANG KHAERANI',
      'NADILA',
      'NURFITRI ANDRIYANI',
      'PENI LADIANTI',
      'RAINA INAYA PUTRI',
      'RISTA WULANDARI ZEGA',
      'SALSABILAH ZAELANI',
      'SALWA JAHRANI PUTRI',
      'SASKIA AMANDA',
      'SELVIA ANNASTASYA',
      'SINTA NOVITA SARI',
      'TRI ADHANI',
      'USWATUN HASANAH',
      'VANIA LUNA',
      'YOLA ANASYA PUTERI',
      'ZUHROTUL AINI SEPTIANI',
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
      'ACHMAD HAIDAR RAHMAN',
      'AL SAKHA FATTHARIQ ANUAR',
      'ALDI KURNIAWAN',
      'ALFI SYAHRI',
      'ALIFIA NAILALHIMMAH',
      'ALIFIAN ABDIEL RAFIF',
      'ARIE FATUR RAHMAN',
      'ASLAM REHAN SAPTOTRIONO',
      'CAESARIAN LANANG PARIZANO ZAIM',
      'CLAUDYA PATRICIA BORORING',
      'DAVID PUTRA PRATAMA',
      'EVAN DESTIAN SAPUTRA',
      'FITRI OKTAVIANI',
      'MAYLA HUMAIROH',
      'MIA AMALA',
      'MUHAMAD LINTANG ANDIYAN',
      'MUHAMMAD ADITYA NOVIANSYAH',
      'MUHAMMAD AKMAL SABAN',
      'MUHAMMAD IRFAN MAULANA',
      'MUHAMMAD SALMAN AL FARISI',
      'MUHAMMAD YAZID MUNDZIR',
      'NAZLA RAHMA',
      'NAZRIL SATRIA HIDAYATULLAH',
      'NAZWA RAMADANI SEPTIAN',
      'NIKI AHMAD HAMDANI',
      'RAMADINA AL MUZTHAZAM',
      'RANTI AZZAHRA',
      'RASKIA RAHMADINI',
      'REVANI KHOIRUNNISA AZZAHRA',
      'REYNALDO YUSELLINO',
      'SHELINA ROYDINATA SAFIRA',
      'SITI AZIZAH AGUSTINA',
      'SYIFA NAZILAH PUTRI',
      'USWATUN KHASANAH',
      'YAYA YABES ABFILE'
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
  var pelanggaran1 = document.getElementById('pelanggaran1').value
  var pelanggaran2 = document.getElementById('pelanggaran2').value
  var pelanggaran3 = document.getElementById('pelanggaran3').value

  database.ref(today + '/' + kelas + '/' + nama).set({
    pelanggaran1: pelanggaran1,
    pelanggaran2: pelanggaran2,
    pelanggaran3: pelanggaran3
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

// ga dipake
// function displayLeaderboard() {
//   var dataRef = database.ref();
//   var dataContainer = document.getElementById('displayLeaderboard');

//   dataRef.once('value')
//     .then(snapshot => {
//       const data = snapshot.val();
//       var namaInfo = {};

//       for (const tanggal in data) {
//         if (data.hasOwnProperty(tanggal)) {
//           const kelasData = data[tanggal];
//           for (const kelas in kelasData) {
//             if (kelasData.hasOwnProperty(kelas)) {
//               const namaPelanggaranData = kelasData[kelas];
//               for (const nama in namaPelanggaranData) {
//                 if (namaPelanggaranData.hasOwnProperty(nama)) {
//                   const pelanggaran1 = namaPelanggaranData[nama].pelanggaran1;
//                   const pelanggaran2 = namaPelanggaranData[nama].pelanggaran2;
//                   const pelanggaran3 = namaPelanggaranData[nama].pelanggaran3;

//                   const pelanggaranList = [
//                     { jenis: pelanggaran1, tanggal },
//                     { jenis: pelanggaran2, tanggal },
//                     { jenis: pelanggaran3, tanggal }
//                   ].filter(p => p.jenis !== '---');

//                   if (!namaInfo[nama]) {
//                     namaInfo[nama] = {
//                       kelas: kelas,
//                       pelanggaran: [],
//                       totalPelanggaran: 0
//                     };
//                   }

//                   namaInfo[nama].pelanggaran.push(...pelanggaranList);
//                   namaInfo[nama].totalPelanggaran += pelanggaranList.length;
//                 }
//               }
//             }
//           }
//         }
//       }

//       let leaderboardArray = Object.entries(namaInfo).map(([nama, info]) => ({
//         nama,
//         kelas: info.kelas,
//         totalPelanggaran: info.totalPelanggaran,
//         pelanggaran: info.pelanggaran
//       }));

//       leaderboardArray.sort((a, b) => b.totalPelanggaran - a.totalPelanggaran);

//       let leaderboardHTML = '';
//       leaderboardArray.forEach((entry, index) => {
//         leaderboardHTML += `
//           <div class="card mb-3">
//             <div class="card-body">
//               <h5 class="card-title">${index + 1}. ${entry.nama}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Kelas: ${entry.kelas}</h6>
//               <p class="card-text">Total Pelanggaran: ${entry.totalPelanggaran}x</p>
//               <h6>Detail Pelanggaran:</h6>
//               <ul>
//                 ${entry.pelanggaran.map(p => `<li>${p.tanggal}: ${p.jenis}</li>`).join('')}
//               </ul>
//             </div>
//           </div>
//         `;
//       });

//       dataContainer.innerHTML = leaderboardHTML;
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//       dataContainer.innerHTML = "Terjadi kesalahan saat mengambil data.";
//     });
// }

// document.addEventListener('DOMContentLoaded', displayLeaderboard);






