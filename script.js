export const imionaMezczyzn = [
  "Jan",
  "Piotr",
  "Adam",
  "Marek",
  "Paweł",
  "Krzysztof",
  "Andrzej",
  "Tomasz",
  "Michał",
  "Sławomir",
  "Maciej",
  "Marcin",
  "Bartosz",
  "Wojciech",
  "Grzegorz",
  "Dariusz",
  "Jakub",
  "Mateusz",
  "Sebastian",
  "Rafał",
  "Łukasz",
  "Jarosław",
  "Karol",
  "Dominik",
  "Paweł",
  "Artur",
  "Mariusz",
  "Ryszard",
  "Eryk",
  "Zbigniew",
  "Stefan",
  "Bogdan",
  "Czesław",
  "Waldemar",
  "Jacek",
  "Mieczysław",
  "Marek",
  "Witold",
  "Jerzy",
  "Kamil",
  "Ignacy",
  "Tadeusz",
  "Zdzisław",
  "Feliks",
  "Roman",
  "Edward",
  "Stanislaw",
  "Oskar",
  "Michał",
  "Hieronim",
];
export const imionaKobiet = [
  "Anna",
  "Maria",
  "Katarzyna",
  "Agnieszka",
  "Ewa",
  "Joanna",
  "Barbara",
  "Monika",
  "Beata",
  "Iwona",
  "Zofia",
  "Wanda",
  "Marta",
  "Małgorzata",
  "Sylwia",
  "Grażyna",
  "Natalia",
  "Magdalena",
  "Danuta",
  "Halina",
  "Karolina",
  "Aleksandra",
  "Dorota",
  "Elżbieta",
  "Izabela",
  "Patrycja",
  "Renata",
  "Mieczysława",
  "Dominika",
  "Klaudia",
  "Lucyna",
  "Julia",
  "Urszula",
  "Justyna",
  "Kamila",
  "Emilia",
  "Celina",
  "Lidia",
  "Irena",
  "Teresa",
  "Maja",
  "Lena",
  "Olga",
  "Anita",
  "Żaneta",
  "Kinga",
  "Dagmara",
  "Monika",
  "Edyta",
];
export const nazwiska = [
  "Nowak",
  "Kowalski",
  "Wiśniewski",
  "Wójcik",
  "Kamiński",
  "Lewandowski",
  "Zieliński",
  "Szymański",
  "Woźniak",
  "Dąbrowski",
  "Kozłowski",
  "Jankowski",
  "Mazur",
  "Kwiatkowski",
  "Kaczmarek",
  "Piotrowski",
  "Grabowski",
  "Jabłoński",
  "Wieczorek",
  "Mazurek",
  "Baran",
  "Michalski",
  "Król",
  "Ostrowski",
  "Zawisza",
  "Nowicki",
  "Chmiel",
  "Twardowski",
  "Walentowicz",
  "Bąk",
  "Sikora",
  "Ślusarczyk",
  "Błachut",
  "Bąk",
  "Kubiak",
  "Makowski",
  "Wróbel",
  "Jóźwiak",
  "Stolarz",
  "Rogowski",
  "Górski",
  "Przybylski",
  "Borys",
  "Kempisty",
  "Sosnowski",
  "Chmielowski",
  "Pawlak",
  "Stępień",
  "Sienkiewicz",
  "Pawłowski",
  "Zieliński",
  "Król",
  "Klimczak",
  "Krawczyk",
  "Głowacki",
  "Kaczmarek",
  "Zalewski",
  "Kielczewski",
  "Piekarski",
  "Polak",
];

// Funkcja do losowania daty urodzenia
function losujDateUrodzenia() {
  const rok = Math.floor(Math.random() * (2003 - 1950 + 1)) + 1950;
  const miesiac = Math.floor(Math.random() * 12) + 1;
  const dzien = Math.floor(Math.random() * 28) + 1;
  return new Date(rok, miesiac - 1, dzien);
}

// Funkcja do generowania numeru PESEL
function generujPesel(dzien, miesiac, rok, plec) {
  const dzienStr = dzien.toString().padStart(2, "0");
  const miesiacStr = miesiac.toString().padStart(2, "0");
  const rokStr = rok.toString().slice(-2);
  const numerKolejny = Math.floor(Math.random() * 900) + 100;
  const plecDigit = plec === "M" ? "1" : "0";
  return `${rokStr}${miesiacStr}${dzienStr}${numerKolejny}${plecDigit}`;
}

// Funkcja do generowania pełnych danych
function generujDane() {
  // Losowanie płci
  const plec = Math.random() < 0.5 ? "M" : "K"; // 50% szansy na mężczyznę lub kobietę

  // Losowanie imienia
  const imie =
    plec === "M"
      ? imionaMezczyzn[Math.floor(Math.random() * imionaMezczyzn.length)]
      : imionaKobiet[Math.floor(Math.random() * imionaKobiet.length)];

  // Losowanie nazwiska
  const nazwisko = nazwiska[Math.floor(Math.random() * nazwiska.length)];

  // Losowanie daty urodzenia
  const dataUrodzenia = losujDateUrodzenia();
  const dzien = dataUrodzenia.getDate();
  const miesiac = dataUrodzenia.getMonth() + 1;
  const rok = dataUrodzenia.getFullYear();

  // Generowanie numeru PESEL
  const pesel = generujPesel(dzien, miesiac, rok, plec);

  // Wypełnianie wyników
  document.getElementById("name").textContent = `${imie} ${nazwisko}`;
  document.getElementById("pesel").textContent = pesel;
  document.getElementById("dob").textContent = `${dzien
    .toString()
    .padStart(2, "0")}.${miesiac.toString().padStart(2, "0")}.${rok}`;
  document.getElementById("gender").textContent =
    plec === "M" ? "Mężczyzna" : "Kobieta";
}

// Obsługa kliknięcia przycisku
document
  .getElementById("generateButton")
  .addEventListener("click", generujDane);
