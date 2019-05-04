# zavrsni-rad-meteo-prognoza
Završni rad u Cody Academy: Meteo prognoza za pojedini grad i datum

Aplikacija služi za prikaz trenutnih vremenskih prilika i prognoze vremena za pojedini grad i datum.

Kao izvor podataka koristi Open Weather Map API https://openweathermap.org/api za trenutne vremenske podatke i prognozu vremena za do 5 dana unapred.

Aplikacija ima opciju za automatski prikaz podataka prema trenutnoj lokaciji koja se dobija preko pretraživača, ukoliko je dozvoljen pristup lokaciji. 
Alternativno se može i manuelno uneti naziv grada u polje za unos i pretragu pri vrhu strane i pretraživati vremenske prilike za različita mesta.
Postoji i ikonica za povratak na trenutnu lokaciju.

Aplikacija prikazuje sledeće osmotrene podatke za pojedini grad:
- Trenutna temperatura (u Celzijusima),
- Kratak opis trenutnih vremenskih prilika kao i vizuelni prikaz u vidu sličice,
- Informacije o pritisku (u mBar-ima), procenatu vlažnosti vazduha, smeru i brzini vetra (u m/s) i procentu oblačnosti.

Dostupna je i prognoza vremena za naredne dane sa osnovnim podacima o temperaturi i vremenskim prilikama, zasnovanim na prognozi za konkretan dan u 15h.

