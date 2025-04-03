const requestTarget = 'https://flynn.boolean.careers/exercises/api/random/mail'
const emailContainer = document.getElementById('email-container')
const button = document.getElementById('generate')

const generateMail = () => {
    emailContainer.innerHTML = '';
     // ciclo for per ripetere la richiesta 10 volte
     for(let i=0; i < 10; i++){
        axios.get(requestTarget)
            .then((resp) => {
                // console.log(resp.data.response)
                // document.getElementById(`email${i}`).innerHTML = resp.data.response;
                emailContainer.innerHTML += `<li class="email">${resp.data.response}</li>`
            })
    }
}