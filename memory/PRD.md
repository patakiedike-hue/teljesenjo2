# TuningTalálkozó - PRD (Product Requirements Document)

## Eredeti Feladat
- questgearhub.com hivatkozások eltávolítása és cseréje
- Bio szerkesztési funkció formázási lehetőségekkel
- Resend e-mail integráció (noreply@tuningtalalkozok.com)
- Jelszó-visszaállítás funkció
- Email cím módosítás megerősítéssel

## Felhasználói Személyek
- **Tuning rajongók**: Magyar autósok, akik szeretik a tuning kultúrát
- **Eseményszervezők**: Találkozókat és versenyeket szerveznek
- **Admin**: Felügyelik a tartalmat és jóváhagyják az eseményeket

## Alapfunkciók (Core Requirements)
- Regisztráció és bejelentkezés
- Email megerősítés
- Profil kezelés (profilkép, borítókép, bio)
- Bejegyzések létrehozása
- Események kezelése
- Ismerős rendszer
- Valós idejű chat
- Admin panel

## Implementált Funkciók (2026-03-14)
✅ questgearhub.com hivatkozások eltávolítva
✅ FRONTEND_URL környezeti változó bevezetése
✅ Bio szerkesztés formázási lehetőségekkel:
  - Félkövér (**szöveg**)
  - Dőlt (*szöveg*)
  - Aláhúzott (__szöveg__)
✅ Resend integráció:
  - Sender: noreply@tuningtalalkozok.com
  - API key konfigurálva
✅ Jelszó-visszaállítás:
  - /forgot-password oldal
  - /reset-password oldal
  - Email küldés visszaállító linkkel
✅ Email cím módosítás:
  - /settings oldal
  - Megerősítő email az új címre
✅ Verification email újraküldés endpoint

## Backlog / Jövőbeli Fejlesztések
- P0: -
- P1: Email template-ek testreszabása
- P2: Több nyelv támogatása
- P2: Push értesítések

## Technikai Stack
- **Frontend**: React.js, TailwindCSS, Shadcn/ui
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Email**: Resend API
- **Real-time**: Socket.io
