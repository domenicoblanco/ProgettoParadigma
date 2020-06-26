
## FASI PROGETTO

È stato sviluppato un social sulla base di una piattaforma fornita dal team di Paradigma. Inizialmente sono stati assegnati i ruoli all’interno di una Scrum Planning. Successivamente sono state definite delle Stories per organizzare il lavoro da svolgere, il tutto supervisionato dallo Scrum Master, in modo tale da raggiungere gli sprint goal in ciascun punto. Le fasi implementative sono state suddivise in quattro sprint:

 1. Configurazione database e back-end all’interno di un server condiviso in modo tale da poter sfruttare lo stesso DB su piattaforme diverse (durata: 1 settimana).
 2. Aggiornamento della piattaforma basata su Ionic secondo gli stili discussi in precedenza ed implementazione delle Stories, con presenza di bug minori (durata: 8 giorni).
 3. Stesura applicazione sul framework Angular con sviluppo di nuove features definite in precedenza nelle varie Stories, con presenza di bug minori (durata: 4 giorni).
4. Risoluzione bug presenti nelle due versioni (durata: 2 giorni)

Durante lo sviluppo delle varie Stories nei diversi sprint, sono stati effettuati Daily
Scrum e Sprint Review, in modo tale da revisionare il lavoro svolto.

### Stories

1. Creazione e gestione delle stories
    - **AS** Utente
    - **I WANT TO** Creare storie con immagini e/o testi
    - **SO THAT** Condividere i momenti della propria giornata
    - Acceptance Criteria:
       ▪ Caricare Storie
       ▪ Durata di 2 minuti
       ▪ Possibilità di poterle visualizzare nuovamente
2. Pubblicazione tweet
    - **AS** Utente
    - **I WANT TO** Pubblicare uno o più tweet con la possibilità di allegare immagini congiunte al testo
    - **SO THAT** Condividere contenuti con testi e immagini a scopo
       informativo o per diletto
    - Acceptance Criteria
		▪ Limite di 280 caratteri
		▪ Immagini facoltative
3. Personalizzazione foto del profilo
    - **AS** Utente
    - **I WANT TO** Personalizzare la propria foto del profilo
    - **SO THAT** Possa essere riconosciuto da altri utenti
    - Acceptance Criteria
       ▪ Libertà di selezionare una foto del profilo a scelta
4. Sistemazione stile interfaccia
    - **AS** Utente
    - **I WANT TO** Un’interfaccia adeguata al dispositivo in uso
    - **SO THAT** Migliorare l’aspetto estetico a livello visivo per una maggiore usabilità
    - Acceptance Criteria
       ▪ Schermo adattato ad un qualsiasi desktop, agli smartphone, tablet ed altri dispositivi
       ▪ Un miglior layout della pagina
5. Rimozione tweet dell’utente eliminato dal DB
    - **AS** Developer
    - **I WANT TO** Ottimizzare il DB eliminando i tweet degli utenti
       rimossi
    - **SO THAT** Rimozione dell’utente e dei suoi tweet
    - Acceptance Criteria
       ▪ Certezza che i dati siano stati eliminati
6. Creazione popup per la visualizzazione di un profilo utente
    - **AS** Utente
    - **I WANT TO** Riconoscere un utente rapidamente
    - **SO THAT** Possa identificare l’autore con uno zoom sull’immagine del profilo
    - Acceptance Criteria
       ▪ Creazione modale per mostrare l’immagine del profilo zoomata
7. Conteggio caratteri tweet e storie
    - **AS** Utente
    - **I WANT TO** Conoscere il numero corrente di caratteri inseriti
    - **SO THAT** Regolarsi su quanti caratteri mancano al limite consentito
    - Acceptance Criteria
       ▪ Contatore caratteri correnti rispetto alla lunghezza massima
          prefissata
8. Visualizzazione storie
    - **AS** Utente
    - **I WANT TO** Visualizzare il contenuto delle storie presenti
    - **SO THAT** Aggiornarsi sulle attività quotidiane di altri utenti
    - Acceptance Criteria
       ▪ Creazione modale per la visualizzazione del contenuto delle storie


### Architettura

- Database No-SQL MongoDB Community Edition hostato su container Docker
- Back-end Node Express hostato su container Docker
- Front-end:
    o Ionic 4
    o Angular 9


