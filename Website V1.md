# Projekt-Regelwerk (Rolling Template)

Dieses Dokument beschreibt die strukturellen und rechtlichen Konventionen dieses Projekts,
losgelöst vom konkreten Design. Es dient als Blaupause, um dasselbe Grundgerüst
(Seitenstruktur, Fehlerseiten, Cookie-/Datenschutz-Logik, Blog-Struktur, Sitemap) in
neuen Projekten mit anderem Look wiederzuverwenden.

Design (Farben, Fonts, Layout) ist **nicht** Teil dieses Regelwerks — nur Struktur, Dateibenennung
und rechtlich/technisch notwendiges Verhalten.

---

## 1. Ordnerstruktur

```
/
├── index.html
├── impressum.html
├── datenschutz.html
├── agb.html
├── 401.html
├── 403.html
├── 404.html
├── 410.html
├── 500.html
├── 503.html
├── robots.txt
├── sitemap.xml
├── style.css
├── page.js              # globales Verhalten: Cookie-Banner, Consent-Gating, UI-Interaktionen
├── medien/               # alle Bild-/Asset-Dateien (zentral, nicht pro Unterseite verstreut)
└── blog/
    ├── index.html        # Übersicht: alle Artikel, kategorieübergreifend
    ├── kategorien.html    # Übersicht: alle Kategorien
    └── <kategorie>/
        ├── index.html     # Übersicht: Artikel dieser Kategorie
        └── <artikel>.html # einzelner Artikel
```

**Regeln:**
- Jede Blog-Kategorie ist ein eigener Unterordner unter `blog/`, benannt nach der Kategorie
  (kebab-case, z. B. `blog/google-ads/`, `blog/kundengewinnung/`).
- Jeder Artikel liegt als eigene `.html`-Datei innerhalb seines Kategorie-Ordners.
- Jeder Kategorie-Ordner hat eine eigene `index.html` als Kategorie-Übersicht.
- `blog/index.html` zeigt alle Artikel über alle Kategorien hinweg; `blog/kategorien.html`
  zeigt nur die Kategorien selbst. Beide Übersichtsebenen existieren parallel.
- Assets (Bilder, Grafiken) liegen zentral in `medien/`, nicht verstreut neben den HTML-Dateien.
- Rechtstexte (Impressum, Datenschutz, AGB) liegen auf Root-Ebene, nicht unter `blog/`.

---

## 2. Grundgerüst jeder HTML-Seite

Jede Seite folgt demselben Skelett:

```html
<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Seitentitel — Projektname</title>
<meta name="description" content="…" />
<!-- optional: <meta name="robots" content="noindex" /> bei Fehlerseiten/Rechtstexten -->
<link rel="stylesheet" href="style.css" />
</head>
<body class="page-body">

<header class="page-header"> … Logo, Nav, Kontakt-CTA … </header>

<main class="page-content"> … Seiteninhalt … </main>

<footer class="site-footer"> … Footer-Nav: Blog, Blog-Kategorien, Impressum, Datenschutz, AGB … </footer>

<button class="cookie-pill" id="cookiePill">Cookie-Einstellungen</button>
<div class="cookie-modal" id="cookieModal"> … Cookie-Consent-Modal … </div>

<script src="page.js"></script>
</body>
</html>
```

**Regeln:**
- Header und Footer sind auf jeder Seite identisch (gleiche Links, gleiche Reihenfolge).
- Footer verlinkt immer: Blog, Blog-Kategorien, Impressum, Datenschutz, AGB.
- Der Cookie-Pill-Button + das Cookie-Modal sind auf **jeder** Seite vorhanden, nicht nur auf der
  Startseite — Nutzer müssen ihre Einwilligung von jeder Unterseite aus ändern können.
- Kein Tracking-/Analyse-Skript wird statisch im `<head>` eingebunden. Siehe Abschnitt 4.

---

## 3. Fehlerseiten (401 / 403 / 404 / 410 / 500 / 503)

Für jeden relevanten HTTP-Statuscode existiert eine eigene, statische HTML-Datei auf Root-Ebene
(`401.html`, `403.html`, `404.html`, `410.html`, `500.html`, `503.html`), damit der Hoster/Server
sie als Custom-Error-Page einbinden kann.

