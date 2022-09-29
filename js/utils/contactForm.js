class ContactForm {
  constructor(author, container) {
    this._author = author;
    this._container = container;
  }

  ////////////////////////////////////////////////////////////////////////
  // CreateForm
  createContactForm() {
    const form = `
      <div class="contactContainer">
        <div class="modal">
          <header>
            <h2>Contactez-moi <br /> ${this._author}</h2>
              <button id="close_form">
                <span class='closeForm' ><i class="fa-solid fa-xmark"></i></span>
              </button>
            </header>
          <form>
            <div class="formData">
              <label>Prénom</label>
              <input
                class="text-control"
                type="text"
                id="first"
                name="first"
                minlength="2"
                />
              <span class="errorMessage" id="firstnameErrorMessage"></span>
            </div>
            <div class="formData">
              <label for="last">Nom</label>
                <input
                  class="text-control"
                  type="text"
                  id="last"
                  name="last"
                />
                <span class="errorMessage" id="lastnameErrorMessage"></span>
              </div>
              <div class="formData">
                <label>E-mail</label>
                <input
                  class="text-control"
                  type="email"
                  id="email"
                  name="email"
                />
                <span class="errorMessage" id="emailErrorMessage"></span>
              </div>
              <div class="formData">
                <label>Votre message</label>
                  <textarea name="comment" id="message" class="inputTextArea" rows="8" cols="100" maxlength="128"></textarea>
                <span class="errorMessage" id="emailErrorMessage"></span>
              </div>
              <input
                class="contact_button"
                type="submit"
                id="submit"
                
                />
            </form>
          </div>
        </div>
     `;
    this._container.innerHTML = form;
  }

  ////////////////////////////////////////////////////////////////////////
  // Closer
  contactFormCloser() {

    document.getElementById("close_form").addEventListener("click", () => {
      this._container.innerHTML = "";
    });
  }
  ////////////////////////////////////////////////////////////////////////
  // send form
  sendForm() {

    /**
     * @function
     * @description check input validity in form
     * 
     * @returns {boolean} - input validity
     */
    const inputValidators = {
      firstNameValidator: undefined,
      lastNameValidator: undefined,
      emailValidator: undefined,
      messageValidator: undefined,
    };

    function fieldsValidators(tag, regex, validator) {
      const element = document.getElementById(tag);
      if (regex.test(element.value)) {
        inputValidators[validator] = true;
        element.setAttribute("style", "border: none;");
      } else {
        inputValidators[validator] = false;
        console.log("unauthorized");
        element.setAttribute("style", "border:2px solid red;");
      }
    }
    document.getElementById("submit").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      fieldsValidators(
        "first",
        /^[\wàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d '-]+$/,
        "firstNameValidator",
      );
      fieldsValidators(
        "last",
        /^[\wàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d '-]+$/,
        "lastNameValidator",
      );
      fieldsValidators(
        "email",
        /^[\w\d.+-]+@[\w.-]+\.[a-z]{2,}$/,
        "emailValidator",
      );
      fieldsValidators(
        "message",
        /^[\wàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\d '-]+$/,
        "messageValidator",
      );
      const validation = Object.values(inputValidators).every(
        (value) => value === true
      );
      if (validation) {
        const data = {
          firstname: document.getElementById("first").value,
          lastName: document.getElementById("last").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };

        // fetch("server  adress", {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
        //   //récupération de la réponse
        //   .then(function (res) {
        //     if (res.ok) {
        //       return res.json();
        //     }
        //   })
        //   .catch(function (err) {
        //     console.log(err);
        //   });
        console.log(data);
        this._container.innerHTML = ''
      }
    });
  }
}
