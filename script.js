// Liste des pays avec leurs indicatifs téléphoniques
const paysAvecIndicatifs = [
    { nom: "Afghanistan", indicatif: "+93" },
    { nom: "Afrique du Sud", indicatif: "+27" },
    { nom: "Albanie", indicatif: "+355" },
    { nom: "Algérie", indicatif: "+213" },
    { nom: "Allemagne", indicatif: "+49" },
    { nom: "Andorre", indicatif: "+376" },
    { nom: "Angola", indicatif: "+244" },
    { nom: "Antigua-et-Barbuda", indicatif: "+1-268" },
    { nom: "Arabie saoudite", indicatif: "+966" },
    { nom: "Argentine", indicatif: "+54" },
    { nom: "Arménie", indicatif: "+374" },
    { nom: "Australie", indicatif: "+61" },
    { nom: "Autriche", indicatif: "+43" },
    { nom: "Azerbaïdjan", indicatif: "+994" },
    { nom: "Bahamas", indicatif: "+1-242" },
    { nom: "Bahreïn", indicatif: "+973" },
    { nom: "Bangladesh", indicatif: "+880" },
    { nom: "Barbade", indicatif: "+1-246" },
    { nom: "Belgique", indicatif: "+32" },
    { nom: "Belize", indicatif: "+501" },
    { nom: "Bénin", indicatif: "+229" }, // Exemple pour le Bénin
    { nom: "Bhoutan", indicatif: "+975" },
    { nom: "Biélorussie", indicatif: "+375" },
    { nom: "Birmanie", indicatif: "+95" },
    { nom: "Bolivie", indicatif: "+591" },
    { nom: "Bosnie-Herzégovine", indicatif: "+387" },
    { nom: "Botswana", indicatif: "+267" },
    { nom: "Brésil", indicatif: "+55" },
    { nom: "Brunei", indicatif: "+673" },
    { nom: "Bulgarie", indicatif: "+359" },
    { nom: "Burkina Faso", indicatif: "+226" },
    { nom: "Burundi", indicatif: "+257" },
    { nom: "Cambodge", indicatif: "+855" },
    { nom: "Cameroun", indicatif: "+237" },
    { nom: "Canada", indicatif: "+1" },
    { nom: "Cap-Vert", indicatif: "+238" },
    { nom: "Chili", indicatif: "+56" },
    { nom: "Chine", indicatif: "+86" },
    { nom: "Chypre", indicatif: "+357" },
    { nom: "Colombie", indicatif: "+57" },
    { nom: "Comores", indicatif: "+269" },
    { nom: "Congo", indicatif: "+242" },
    { nom: "Corée du Nord", indicatif: "+850" },
    { nom: "Corée du Sud", indicatif: "+82" },
    { nom: "Costa Rica", indicatif: "+506" },
    { nom: "Côte d'Ivoire", indicatif: "+225" },
    { nom: "Croatie", indicatif: "+385" },
    { nom: "Cuba", indicatif: "+53" },
    { nom: "Danemark", indicatif: "+45" },
    { nom: "Djibouti", indicatif: "+253" },
    { nom: "Dominique", indicatif: "+1-767" },
    { nom: "Égypte", indicatif: "+20" },
    { nom: "Émirats arabes unis", indicatif: "+971" },
    { nom: "Équateur", indicatif: "+593" },
    { nom: "Érythrée", indicatif: "+291" },
    { nom: "Espagne", indicatif: "+34" },
    { nom: "Estonie", indicatif: "+372" },
    { nom: "États-Unis", indicatif: "+1" },
    { nom: "Éthiopie", indicatif: "+251" },
    { nom: "Fidji", indicatif: "+679" },
    { nom: "Finlande", indicatif: "+358" },
    { nom: "France", indicatif: "+33" }, // Exemple pour la France
    { nom: "Gabon", indicatif: "+241" },
    { nom: "Gambie", indicatif: "+220" },
    { nom: "Géorgie", indicatif: "+995" },
    { nom: "Ghana", indicatif: "+233" },
    { nom: "Grèce", indicatif: "+30" },
    { nom: "Grenade", indicatif: "+1-473" },
    { nom: "Guatemala", indicatif: "+502" },
    { nom: "Guinée", indicatif: "+224" },
    { nom: "Guinée équatoriale", indicatif: "+240" },
    { nom: "Guinée-Bissau", indicatif: "+245" },
    { nom: "Guyana", indicatif: "+592" },
    { nom: "Haïti", indicatif: "+509" },
    { nom: "Honduras", indicatif: "+504" },
    { nom: "Hongrie", indicatif: "+36" },
    { nom: "Îles Cook", indicatif: "+682" },
    { nom: "Îles Marshall", indicatif: "+692" },
    { nom: "Îles Salomon", indicatif: "+677" },
    { nom: "Inde", indicatif: "+91" },
    { nom: "Indonésie", indicatif: "+62" },
    { nom: "Irak", indicatif: "+964" },
    { nom: "Iran", indicatif: "+98" },
    { nom: "Irlande", indicatif: "+353" },
    { nom: "Islande", indicatif: "+354" },
    { nom: "Israël", indicatif: "+972" },
    { nom: "Italie", indicatif: "+39" },
    { nom: "Jamaïque", indicatif: "+1-876" },
    { nom: "Japon", indicatif: "+81" },
    { nom: "Jordanie", indicatif: "+962" },
    { nom: "Kazakhstan", indicatif: "+7" },
    { nom: "Kenya", indicatif: "+254" },
    { nom: "Kirghizistan", indicatif: "+996" },
    { nom: "Kiribati", indicatif: "+686" },
    { nom: "Koweït", indicatif: "+965" },
    { nom: "Laos", indicatif: "+856" },
    { nom: "Lesotho", indicatif: "+266" },
    { nom: "Lettonie", indicatif: "+371" },
    { nom: "Liban", indicatif: "+961" },
    { nom: "Liberia", indicatif: "+231" },
    { nom: "Libye", indicatif: "+218" },
    { nom: "Liechtenstein", indicatif: "+423" },
    { nom: "Lituanie", indicatif: "+370" },
    { nom: "Luxembourg", indicatif: "+352" },
    { nom: "Macédoine du Nord", indicatif: "+389" },
    { nom: "Madagascar", indicatif: "+261" },
    { nom: "Malaisie", indicatif: "+60" },
    { nom: "Malawi", indicatif: "+265" },
    { nom: "Maldives", indicatif: "+960" },
    { nom: "Mali", indicatif: "+223" },
    { nom: "Malte", indicatif: "+356" },
    { nom: "Maroc", indicatif: "+212" },
    { nom: "Maurice", indicatif: "+230" },
    { nom: "Mauritanie", indicatif: "+222" },
    { nom: "Mexique", indicatif: "+52" },
    { nom: "Micronésie", indicatif: "+691" },
    { nom: "Moldavie", indicatif: "+373" },
    { nom: "Monaco", indicatif: "+377" },
    { nom: "Mongolie", indicatif: "+976" },
    { nom: "Monténégro", indicatif: "+382" },
    { nom: "Mozambique", indicatif: "+258" },
    { nom: "Namibie", indicatif: "+264" },
    { nom: "Nauru", indicatif: "+674" },
    { nom: "Népal", indicatif: "+977" },
    { nom: "Nicaragua", indicatif: "+505" },
    { nom: "Niger", indicatif: "+227" },
    { nom: "Nigeria", indicatif: "+234" },
    { nom: "Niue", indicatif: "+683" },
    { nom: "Norvège", indicatif: "+47" },
    { nom: "Nouvelle-Zélande", indicatif: "+64" },
    { nom: "Oman", indicatif: "+968" },
    { nom: "Ouganda", indicatif: "+256" },
    { nom: "Ouzbékistan", indicatif: "+998" },
    { nom: "Pakistan", indicatif: "+92" },
    { nom: "Palaos", indicatif: "+680" },
    { nom: "Panama", indicatif: "+507" },
    { nom: "Papouasie-Nouvelle-Guinée", indicatif: "+675" },
    { nom: "Paraguay", indicatif: "+595" },
    { nom: "Pays-Bas", indicatif: "+31" },
    { nom: "Pérou", indicatif: "+51" },
    { nom: "Philippines", indicatif: "+63" },
    { nom: "Pologne", indicatif: "+48" },
    { nom: "Portugal", indicatif: "+351" },
    { nom: "Qatar", indicatif: "+974" },
    { nom: "République centrafricaine", indicatif: "+236" },
    { nom: "République démocratique du Congo", indicatif: "+243" },
    { nom: "République dominicaine", indicatif: "+1-809, +1-829, +1-849" },
    { nom: "République tchèque", indicatif: "+420" },
    { nom: "Roumanie", indicatif: "+40" },
    { nom: "Royaume-Uni", indicatif: "+44" },
    { nom: "Russie", indicatif: "+7" },
    { nom: "Rwanda", indicatif: "+250" },
    { nom: "Saint-Christophe-et-Niévès", indicatif: "+1-869" },
    { nom: "Saint-Marin", indicatif: "+378" },
    { nom: "Saint-Vincent-et-les-Grenadines", indicatif: "+1-784" },
    { nom: "Sainte-Lucie", indicatif: "+1-758" },
    { nom: "Salvador", indicatif: "+503" },
    { nom: "Samoa", indicatif: "+685" },
    { nom: "Sao Tomé-et-Principe", indicatif: "+239" },
    { nom: "Sénégal", indicatif: "+221" },
    { nom: "Serbie", indicatif: "+381" },
    { nom: "Seychelles", indicatif: "+248" },
    { nom: "Sierra Leone", indicatif: "+232" },
    { nom: "Singapour", indicatif: "+65" },
    { nom: "Slovaquie", indicatif: "+421" },
    { nom: "Slovénie", indicatif: "+386" },
    { nom: "Somalie", indicatif: "+252" },
    { nom: "Soudan", indicatif: "+249" },
    { nom: "Soudan du Sud", indicatif: "+211" },
    { nom: "Sri Lanka", indicatif: "+94" },
    { nom: "Suède", indicatif: "+46" },
    { nom: "Suisse", indicatif: "+41" },
    { nom: "Suriname", indicatif: "+597" },
    { nom: "Syrie", indicatif: "+963" },
    { nom: "Tadjikistan", indicatif: "+992" },
    { nom: "Tanzanie", indicatif: "+255" },
    { nom: "Tchad", indicatif: "+235" },
    { nom: "Thaïlande", indicatif: "+66" },
    { nom: "Timor oriental", indicatif: "+670" },
    { nom: "Togo", indicatif: "+228" },
    { nom: "Tonga", indicatif: "+676" },
    { nom: "Trinité-et-Tobago", indicatif: "+1-868" },
    { nom: "Tunisie", indicatif: "+216" },
    { nom: "Turkménistan", indicatif: "+993" },
    { nom: "Turquie", indicatif: "+90" },
    { nom: "Tuvalu", indicatif: "+688" },
    { nom: "Ukraine", indicatif: "+380" },
    { nom: "Uruguay", indicatif: "+598" },
    { nom: "Vanuatu", indicatif: "+678" },
    { nom: "Vatican", indicatif: "+379" },
    { nom: "Venezuela", indicatif: "+58" },
    { nom: "Viêt Nam", indicatif: "+84" },
    { nom: "Yémen", indicatif: "+967" },
    { nom: "Zambie", indicatif: "+260" },
    { nom: "Zimbabwe", indicatif: "+263" }
];

