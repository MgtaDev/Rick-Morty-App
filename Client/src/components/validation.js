export default function validation (userData){
    const errors = {};

    if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i.test(userData.email)){
        errors.email = "Verifique correo electrónico";
    }
    if(!userData.email){
        errors.email = "Ingrese un correo"
    }
    if (userData.email.length > 35) {
        errors.email = "El correo no puede tener más de 35 caracteres"
    }
    


    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La contraseña debe contener almenos un numero"
    } 
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors;
};