# SEO- und Content-Briefing – Lauf 14 – 20.11.2026

## Ziel und Rahmen

Ziel sind neue qualifizierte Einstiege mit konkreter Sorten-, Produkt- oder Formatentscheidung und klaren Übergängen in den Pelzino-Shop. Function Concept war nicht Bestandteil des Durchlaufs. Es wurden fünf neue Seiten gewählt. Jede Seite beantwortet eine eigene Kaufabsicht, verwendet aktuell verfügbare Shopprodukte und ergänzt vorhandene Cluster, ohne allgemeine Nassfutter-, Snack- oder Portionsbeutelartikel zu duplizieren. Fünf Seiten sind die sachlich begründete Menge: Weitere kurzfristig geprüfte Themen lagen näher an vorhandenen Flocken-, BARF-, Zubehör- oder Gesundheitsproduktseiten und wurden wegen Kannibalisierungs- beziehungsweise Aussage-Risiko nicht umgesetzt.

## Bestand und Repository

- Ausgangsstand `main`: `4bb86faf1a792afd93ce254ae4f2482c036b938f`.
- Ausgangsbestand: 81 Artikeldateien ohne Kategorie-Indizes (34 Hundefutter, 16 Katzenfutter, 31 Zubehör).
- Offene Pull Requests am 20.11.2026: keine.
- Gelesen: `Website V1.md`, `vercel.json`, Lauf-13-Briefing und Lauf-13-QA sowie die vorhandenen Seitentitel und Produktzuordnungen.
- Struktur: statisches HTML, Assets zentral in `medien/`, sprechende Slugs ohne Dateiendung, Canonicals unter `https://www.blog.pelzino.de/`.
- Tracking, Rechtstexte und Deploymentkonfiguration bleiben unverändert.

## Search Console

Bestätigte Property: `https://www.blog.pelzino.de/`. Die Abfragen nutzten `dataState: final`, die gemeinsamen Dimensionen Suchanfrage und Seite, 1.000 Zeilen pro Call und vollständige Pagination (`hasMore: false`). Wegen der geringen Datenmenge wurde zusätzlich ein Dreimonatsfenster geprüft.

| Zeitraum | Einordnung | Zeilen | Impressionen | Klicks |
|---|---|---:|---:|---:|
| 20.10.–16.11.2026 | letzte 28 vollständig verfügbare Tage | 115 | 595 | 0 |
| 22.09.–19.10.2026 | vorherige 28 Tage | 78 | 384 | 0 |
| 17.08.–16.11.2026 | ergänzend drei Monate | 153 | 1.247 | 0 |

Die Impressionen stiegen gegenüber dem Vergleichsfenster, enthalten aber weiterhin keine Klicks. Search-Console-Klicks werden nicht als Verkäufe interpretiert. Die sichtbare Nachfrage konzentriert sich weiterhin stark auf allgemeines Hundenassfutter; weil diese Intention bereits mehrfach abgedeckt ist, entstand keine weitere allgemeine Seite.

## OpenSEO und SERP-Recherche

Der Projektkontext und das Rechercheprotokoll des OpenSEO-Projekts `161526c5-c43f-4373-a971-d13d26bd5ddc` wurden vor der Recherche gelesen. Das Konto hatte am 20.11.2026 noch 1 Credit. Der dokumentierte fehlgeschlagene kostenpflichtige SERP-Versuch wurde deshalb nicht wiederholt. Es wurden keine Volumina erfunden und keine kostenpflichtigen Dritt-Tracker eingesetzt.

Öffentliche SERPs wurden qualitativ für fünf Cluster geprüft: RyDog Vitalmenü Sorten, klassische ANIfit-200-g-Sorten, Picco Train Fisch/Geflügel, Entenhälse/Hähnchenmägen sowie 85-g-Katzenfutter Hase/Lamm. Die Ergebnisse zeigten produkt- und vergleichsorientierte Treffer sowie getrennte Suchintentionen. Werte für Volumen, Schwierigkeit und CPC bleiben unbekannt.

## Gewählte Themen und Abgrenzung