**Gemeinsames Muster (`.error-page`):**
- Großer Statuscode als visueller Anker (`.error-code`)
- Kurze, verständliche Überschrift + ein erklärender Satz (kein Fachjargon, keine Stacktraces)
- Ein primärer CTA zurück zur Startseite (`.error-actions`)
- Sekundäre Links zu den wichtigsten Bereichen der Seite (Leistungen, Blog, Kontakt) in `.error-links`
- Ton-Variante über `data-tone` Attribut auf `.error-page`:
  - kein Attribut → neutral (404, Standard-„nicht gefunden")
  - `data-tone="warn"` → Warnung (401, 503 — vorübergehend/Berechtigung)
  - `data-tone="danger"` → kritisch (403, 410, 500 — endgültig/Fehler)
- `<meta name="robots" content="noindex" />` immer gesetzt — Fehlerseiten sollen nicht indexiert werden.
- Header, Footer und Cookie-Banner sind identisch zu den regulären Seiten (kein Sonderlayout).

Bei einem neuen Projekt: alle sechs Statuscodes anlegen, auch wenn der Hoster aktuell nur 404
tatsächlich ausliefert — Konsistenz und spätere Serverkonfiguration sind so vorbereitet.

---

## 4. Cookie-Consent & Tracking-Regel (rechtlich bindend, kein Stilmittel)

**Grundsatz:** Kein nicht-notwendiges Skript (Tag Manager, Analytics, Ads-Tracking, Pixel) darf
geladen werden, bevor eine aktive Einwilligung vorliegt. Der Cookie-Banner ist keine Kosmetik,
er muss die tatsächliche Skriptausführung steuern — nicht nur eine Präferenz in `localStorage` ablegen.

**Umsetzung in `page.js`:**
- `localStorage` Key `cookie-consent` speichert `{ analytics: bool, marketing: bool }`.
- Ein `loadGTM()`-artiger Loader baut das Tracking-Skript **dynamisch per JS** in den DOM ein
  (`document.createElement('script')`), niemals als statisches `<script>`-Tag im HTML.
- Der Loader wird nur ausgeführt:
  1. wenn der Nutzer aktiv auf „Alle akzeptieren" klickt, oder
  2. beim Seitenaufruf, falls in `localStorage` bereits eine positive Einwilligung vorliegt.
- Bei „Nur notwendige Cookies" bleibt das Tracking-Skript vollständig aus.
- Ein Guard (`window.__gtmLoaded`) verhindert Mehrfach-Laden.
- Erscheint noch keine gespeicherte Entscheidung, öffnet sich das Cookie-Modal automatisch
  (leicht verzögert, z. B. 800 ms) beim ersten Besuch.
- Der Cookie-Pill-Button erlaubt jederzeit, das Modal erneut zu öffnen und die Wahl zu ändern.

**Warum:** Ein GTM/Analytics-Skript, das unconditional im `<head>` lädt, verstößt gegen § 25 Abs. 1
TDDDG / Art. 6 Abs. 1 lit. a DSGVO, selbst wenn der Banner „nur nach Einwilligung" verspricht —
Text und technisches Verhalten müssen übereinstimmen.

---

## 5. Datenschutzerklärung — Pflichtstruktur

`datenschutz.html` ist eine eigenständige Seite (nicht Teil des Impressums) und deckt mindestens ab:

1. Verantwortlicher (Name der natürlichen Person bzw. Unternehmen, Anschrift, Kontakt)
2. Allgemeine Hinweise zur Datenverarbeitung (Art. 6 Abs. 1 DSGVO als Basis)
3. Hosting / Server-Logfiles
4. SSL/TLS-Verschlüsselung
5. Cookies & vergleichbare Technologien (Unterscheidung notwendig / nicht notwendig)
6. Consent-Management (was gespeichert wird, wenn Einwilligung erfasst wird)
7. Kontakt-/Anfrageformulare
8. Falls zutreffend: Leadgenerierung / Weitergabe an Partnerunternehmen
9. Einwilligung zur Kontaktaufnahme (Telefon, E-Mail, WhatsApp etc.)
10. Jeder eingebundene Drittdienst bekommt einen eigenen Abschnitt mit: Anbieter, Zweck,
    verarbeitete Daten, Rechtsgrundlage, Widerrufshinweis (z. B. GTM, Analytics, Ads, Meta Pixel)
11. Empfänger personenbezogener Daten (Kategorien)
12. Drittlandübermittlung (USA/Google/Meta — DPF-Hinweis)
13. Speicherdauer
14. Widerruf von Einwilligungen
15. Widerspruchsrecht
16. Betroffenenrechte (Art. 15–21 DSGVO)
17. Beschwerderecht bei Aufsichtsbehörde
18. Automatisierte Entscheidungsfindung (Art. 22 DSGVO — i. d. R. Fehlanzeige)
19. Sicherheit der Verarbeitung
20. Stand/Aktualität der Erklärung (Monat + Jahr, bei jeder inhaltlichen Änderung aktualisieren)

**Regel:** Jeder neu eingebaute Dienst (neues Tracking-Pixel, neues Formular-Tool, neue
Kommunikationsplattform) bekommt sofort einen eigenen Abschnitt in `datenschutz.html` —
niemals stillschweigend einbauen und die Erklärung „später" nachziehen.

---

## 6. Impressum — Pflichtangaben (§ 5 DDG)

- Name der natürlichen Person **und** ggf. Unternehmensbezeichnung (nicht nur Firmenname)
- Ladungsfähige Anschrift
- Zwei Kontaktwege: E-Mail **plus** entweder Telefonnummer oder Kontaktformular mit
  zugesicherter schneller Antwortzeit — eine reine E-Mail-Adresse reicht nicht aus
- USt-IdNr. (falls vorhanden)
- Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV

---

## 7. Sitemap & robots.txt

- `sitemap.xml` listet **jede** öffentlich erreichbare, indexierbare Seite einzeln auf
  (Startseite, Rechtstexte außer Datenschutz, Blog-Übersicht, Blog-Kategorien-Übersicht,
  jede Kategorie-Index-Seite, jeder einzelne Artikel).
- `priority` gestaffelt: Startseite `1.0`, Blog-Übersicht/Artikel `0.6–0.8`, reine
  Rechtstexte `0.3`.
- `changefreq` realistisch setzen: Rechtstexte `yearly`, Kategorie-/Artikel-Übersichten
  `monthly`, Startseite/Blog-Index `weekly`.
- **Neue Regel bei jedem neuen Artikel/jeder neuen Kategorie:** sofort einen `<url>`-Eintrag
  in `sitemap.xml` ergänzen — die Sitemap wird nicht automatisch generiert.
- Fehlerseiten (401/403/404/410/500/503) und `datenschutz.html` gehören **nicht** in die
  Sitemap (Datenschutz wird zusätzlich explizit per `robots.txt` von der Indexierung
  ausgeschlossen).
- `robots.txt`:
  ```
  User-agent: *
  Allow: /
  Disallow: /datenschutz.html

  Sitemap: https://<domain>/sitemap.xml
  ```

---

## 8. Checkliste für ein neues Projekt auf Basis dieses Regelwerks

- [ ] Ordnerstruktur gemäß Abschnitt 1 anlegen (`medien/`, `blog/<kategorie>/`)
- [ ] `page.js` mit Cookie-Consent-Logik + dynamischem Tracking-Loader übernehmen
- [ ] Alle sechs Fehlerseiten (401/403/404/410/500/503) mit `.error-page`-Muster anlegen
- [ ] `impressum.html` mit vollständigen Pflichtangaben (Abschnitt 6)
- [ ] `datenschutz.html` mit vollständiger Abschnittsstruktur (Abschnitt 5), pro Drittdienst
      ein eigener Abschnitt
- [ ] `agb.html` falls Vertragsbeziehungen/Vermittlung stattfinden
- [ ] `sitemap.xml` + `robots.txt` gemäß Abschnitt 7 pflegen
- [ ] Bei jedem neuen Tracking-/Marketing-Tool: Consent-Gating in `page.js` erweitern **und**
      Datenschutzerklärung im selben Arbeitsschritt aktualisieren — nie getrennt voneinander
