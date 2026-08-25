# Sources — Médecine Générale Maroc

Répertoire de sources officielles et de référence pour la pratique de la médecine générale au Maroc, classées par niveau de priorité (cf. hiérarchie Maroc > HAS > International). À versionner, compléter, et dater à chaque revue.

Dernière mise à jour : 2026-08-25

---

## 🇲🇦 Niveau 1 — Maroc officiel

| Source | Lien | Contenu |
|---|---|---|
| Ministère de la Santé et de la Protection Sociale | https://www.sante.gov.ma/ | Portail officiel |
| MSPS — Guides et procédures | https://www.sante.gov.ma/Publications/Pages/Guideetprocedure.aspx | Guides et procédures officiels |
| MSPS — Guides et manuels | https://www.sante.gov.ma/Publications/Guides-Manuels/Pages/default.aspx | Manuels de référence |
| MSPS — Bulletins | https://www.sante.gov.ma/Publications/Bulletins/Pages/default.aspx | Bulletins épidémiologiques |
| MSPS — Études et enquêtes | https://www.sante.gov.ma/Publications/Etudes_enquete/Pages/default.aspx | Études nationales |
| MSPS — Dossiers thématiques | https://www.sante.gov.ma/Pages/Dossiers.aspx | Dossiers par thème |
| Sehati (plateforme support) | https://sehati.gov.ma/support/index | Support numérique santé |
| Carte sanitaire | https://cartesanitaire.sante.gov.ma/ | Offre de soins par région |
| AMMPS | https://www.ammps.gov.ma/ | Agence Marocaine des Médicaments et Produits de Santé |
| Cahiers des normes pédagogiques — Médecine | https://www.enssup.gov.ma/en/publications/cahiers-des-normes-pedagogiques-nationales-en-medecine-pharmacie-et-medecine-dentaire-medecine | Normes de formation médicale |

## 🇲🇦 Niveau 2 — Sociétés savantes / professionnelles marocaines

| Source | Lien | Contenu |
|---|---|---|
| SOMIPEV | https://somipev.ma/ | Société marocaine de pédiatrie / vaccinologie |
| SOMIPEV — Recommandations | https://somipev.ma/recommandations/ | Recommandations pédiatriques |
| SOMIPEV — Guidelines | https://somipev.ma/guidelines/ | Guidelines |
| SOMIPEV — Ouvrages | https://somipev.ma/ouvrages/ | Ouvrages de référence |
| SOMIPEV — Thèses | https://somipev.ma/theses/ | Thèses |
| CROMC (Conseil régional Ordre des médecins Casablanca) | https://www.cromc.ma/ | Ordre professionnel |
| FMPM — Bibliothèque des thèses | https://wd.fmpm.uca.ma/biblio/theses/Accueil.html | Thèses FMPM |
| FMPM — Recherche de thèses | https://thesefmpm.vercel.app/search | Moteur de recherche thèses |
| MG Maroc TV (YouTube) | https://www.youtube.com/@MGMaroctv | Formation vidéo médecine générale |
| Playlist formation (YouTube) | https://www.youtube.com/playlist?list=PLUrO6bQPaskJ-dauAXd-Ugb4Zf9Gldg1L | Playlist pédagogique |

## 🇫🇷 Niveau 3 — HAS et sources françaises

| Source | Lien | Contenu |
|---|---|---|
| HAS — Portail | https://www.has-sante.fr/ | Recommandations françaises |
| HAS — EDN | https://www.has-sante.fr/jcms/p_3076609/fr/edn | Épreuves dématérialisées nationales |
| HAS — Outil préparation EDN | https://www.has-sante.fr/jcms/c_646948/fr/outil-d-aide-a-la-preparation-des-epreuves-dematerialisees-nationales-edn-mode-d-emploi | Aide préparation examens |
| Base de données publique des médicaments | https://base-donnees-publique.medicaments.gouv.fr/ | AMM, notices, RCP |
| Vidal | https://www.vidal.fr/analyse-ordonnance.html | Analyse d'ordonnance |
| ANSM — Documents de référence | https://ansm.sante.fr/documents/reference/ | Sécurité du médicament |
| Sante.gouv.fr | https://sante.gouv.fr/ | Ministère français de la Santé |
| Sante.gouv.fr — Sites associés | https://sante.gouv.fr/ministere/sites-associes/ | Organismes rattachés |
| DGS-Urgent | https://sante.gouv.fr/professionnels/article/dgs-urgent | Alertes sanitaires |
| Recomedicales | https://recomedicales.fr/ | Recommandations condensées |
| Doocteur | https://doocteur.fr/ | Fiches pratiques |
| eFurgences | https://www.efurgences.net/ | Médecine d'urgence |
| Étudiant Hospitalier | https://etudiant-hospitalier.com/ | Ressources cliniques |
| SFMU — Calculateurs | https://www.sfmu.org/fr/vie-professionnelle/outils-professionnels/calculateurs/ | Outils médecine d'urgence |
| Dictionnaire Académie de médecine (miroir) | http://91.209.229.113/ | Dictionnaire médical |
| Dictionnaire Académie de médecine (officiel, en maintenance) | https://www.academie-medecine.fr/dictionnaire/ | Dictionnaire médical |

## 🌍 Niveau 4 — International

| Source | Lien | Contenu |
|---|---|---|
| MSF — Guides médicaux (FR) | https://medicalguidelines.msf.org/fr | Guides cliniques terrain |
| MDCalc | https://www.mdcalc.com/ | Calculateurs et scores cliniques |

---

## Notes d'usage
- Ce fichier est une liste de **points d'entrée**, pas une garantie de contenu à jour : toujours vérifier la date/version du document consulté au moment de l'utilisation.
- Les liens SOMIPEV et FMPM sont thématiques (pédiatrie / thèses) — utiles en complément, pas comme référentiel généraliste transversal.
- Le miroir du dictionnaire de l'Académie de médecine (`91.209.229.113`) est une IP nue : à remplacer par l'URL officielle dès qu'elle ressort de maintenance.

## Idées pour le repo GitHub
- `sources-medecine-maroc.md` (ce fichier) à la racine.
- Un script léger (`check_links.py`, GitHub Action hebdomadaire) qui ping chaque URL et flague les liens morts — utile vu que plusieurs pointent vers des portails gouvernementaux parfois instables.
- Un dossier `CAT_prompts/` versionnant les prompts (dont `CAT_PROMPT.md`) séparément des sources, pour pouvoir faire évoluer l'un sans casser l'autre.