// Remplir la liste des pays et des indicatifs
const selectPays = document.getElementById("paysNaissance");
const selectIndicatif = document.getElementById("indicatif");

paysAvecIndicatifs.forEach(pays => {
    // Remplir la liste des pays
    const optionPays = document.createElement("option");
    optionPays.value = pays.nom;
    optionPays.textContent = pays.nom;
    selectPays.appendChild(optionPays);

    // Remplir la liste des indicatifs
    const optionIndicatif = document.createElement("option");
    optionIndicatif.value = pays.indicatif;
    optionIndicatif.textContent = `${pays.nom} (${pays.indicatif})`;
    selectIndicatif.appendChild(optionIndicatif);
});

// Gestion de la soumission du formulaire
document.getElementById("inscriptionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const indicatif = document.getElementById("indicatif").value;
    const telephone = document.getElementById("telephone").value;

    // Valider le numéro de téléphone
    if (!indicatif || !telephone) {
        alert("Veuillez sélectionner un indicatif et saisir un numéro de téléphone.");
        return;
    }

    // Afficher le numéro de téléphone complet
    const numeroComplet = `${indicatif} ${telephone}`;
    alert(`Numéro de téléphone enregistré : ${numeroComplet}`);
    console.log("Numéro de téléphone :", numeroComplet);

    // Vous pouvez ajouter ici la logique pour envoyer les données à un serveur
});

// Masquer toutes les sections sauf la première au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        if (!section.classList.contains("active")) {
            section.style.display = "none";
        }
    });
});

// Gestion des clics sur les liens de navigation
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        // Masquer toutes les sections
        document.querySelectorAll(".content-section").forEach(section => {
            section.style.display = "none";
        });

        // Afficher la section correspondante
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).style.display = "block";
    });
});