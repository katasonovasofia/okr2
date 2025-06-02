function userDialog() {
    let attempts = 3;
    let mood = prompt("Оцініть свій настрій від 1 до 10 під час спілкування з готелем:");
  
    for (let i = 1; i <= attempts; i++) {
      let continueDialog = confirm(`Спроба №${i}: Чи хочете ви продовжити діалог? (Ваш настрій: ${mood})`);
  
      if (continueDialog) {
        alert("Рада чути! Продовжуємо наше спілкування.");
      } else {
        alert("Дякуємо за увагу, до зустрічі!");
        break;
      }
    }
  }
  
  function developerInfo(surname, name, position = "Менеджер готелю") {
    alert(`Розробник сторінки:\n${surname} ${name}\nПосада: ${position}`);
  }
  