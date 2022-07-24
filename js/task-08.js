const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      const message = "Друг, все поля должны быть заполнены:)";
      alert(message);
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`)
    }

formRef.addEventListener('submit', handleSubmit)
