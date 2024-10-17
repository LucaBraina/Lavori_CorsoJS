let username = window.prompt("Che username vuoi utilizzare ?");
let password = window.prompt("Inserisci una password");
let nome = window.prompt("Inserisci il tuo nome");
let cognome = window.prompt("Inserisci il tuo cognome");
let annoNascita = window.prompt("Inserisci il tuo anno di nascita");
let eta = 2024 - Number( annoNascita );

document.write("Il tuo Username è : " + username + " <br> con la seguente password " + password);
document.write(" Il tuo nome è : " + nome + " Il tuo cognome è " + cognome);
document.write(" Il tuo anno di nascita è : " + annoNascita);
document.write(". Ho  " + eta + " anni ");