const pessoa = {
  nome: "Filippe",
  idade: 25,
  cidade: "Fortaleza"
};

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave])
}