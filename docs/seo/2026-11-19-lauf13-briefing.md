# SEO- und Content-Briefing – Lauf 13 – 19.11.2026

## Ziel und Rahmen

Ziel dieses Durchlaufs sind zusätzliche qualifizierte Einstiege mit konkreter Kauf- oder Vergleichsabsicht sowie nachvollziehbare Übergänge in den Pelzino-Shop. Function Concept war nicht Bestandteil der Arbeit. Es wurden fünf neue, voneinander getrennte Suchintentionen geplant. Das ist die Mindestmenge des Auftrags und zugleich die sachlich begründete Menge: Für alle fünf Themen waren eine eigenständige Bestandslücke, verfügbare Shopprodukte, belastbare Produktdaten und eine sinnvolle Kaufentscheidung vorhanden. Weitere Seiten wären in diesem Durchlauf näher an bereits vorhandene Vergleiche gerückt und hätten das Kannibalisierungsrisiko erhöht.

## Bestands- und Arbeitsabgleich

- Ausgangsbestand: 82 Artikeldateien unter `blog/hundefutter`, `blog/katzenfutter` und `blog/zubehoer`.
- Offene Pull Requests am 19.11.2026: keine.
- Ausgangsstand `main`: `0b93d9962da4615b2e23915c581ca316a561030b`.
- Gelesen: `Website V1.md`, `vercel.json`, frühere Briefings und QA-Dokumentationen unter `docs/seo/`.
- URL-Konvention: kleingeschriebene sprechende Slugs ohne Dateiendung; Canonical mit `https://www.blog.pelzino.de/`.
- Design: bestehende statische HTML-Struktur, `styles.css`, `page.js`, Header, Footer und Cookie-Dialog unverändert weiterverwendet.

## Search Console

Verbundene Property: `https://www.blog.pelzino.de/`. Dimensionen wurden gemeinsam nach Suchanfrage und Seite gelesen; alle gelieferten Seiten wurden berücksichtigt (`hasMore: false`). Wegen der geringen Datenmenge wurde zusätzlich ein Dreimonatsfenster geprüft.

| Zeitraum | Einordnung | Zeilen | Impressionen | Klicks |
|---|---|---:|---:|---:|
| 19.10.–15.11.2026 | letzte 28 vollständig verfügbare Tage | 111 | 588 | 0 |
| 21.09.–18.10.2026 | vorherige 28 Tage | 77 | 373 | 0 |
| 16.08.–15.11.2026 | ergänzend drei Monate | 151 | 1.263 | 0 |

Die Impressionen sind gegenüber dem Vergleichsfenster gestiegen, doch die Daten enthalten weiterhin keine Klicks. Deshalb werden GSC-Impressionen nicht als Umsatz oder Kaufnachweis interpretiert. Es wurde bewusst keine weitere allgemeine Nassfutterseite erstellt.

## OpenSEO und SERP-Recherche

Der Projektkontext und das Rechercheprotokoll des OpenSEO-Projekts `161526c5-c43f-4373-a971-d13d26bd5ddc` wurden gelesen. Der jüngste protokollierte kostenpflichtige SERP-Versuch war wegen `INSUFFICIENT_CREDITS` nicht ausführbar. Diese aktuelle Information wurde wiederverwendet; ein identisches kostenpflichtiges Paket wurde nicht erneut gestartet. Es wurden keine Volumina erfunden und keine weiteren kostenpflichtigen Tracker eingesetzt.

Ergänzend wurden öffentliche Suchergebnisse für die Themencluster RyDog Fleisch-/Fisch-Flocke, Junior-Hundefutter 200 g, Geflügelsnacks für Hunde, Katzenfutter-Sorten 200 g und Party mit Elch geprüft. Die SERPs wurden nur für Suchintention und Abgrenzung genutzt, nicht für behauptete Suchvolumina.

## Gewählte Themen und Abgrenzung

