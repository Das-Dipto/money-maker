const income = document.getElementById('income');
const balance = document.getElementById('balance');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const saveText = document.getElementById('save');

document.getElementById('calculate-btn').addEventListener('click', function(){

    if (isNaN(parseInt(income.value)) || income.value == '' || parseInt(income.value) <= 0 ){
        if(income.value == ''){
             alert('income field cannot be empty');
        }
 
        else if(isNaN(parseInt(income.value))){
             alert('income cannot be string');
        }
 
        else if(parseInt(income.value) == 0) {
             alert('income cannot be zero');
        }
 
        else if(parseInt(income.value) < 0) {
             alert('income cannot be negative');
        }
    }

    else if(isNaN(parseInt(food.value)) || food.value == '' || parseInt(food.value) <= 0 ){
       if(food.value == ''){
           alert('food expense field cannot be empty');
       }

       else if(isNaN(parseInt(food.value))){
            alert('food expense cannot be string');
       }

       else if(parseInt(food.value) == 0) {
            alert('food expense cannot be zero');
       }

       else if(parseInt(food.value) < 0) {
        alert('food expense cannot be negative');
       }
    }

    else if(isNaN(parseInt(rent.value)) || rent.value == '' || parseInt(rent.value) <= 0 ){
        if(rent.value == ''){
            alert('rent expense field cannot be empty');
        }
 
        else if(isNaN(parseInt(rent.value))){
             alert('rent expense cannot be string');
        }
 
        else if(parseInt(rent.value) == 0) {
             alert('rent expense cannot be zero');
        }
 
        else if(parseInt(rent.value) < 0) {
         alert('rent expense cannot be negative');
        }
    }


     else if(isNaN(parseInt(clothes.value)) || clothes.value == '' || parseInt(clothes.value) <= 0 ){
        if(clothes.value == ''){
            alert('clothes expense field cannot be empty');
        }
 
        else if(isNaN(parseInt(clothes.value))){
             alert('clothes expense cannot be string');
        }
 
        else if(parseInt(clothes.value) == 0) {
             alert('clothes expense cannot be zero');
        }
 
        else if(parseInt(clothes.value) < 0) {
         alert('clothes expense cannot be negative');
        }
    }

    else{
         const totalExpense = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
         
         if(parseInt(income.value) > totalExpense){
             document.getElementById('total-expense').innerText = totalExpense;
             balance.innerText = parseInt(income.value) - totalExpense;
             
             document.getElementById('btn-save').removeAttribute('disabled');
             saveText.removeAttribute('disabled');

             document.getElementById('btn-save').addEventListener('click', function(){
                if (isNaN(parseInt(saveText.value)) || saveText.value == '' || parseInt(saveText.value) <= 0 ){
                    if(saveText.value == ''){
                         alert('saving field cannot be empty');
                    }
             
                    else if(isNaN(parseInt(saveText.value))){
                         alert('saving amount cannot be string');
                    }
             
                    else if(parseInt(saveText.value) == 0) {
                         alert('saving amount cannot be zero');
                    }
             
                    else if(parseInt(saveText.value) < 0) {
                         alert('income cannot be negative');
                    }
                }

                else{
                    if((((parseFloat(saveText.value) /100) ).toFixed(2)) <= 1 && 
                        (((parseFloat(saveText.value) /100) ).toFixed(2)) >= 0 ){
                        let savingAmount = parseFloat( ( parseInt(income.value) - totalExpense ) * (parseFloat(saveText.value) /100) ).toFixed(2);
                        document.getElementById('saving-amount').innerText = savingAmount;
                        document.querySelector('.remaining-balance').innerText = parseFloat(( parseInt(income.value) - totalExpense ) - savingAmount).toFixed(2);
                    }
                    else{
                        alert('saving percentage should be equal or less than 100');
                    }
                }
            
             })
         }

         else{
            alert('Do not have sufficient fund for expense');
         }
    }
        
})

