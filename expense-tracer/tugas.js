let List = [];

function AddList() {
  List.push({
    Barang: document.getElementById("NamaBarang").value,
    Harga: document.getElementById("HargaBarang").value,
  });

  this.ShowList();
}

function ShowList() {
  let content = "";
  let total = 0;
  console.log(List);
  List.forEach((Listnya, index) => {
    content += `
      <div class="Satuan">
         <h4>${Listnya.Barang}</h4>
         <h4>Rp. ${Listnya.Harga}</h4>
         <button onclick="Remove(${index})" class="RemoveBtn">Remove</button>
      </div>
    `;
    total += parseInt(Listnya.Harga);
  });
  document.getElementById("ListBarang").innerHTML = content;
  document.querySelector("h3:last-of-type").textContent = `Total: Rp. ${total}`;
}

function Remove(index) {
  List.splice(index, 1);
  ShowList();
  alert("Are You Sure?");
}