| Neue Seite | Eigenständige Suchintention | Abgrenzung zum Bestand | Shopbezug |
|---|---|---|---|
| RyDog Fleisch-Flocke oder Fisch-Flocke | Zwei tierische Trockenflocken in identischem 125-g-Format vergleichen | Bestehende Flockenartikel behandeln pflanzliche Flocken, Reis und Kartoffel | Fleisch-Flocke Hirsch und Fisch-Flocke, je 1,99 € |
| Junior-Hundefutter 200 g auswählen | Ein konkretes Junior-Sechserpack prüfen und Nachkauf planen | Welpenpaket-Ratgeber behandelt ein Set, nicht das Einzelprodukt | Junior 6 × 200 g, 22,49 € |
| Geflügelsnacks vergleichen | Putenbrust, Hühnerbrust und Truthahn-Sticks nach Form, Menge und Preis vergleichen | Allgemeine Trainings- und Gefriertrocknungsartikel beantworten nicht den direkten Geflügelvergleich | 35 g Putenbrust 8,50 €, 35 g Hühnerbrust 6,90 €, 350 g Truthahn-Sticks 8,39 € |
| Katzenfutter-Sorten 200 g vergleichen | Drei Sorten bei identischem Format und Preis nach Deklaration auswählen | Dosengrößenartikel vergleicht 200/400/810 g; Fischartikel nur Fischsorten | Puterichs Delight, Délice de Coeur, Eismeer Terrine, jeweils 6 × 200 g für 19,49 € |
| Party mit Elch – Aktion prüfen | Befristeten Preis, Gebinde, Grundpreis und Staffelangebote korrekt lesen | Kein bestehender Artikel behandelt diese konkrete Sorte und Aktionsentscheidung | Party mit Elch 6 × 400 g, geprüft 24,66 € statt 25,98 €, 10,28 €/kg |

## Produkt- und Bildprüfung

Alle zehn verwendeten Produktseiten wurden am 19.11.2026 direkt im Pelzino-Shop per HTTP abgerufen. Sie antworteten mit HTTP 200, zeigten die genutzten Produktangaben und waren als sofort versandfertig beziehungsweise in den Warenkorb legbar gekennzeichnet. Preise und Verfügbarkeit sind Momentaufnahmen und werden in den Artikeln entsprechend datiert. Bestehende Partnerzuordnung `402376a` bleibt in den Shoplinks erhalten.

Verwendete Shopbilder wurden aus den zugehörigen Produktseiten übernommen, lokal in `medien/` eingebunden und mit beschreibenden Alt-Texten versehen. Für Hühnerbrust wird das bereits vorhandene Bild `anifit-huehnerbrust.webp` wiederverwendet. Die Produktangaben dienen nur der Kauf- und Deklarationshilfe. Es werden weder Tests, Bewertungen noch Gesundheits-, Heil- oder verbindliche Wirkungsversprechen behauptet.

## Interne Verlinkung

- Alle fünf Seiten verlinken auf passende bestehende Etikett-, Packungsgrößen-, Flocken-, Snack- oder Preisratgeber.
- Neue Karten erscheinen in `blog/index.html` sowie den betroffenen Kategorieübersichten.
- Rücklinks wurden aus dem Flockenvergleich, dem Welpenpaket-Ratgeber, dem Gefriertrocknungs-Snack-Ratgeber, dem Katzenfutter-Dosengrößen-Ratgeber und dem Grundpreis-Ratgeber ergänzt.
- `sitemap.xml` erhält alle fünf kanonischen URLs mit `lastmod` 2026-11-19.

## Quellen

- Google Search Console über den bestätigten OpenSEO-Projektzugang, abgerufen am 19.11.2026.
- OpenSEO-Projektkontext und Rechercheprotokoll, abgerufen am 19.11.2026.
- Pelzino-Produktseiten der Artikel 405778, 406053, 328285, 434200, 63020, 11273, 11261, 11245, 11252 und 481223, abgerufen am 19.11.2026.
- Öffentliche Suchergebnisse zu den fünf Themenclustern, geprüft am 19.11.2026.
