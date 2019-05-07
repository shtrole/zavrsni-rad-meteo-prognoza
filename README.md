# zavrsni-rad-meteo-prognoza
Završni rad u Cody Academy: Meteo prognoza za pojedini grad i datum

Aplikacija služi za prikaz trenutnih vremenskih prilika i prognoze vremena za pojedini grad i datum.

Kao izvor podataka koristi Open Weather Map API https://openweathermap.org/api (JSON format podataka) za trenutne vremenske podatke i prognozu vremena za do 5 dana unapred.

Aplikacija ima opciju za automatski prikaz podataka prema trenutnoj lokaciji koja se dobija preko pretraživača, ukoliko je dozvoljen pristup geolokaciji. 

Alternativno se može i manuelno uneti naziv grada u polje za unos i pretragu pri vrhu strane i pretraživati vremenske prilike za različita mesta.

Postoji i ikonica za povratak na trenutnu lokaciju, u gornjem levom uglu.

Aplikacija prikazuje sledeće osmotrene podatke za pojedini grad:
- Trenutna temperatura (u Celzijusima),
- Kratak opis trenutnih vremenskih prilika uz vizuelni prikaz u vidu ikonice,
- Informacije o pritisku (u mBar-ima), smeru i brzini vetra (u m/s), procenatima vlažnosti vazduha i oblačnosti.

Dostupna je i prognoza vremena za naredne dane sa osnovnim podacima o temperaturi i vremenskim prilikama, zasnovanim na prognozi za konkretan dan u 15h.

Vremenski podaci se automatski ažuriraju na svakih 30 minuta.

Korišćene su sve tri glavne tehnologije zahtevane zadatkom HTML, CSS (osnovni i Bootstrap), JavaScript i jQuery.

Aplikacija je kompatibilna za rad u pretraživačima Google Chrome i Mozilla Firefox, kao što je i zahtevano u zadatku.
 
-------------------------------------------------------------------------------------------------------------------------------------

Final project at Cody Academy: Weather forecast for a particular city and date

The application serves to display current weather data and weather forecasts for a particular city and date.

App uses the Open Weather Map API https://openweathermap.org/api as a data source in JSON format for current weather data and weather forecasts for up to 5 days in advance.

The application has the option to automatically display the data according to the current location obtained through the browser, if geolocation is allowed.

Alternatively, you can manually enter the city name into the search box at the top of the page and search for weather conditions for different locations.

There is also an icon to return to the current location, in the upper left corner.

The app displays the following data for each city:
- Current temperature (in Celsius),
- A brief description of the current weather conditions with a visual display in the form of simple icon,
- Pressure information (in mBars), direction and wind speed (in m/s), humidity and cloudiness percentages.

A forecast is also available for the next days with basic weather and temperature data based on the forecast for a particular day at 3pm.

Weather data is automatically updated every 30 minutes.

All three required main technologies were used HTML, CSS (basic and Bootstrap), JavaScript and jQuery.

App is compatible both in Google Chrome and Mozilla Firefox browsers, as required.
