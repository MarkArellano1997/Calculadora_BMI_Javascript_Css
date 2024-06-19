const calcular = ()=>{
    let form = document.getElementById('form')
    let peso = form[0].value
    let altura = (form[1].value)/100
    if (peso && altura) {
        let mib = (peso/altura).toFixed(2)
        document.getElementById('resultado').innerHTML=`El BMI es: ${mib}`
        setTimeout(()=>{
            document.getElementById('resultado').innerHTML= ''
        },5000)
    } else {
        document.getElementById('error').style.marginTop = '1rem'
        document.getElementById('error').innerHTML= 'Todos los campos son obligatorios'
        setTimeout(()=>{
            document.getElementById('error').innerHTML= ''
            document.getElementById('error').style.marginTop = ''
        },3000)
    }
    
    
}