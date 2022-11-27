function validator(name, value) {

  let errors = "";

  if(name === "name"){
    if(value === "") {
      errors = "Введите имя";
    } else if (!/^[а-яА-ЯёЁa-zA-Z -]+$/.test(value)) {
      errors ="Поле \"name\" может содержать только буквы, пробел или дефис";
    }
  }

  if(name === "email") {
    if(value === "") {
      errors = "Введите email";
    } else if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
        errors = "Введите корректный email";
      }
    }

    if(name === "password") {
      if(value === "") {
        errors = "Введите пароль";
      } else if(!/^[a-zA-Z0-9]{8,}$/.test(value)) {
        errors = "Поле \"password\" должно содержать не менее 8 символов";
      }
    }

    return errors;
 }

 export default validator;