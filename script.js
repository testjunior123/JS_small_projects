
// Pobieramy elementy z DOM
const button = document.getElementById("bttn_task");
const taskList = document.getElementById("Tasks");
const div = document.getElementById("TaskList");
const inputTask = document.getElementById("input_task");
//console.log(inputTask.value);

// Funkcja do tworzenia nowego elementu listy z przyciskami
// I.A Tworzymy li z nazwa zadania 
function createTaskElement(TaskName){
const newLI = document.createElement("li"); // tworzymy nowy element li

 // I.B Element tekstowy zadania
 const taskSpace = document.createElement("span");
 newLI.appendChild(taskSpace);
 taskSpace.innerText = inputTask.value;

// II. Tworzymy buttony
const bttnEdit = document.createElement("button"); // tworzymy nowy button do edycji
newLI.appendChild(bttnEdit);  // dodajemy do sekcji li
bttnEdit.addEventListener("click",()=> editTask(newLI,taskSpace,bttnEdit,bttnRemove)) // Obsługa zdarzenia kliknięcia
bttnEdit.innerText = "Edycja";
const bttnRemove = document.createElement("button"); // tworzymy nowy button do usuwania
newLI.appendChild(bttnRemove);  // dodajemy do sekcji li
bttnRemove.addEventListener("click",()=> removeTask(newLI)) // Obsługa zdarzenia kliknięcia
bttnRemove.innerText = "Usuwanie";

return newLI;
}

// funkcja do usuwania
function removeTask(taskitem){
    taskList.removeChild(taskitem);
}

//funkcja do edycji

function editTask(newLI,taskSpace, bttnEdit,bttnRemove) {
    // Zapisz oryginalny tekst zadania na wypadek cofnięcia zmian
    bttnEdit.style.display = "none";
    bttnRemove.style.display = "none";
    const originalText = taskSpace.innerText;
  
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = originalText;
    newLI.insertBefore(inputField, taskSpace);
    taskSpace.style.display = "none";  // Ukryj oryginalny tekst podczas edycji

    //Przycisk zatwierdzania edycji
     const approveButton = document.createElement("button");
     approveButton.innerText = "Zatwierdź";
     approveButton.addEventListener("click", () => {
        if(inputField.value !== ""){ 
         taskSpace.innerText = inputField.value;  // Aktualizuj tekst zadania
         cancelEdit();  // Usuń elementy edycji
        } else {
            alert("wpisz poprawana nazwe");
        }
     });
    
     //Przycisk anulowania edycji
     const cancelButton = document.createElement("button");
     cancelButton.innerText = "Anuluj";
     cancelButton.addEventListener("click", () => {
         cancelEdit();  // Usuń elementy edycji bez zmiany tekstu
     });


     //Funkcja anulująca edycję
      function cancelEdit() {
          inputField.remove();
          approveButton.remove();
          cancelButton.remove();
          bttnEdit.style.display = "";
        bttnRemove.style.display = "";
          taskSpace.style.display = "";  // Przywróć widoczność oryginalnego tekstu
      }
      
      //Dodaj przyciski "Zatwierdź" i "Anuluj"
     newLI.appendChild(approveButton);
     newLI.appendChild(cancelButton);

}

    //  // Przycisk zatwierdzania edycji
    //  const approveButton = document.createElement("button");
    //  approveButton.innerText = "Zatwierdź";
    //  approveButton.addEventListener("click", () => {
    //      taskTextNode.innerText = inputField.value;  // Aktualizuj tekst zadania
    //      cancelEdit();  // Usuń elementy edycji
    //  });
 
    //  // Przycisk anulowania edycji
    //  const cancelButton = document.createElement("button");
    //  cancelButton.innerText = "Anuluj";
    //  cancelButton.addEventListener("click", () => {
    //      cancelEdit();  // Usuń elementy edycji bez zmiany tekstu
    //  });
 
    //  // Dodaj przyciski "Zatwierdź" i "Anuluj"
    //  newLI.appendChild(approveButton);
    //  newLI.appendChild(cancelButton);

 
     // Funkcja anulująca edycję
    //  function cancelEdit() {
    //      inputField.remove();
    //      approveButton.remove();
    //      cancelButton.remove();
    //      taskTextNode.style.display = "";  // Przywróć widoczność oryginalnego tekstu
    //  }
 
 
    
    // taskitem.innerText = " ";
    // const inputField = document.createElement("input");
    // taskitem.appendChild(inputField);
    // const bttnAccept = document.createElement("button"); // tworzymy nowy button do usuwania
    // taskitem.appendChild(bttnAccept);  // dodajemy do sekcji li
    // bttnAccept.innerText = "Zatwierdz";
    // bttnAccept.className = "approvebuttons"
    // bttnAccept.addEventListener("click",()=>{  // Obsługa zdarzenia kliknięcia
    //     const newInput = inputField.value;
    //     if(newInput !== ""){  
    //         taskitem.innerText = newInput;
            
    //         // taskList.removeChild(inputField);
    //     } else {    
    //         alert("wpisz poprawana nazwe");
    //     }
    // }) 
    // return inputField;






// Obsługa zdarzenia kliknięcia przycisku „Dodaj zadanie”

    button.addEventListener("click",()=>{
        const newTask = inputTask.value;
        if(newTask !== ""){  
        const newTaskItem = createTaskElement(newTask); // Tworzymy nowe zadanie z przyciskami
        taskList.appendChild(newTaskItem);  // Dodajemy je do listy
        inputTask.value= ""; // Czyścimy wczesniejsza wartosc wprowadzona
        
        } else {    
            alert("wpisz poprawana nazwe");
        }

    })


//








