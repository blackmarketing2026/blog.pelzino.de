# Prüfprotokoll – Pelzino – 15.11.2026, Lauf 3

## Geprüfter Umfang

- fünf neue Zubehör-Ratgeber
- fünf Original-Produktbilder aus dem Pelzino-Shop
- Blogübersicht und Zubehör-Kategorie
- drei passende Bestandsartikel mit Rückverlinkungen
- `sitemap.xml`

## Durchgeführte Prüfungen

- HTML-Struktur aller fünf neuen Seiten mit Python `HTMLParser` geprüft: alle Tags korrekt geschlossen.
- Je Seite genau ein `h1`, ein eindeutiger Titel, eine eindeutige Meta-Description und ein Canonical.
- Alle fünf Canonicals stimmen exakt mit den vorgesehenen finalen URLs überein.
- Alle neuen Seiten enthalten mindestens einen direkten Produktlink mit dem bestehenden Partnerpfad `402376a`.
- Alle lokalen Links und Bildpfade der neuen Seiten gegen den Repository-Bestand geprüft.
- Bilder mit Pillow dekodiert: fünf Dateien mit jeweils 480 × 480 Pixeln; vier JPEG, eine PNG.
- Originalbilder erneut per HTTP aus dem Shop geladen und bytegleich mit den eingebundenen Dateien verglichen.
- Alle Bild-Alternativtexte auf Nichtleere geprüft.
- Produktseiten am 15.11.2026 direkt per HTTP geprüft: Status 200, Warenkorb-Funktion vorhanden, „Sofort versandfertig“ und „Lieferzeit 1–3 Tage“ vorhanden.
- Preise zur Aktualitätskontrolle geprüft: Shampoo 8,59 €, Fellpflege 9,39 €, Dosenpresse 39,00 €, Katzenstreuschaufel 1,90 €, Puzzle 5,00 €. Die Preise stehen bewusst nicht in den Artikeln.
- `sitemap.xml` als XML geparst: 47 eindeutige URLs, keine Dublette, alle fünf neuen Canonicals enthalten.
- Blog- und Zubehörübersicht enthalten jede neue Seite genau einmal.
- Rücklinks aus Katzenstreu-, Dosendeckel- und Katzenspielkissen-Ratgeber geprüft.
- Seitentitel und Meta-Descriptions über alle 54 HTML-Dateien auf Eindeutigkeit geprüft.
- Reiner Artikelinhalt je neuer Seite: 589 bis 649 Wörter.
- Volltext- und manuelle Inhaltsprüfung auf erfundene Tests, Bewertungen, Heilversprechen, Gesundheitsversprechen und verbindliche Wirkungsbehauptungen. Herstellerformulierungen zu Beschwerden, Keimen oder sonstigen Wirkungen wurden nicht übernommen.
- Beim Shampoo werden nur Etikett, Inhaltsstoffe, Anwendung und Aufbewahrung erläutert; keine Behandlungsaussage.
- Beim Fellpflegespray werden Anwendung, Lagerung und Warnhinweise wiedergegeben; keine gesundheitliche Wirkung zugesagt.
- `node --check page.js` ohne Fehler.
- `git diff --check` ohne Fehler.

## Bewusste Einschränkung

Wie beauftragt wurde keine visuelle Desktop-/Mobilprüfung, keine Browser-Simulation und keine Screenshot-/Viewport-Prüfung durchgeführt. Die Codeprüfung bestätigt Struktur und Referenzen, nicht die tatsächliche visuelle Darstellung. Die öffentliche Erreichbarkeit und der ausgelieferte Quelltext werden nach dem Deployment separat per HTTP geprüft.

## Veröffentlichung

- Veröffentlichung auf `main` mit Commit `a03ac85bc4b22d552c77da41eff00eb114030133` bestätigt.
- GitHub-Status `Vercel`: `success`, Beschreibung `Deployment has completed`.
- Alle fünf finalen URLs per HTTP mit Status 200 abgerufen; der ausgelieferte HTML-Quelltext ist jeweils bytegleich mit der geprüften Repository-Datei.
- Die fünf veröffentlichten Produktbilder wurden per HTTP abgerufen und bytegleich mit den geprüften lokalen Dateien verglichen.
- Öffentliche Blog- und Zubehörübersicht enthalten alle fünf neuen Links.
- Die veröffentlichte `sitemap.xml` enthält alle fünf neuen kanonischen URLs.
- Diese Prüfungen bestätigen Deployment und Erreichbarkeit, nicht die Google-Indexierung.
