

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorter').addEventListener('submit',function(event){
        event.preventDefault();
        let maxNumber = document.getElementById('max-number').value;

        maxNumber = parseInt(maxNumber);

        let RandomNumber = Math.random() * maxNumber;
        RandomNumber = Math.floor(RandomNumber + 1)
        
        document.getElementById('result').innerText = RandomNumber;
        document.querySelector('.result').style.display = 'block';
    })
})