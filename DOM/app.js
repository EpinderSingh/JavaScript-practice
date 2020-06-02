const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++) {
  console.log(allLis[i].innerText);
}
for (let li of allLis) {
  li.innerText = 'Text replaced for all lis';
}