| Neue Seite | Eigenständige Suchintention | Abgrenzung zum Bestand | Shopprodukte |
|---|---|---|---|
| RyDog Vitalmenü Sorten vergleichen | Vier Sorten derselben Linie bei identischem 200-g-Format vergleichen | Bestehender Monoproteinartikel behandelt andere Produkte; RyDog-Flocken sind eine andere Produktform | Bio-Rind, Huhn, Lamm, Ziege & Pferd |
| Drei Hundefutter-Sorten in 200-g-Dosen | Falscher Hase, Thanksgiving Day und Zum Goldenen Ochsen gezielt nachkaufen | Schnupperpaketartikel behandelt Setumfang, nicht den direkten Einzelsortenvergleich | Drei 6 × 200-g-Kartons |
| Picco Train Fisch oder Geflügel | Zwei 500-g-Trainingssnacks derselben Linie vergleichen | Allgemeiner Trainingssnack-Ratgeber erklärt Kriterien, aber nicht die Variantenentscheidung | Picco Train Geflügel und Fisch |
| Entenhälse oder Hähnchenmägen | Zwei getrocknete Geflügelformen im 200-g-Beutel vergleichen | Bisheriger Geflügelsnackartikel behandelt Bruststücke und Sticks; Kauartikelartikel ist allgemein | Entenhälse und Hähnchenmägen |
| 85-g-Katzenfutter Hase oder Lamm | Zwei sortenreine Zwölferkartons nach Rezeptur und Nachkauf vergleichen | Bestehender 85-g-Artikel vergleicht Mixkarton gegen Einzelsorte, nicht diese beiden Sorten | Himmlischer Hase und LieblingsLamm |

## Verifizierte Produkte und Preise

Alle 13 Produktseiten wurden am 20.11.2026 direkt im Pelzino-Shop per HTTP abgerufen. Nach einem erfolgreichen Wiederholungsabruf antworteten alle mit HTTP 200. Die Produkte zeigten Warenkorb- beziehungsweise Sofort-versandfertig-Status. Bestehende Partnerkennung `402376a` bleibt in allen Shoplinks erhalten.

| Produkt | Artikel | Packung | Preis |
|---|---:|---:|---:|
| RyDog Vitalmenü Bio-Rind | 40681 | 6 × 200 g | 23,99 € |
| RyDog Vitalmenü Huhn | 85971 | 6 × 200 g | 20,49 € |
| RyDog Vitalmenü Lamm | 86012 | 6 × 200 g | 25,49 € |
| RyDog Ziege & Pferd | 86019 | 6 × 200 g | 29,49 € |
| Falscher Hase | 11243 | 6 × 200 g | 19,49 € |
| Thanksgiving Day | 11249 | 6 × 200 g | 19,49 € |
| Zum Goldenen Ochsen | 11237 | 6 × 200 g | 19,49 € |
| Picco Train Geflügel | 402971 | 500 g | 14,69 € |
| Picco Train Fisch | 46462 | 500 g | 14,69 € |
| Entenhälse | 291748 | 200 g | 5,59 € |
| Hähnchenmägen | 11268 | 200 g | 7,19 € |
| Himmlischer Hase | 429479 | 12 × 85 g | 17,99 € |
| LieblingsLamm | 429559 | 12 × 85 g | 17,99 € |

Preise und Verfügbarkeit sind datierte Momentaufnahmen. Es wurden keine Shopbewertungen, Tests, Heilversprechen oder gesundheitsbezogenen Herstellerformulierungen übernommen.

## Bilder und interne Verlinkung

- 13 zugehörige Produktbilder wurden aus den jeweiligen Shopseiten lokal unter `medien/` eingebunden, technisch geöffnet und auf 480 × 480 Pixel vereinheitlicht.
- Jede neue Seite enthält beschreibende Alt-Texte, interne Links zu passenden Bestandsartikeln und Shop-CTAs.
- Rücklinks kommen aus Monoprotein-Hundefutter, Hundefutter-Schnupperpakete, Trainingssnacks, Geflügelsnacks und dem bestehenden 85-g-Katzenfutter-Ratgeber.
- `blog/index.html` sowie die Hundefutter- und Katzenfutterübersicht erhalten neue Karten.
- `sitemap.xml` erhält alle fünf Canonicals mit `lastmod` 2026-11-20.

## Quellen

- Google Search Console über OpenSEO, abgerufen am 20.11.2026.
- OpenSEO-Projektkontext, Rechercheprotokoll und aktueller Creditstand, abgerufen am 20.11.2026.
- Pelzino-Produkt- und Kategorieseiten der 13 genannten Artikel, abgerufen am 20.11.2026.
- Öffentliche Suchergebnisse zu den fünf Themenclustern, geprüft am 20.11.2026.
