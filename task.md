Treść zadania:

- korzystając z API dostępnego na https://api.tvmaze.com/schedule/web?date=2021-02-04&country=US pobierze listę granych w danym dniu seriali (dodać picker z wyborem daty i pobierać listę w zależności od wybranego dnia)

- każdy z seriali będzie zaprezentowana w postaci prostej karty, która powinna zawierać następujące informacje: Tytuł, sezon, skrócony opis, okładkę i godzinę w jakiej nastąpi emisja

- na podstawie dostępnej listy seriali zostanie wygenerowana lista gatunków (genres) granych w danym dniu, zaprezentowana na stronie w formie filtrów np multiselect, chips, przycisków (obojętnie). Po zmianie zaznaczenia, zaprezentowana lista seriali zostanie odpowiednio zawężona

- po kliknięciu na kartę z filmem, otworzy się nowy adres URL /details/:id (gdzie ID będzie ID filmu), w którym zostaną pobrane i zaprezentowane szersze detale danego odcinka, pobrane z adresu https://api.tvmaze.com/shows/idSerialu np. https://api.tvmaze.com/shows/49538.
