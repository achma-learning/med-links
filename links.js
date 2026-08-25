/*
 * Med Links — data source
 *
 * Every quick link lives here as one object. Nothing else in the app
 * needs to change to add, edit, or remove a link — index.html reads
 * this array at load time.
 *
 * Schema:
 *   title : string            short display name
 *   url   : string            full URL, including https://
 *   tag   : "maroc" | "france" | "international"
 *   group : string            subsection shown in the UI (free text)
 *   desc  : string            one short line of context
 *
 * See CONTRIBUTING.md for how to add a link by hand or via an AI assistant.
 */

const LINKS = [
  // --- Maroc — Officiel -----------------------------------------------
  { title: "Ministère de la Santé et de la Protection Sociale", url: "https://www.sante.gov.ma/", tag: "maroc", group: "Officiel", desc: "Portail officiel" },
  { title: "MSPS — Guides et procédures", url: "https://www.sante.gov.ma/Publications/Pages/Guideetprocedure.aspx", tag: "maroc", group: "Officiel", desc: "Guides et procédures officiels" },
  { title: "MSPS — Guides et manuels", url: "https://www.sante.gov.ma/Publications/Guides-Manuels/Pages/default.aspx", tag: "maroc", group: "Officiel", desc: "Manuels de référence" },
  { title: "MSPS — Bulletins", url: "https://www.sante.gov.ma/Publications/Bulletins/Pages/default.aspx", tag: "maroc", group: "Officiel", desc: "Bulletins épidémiologiques" },
  { title: "MSPS — Études et enquêtes", url: "https://www.sante.gov.ma/Publications/Etudes_enquete/Pages/default.aspx", tag: "maroc", group: "Officiel", desc: "Études nationales" },
  { title: "MSPS — Dossiers thématiques", url: "https://www.sante.gov.ma/Pages/Dossiers.aspx", tag: "maroc", group: "Officiel", desc: "Dossiers par thème" },
  { title: "Sehati — Support", url: "https://sehati.gov.ma/support/index", tag: "maroc", group: "Officiel", desc: "Support numérique santé" },
  { title: "Carte sanitaire", url: "https://cartesanitaire.sante.gov.ma/", tag: "maroc", group: "Officiel", desc: "Offre de soins par région" },
  { title: "AMMPS", url: "https://www.ammps.gov.ma/", tag: "maroc", group: "Officiel", desc: "Agence Marocaine des Médicaments et Produits de Santé" },
  { title: "Cahiers des normes pédagogiques — Médecine", url: "https://www.enssup.gov.ma/en/publications/cahiers-des-normes-pedagogiques-nationales-en-medecine-pharmacie-et-medecine-dentaire-medecine", tag: "maroc", group: "Officiel", desc: "Normes de formation médicale" },

  // --- Maroc — Ordre & outils (issue #1) --------------------------------
  { title: "Sahha.ma", url: "https://sahha.ma/", tag: "maroc", group: "Ordre & outils", desc: "Plateforme santé grand public" },
  { title: "Sehati — Outils", url: "https://sehati.gov.ma/outils", tag: "maroc", group: "Ordre & outils", desc: "Outils numériques santé" },
  { title: "CNOM — Conseil National de l'Ordre des Médecins", url: "https://cnom.bynsol.com/", tag: "maroc", group: "Ordre & outils", desc: "Portail de l'Ordre des médecins" },
  { title: "CNOM Maroc — Textes juridiques", url: "https://www.cnom-maroc.com/textes-juridiques/", tag: "maroc", group: "Ordre & outils", desc: "Textes juridiques et réglementaires" },

  // --- Maroc — Sociétés savantes / professionnelles ---------------------
  { title: "SOMIPEV", url: "https://somipev.ma/", tag: "maroc", group: "Sociétés savantes", desc: "Société marocaine de pédiatrie / vaccinologie" },
  { title: "SOMIPEV — Recommandations", url: "https://somipev.ma/recommandations/", tag: "maroc", group: "Sociétés savantes", desc: "Recommandations pédiatriques" },
  { title: "SOMIPEV — Guidelines", url: "https://somipev.ma/guidelines/", tag: "maroc", group: "Sociétés savantes", desc: "Guidelines" },
  { title: "SOMIPEV — Ouvrages", url: "https://somipev.ma/ouvrages/", tag: "maroc", group: "Sociétés savantes", desc: "Ouvrages de référence" },
  { title: "SOMIPEV — Thèses", url: "https://somipev.ma/theses/", tag: "maroc", group: "Sociétés savantes", desc: "Thèses" },
  { title: "CROMC — Ordre des médecins Casablanca", url: "https://www.cromc.ma/", tag: "maroc", group: "Sociétés savantes", desc: "Conseil régional de l'Ordre des médecins" },
  { title: "FMPM — Bibliothèque des thèses", url: "https://wd.fmpm.uca.ma/biblio/theses/Accueil.html", tag: "maroc", group: "Sociétés savantes", desc: "Thèses FMPM" },
  { title: "FMPM — Recherche de thèses", url: "https://thesefmpm.vercel.app/search", tag: "maroc", group: "Sociétés savantes", desc: "Moteur de recherche de thèses" },
  { title: "MG Maroc TV", url: "https://www.youtube.com/@MGMaroctv", tag: "maroc", group: "Sociétés savantes", desc: "Formation vidéo en médecine générale (YouTube)" },
  { title: "Playlist formation MG Maroc", url: "https://www.youtube.com/playlist?list=PLUrO6bQPaskJ-dauAXd-Ugb4Zf9Gldg1L", tag: "maroc", group: "Sociétés savantes", desc: "Playlist pédagogique (YouTube)" },

  // --- France — HAS et sources françaises -------------------------------
  { title: "HAS — Portail", url: "https://www.has-sante.fr/", tag: "france", group: "HAS & France", desc: "Recommandations françaises" },
  { title: "HAS — EDN", url: "https://www.has-sante.fr/jcms/p_3076609/fr/edn", tag: "france", group: "HAS & France", desc: "Épreuves dématérialisées nationales" },
  { title: "HAS — Méthodes d'élaboration des recommandations", url: "https://www.has-sante.fr/jcms/c_418716/fr/methodes-d-elaboration-des-recommandations-de-bonne-pratique", tag: "france", group: "HAS & France", desc: "Méthodologie des recommandations de bonne pratique" },
  { title: "HAS — Actualisation des recommandations et parcours de soins", url: "https://www.has-sante.fr/jcms/p_3312383/fr/actualisation-des-recommandations-de-bonne-pratique-et-des-parcours-de-soins", tag: "france", group: "HAS & France", desc: "Suivi des mises à jour des recommandations et parcours de soins" },
  { title: "HAS — Outil préparation EDN", url: "https://www.has-sante.fr/jcms/c_646948/fr/outil-d-aide-a-la-preparation-des-epreuves-dematerialisees-nationales-edn-mode-d-emploi", tag: "france", group: "HAS & France", desc: "Aide à la préparation des examens" },
  { title: "Base de données publique des médicaments", url: "https://base-donnees-publique.medicaments.gouv.fr/", tag: "france", group: "HAS & France", desc: "AMM, notices, RCP" },
  { title: "Vidal", url: "https://www.vidal.fr/analyse-ordonnance.html", tag: "france", group: "HAS & France", desc: "Analyse d'ordonnance" },
  { title: "ANSM — Documents de référence", url: "https://ansm.sante.fr/documents/reference/", tag: "france", group: "HAS & France", desc: "Sécurité du médicament" },
  { title: "Sante.gouv.fr", url: "https://sante.gouv.fr/", tag: "france", group: "HAS & France", desc: "Ministère français de la Santé" },
  { title: "Sante.gouv.fr — Sites associés", url: "https://sante.gouv.fr/ministere/sites-associes/", tag: "france", group: "HAS & France", desc: "Organismes rattachés" },
  { title: "DGS-Urgent", url: "https://sante.gouv.fr/professionnels/article/dgs-urgent", tag: "france", group: "HAS & France", desc: "Alertes sanitaires" },
  { title: "Recomedicales", url: "https://recomedicales.fr/", tag: "france", group: "HAS & France", desc: "Recommandations condensées" },
  { title: "Doocteur", url: "https://doocteur.fr/", tag: "france", group: "HAS & France", desc: "Fiches pratiques" },
  { title: "eFurgences", url: "https://www.efurgences.net/", tag: "france", group: "HAS & France", desc: "Médecine d'urgence" },
  { title: "Étudiant Hospitalier", url: "https://etudiant-hospitalier.com/", tag: "france", group: "HAS & France", desc: "Ressources cliniques" },
  { title: "SFMU — Calculateurs", url: "https://www.sfmu.org/fr/vie-professionnelle/outils-professionnels/calculateurs/", tag: "france", group: "HAS & France", desc: "Outils de médecine d'urgence" },
  { title: "Dictionnaire Académie de médecine (officiel)", url: "https://www.academie-medecine.fr/dictionnaire/", tag: "france", group: "HAS & France", desc: "Dictionnaire médical — en maintenance" },
  { title: "Dictionnaire Académie de médecine (miroir)", url: "http://91.209.229.113/", tag: "france", group: "HAS & France", desc: "Miroir de secours — à remplacer dès que l'officiel revient" },

  // --- International ------------------------------------------------------
  { title: "MSF — Guides médicaux", url: "https://medicalguidelines.msf.org/fr", tag: "international", group: "International", desc: "Guides cliniques terrain (FR)" },
  { title: "MDCalc", url: "https://www.mdcalc.com/", tag: "international", group: "International", desc: "Calculateurs et scores cliniques" },
];
