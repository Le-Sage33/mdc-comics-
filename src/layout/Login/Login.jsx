import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Login/login.css";

const Login = () => {
  const handleSubmit = (event) => {
    // j'empêche le rechargement automatique de la page
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // username et password
    const username = event.target.username.value;
    const password = event.target.password.value;

    // je fais une requête vers l'api (express)
    // sur l'url login avec la méthode POST
    fetch("http://localhost:3002/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      // j'envoie dans le corps de la requête POST
      // les données du formulaire
      // formattées en JSON
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    // le serveur express me renvoie un JWT
    // si les infos sont valides (username et password
    // correspondent à un utilisateur en BDD)
    .then(response => response.json()) // Je transforme la réponse en JSON
    .then(data => { // Je récupère les données de la réponse

        if (data.token) { // Si j'ai un token dans la réponse
            const jwt = data.token; // Je récupère le token
            localStorage.setItem("jwt", jwt); // Je stocke le token dans le localStorage
            window.location.href = "http://localhost:3000/accueil-admin"; // Redirection vers la page
        } 
        else {
            alert("Nom d'utilisateur ou mot de passe incorrect !");
        }
    })

  };
  

  // je créé un formulaire avec deux champs :
  // username et password
  // pour connecter mon utilisateur
  // j'attache un event listener sur le submit du formulaire
  return (
    <>
      <Header/>
      <div className="formlogin">
        
        <form onSubmit={handleSubmit}>
          <h2>Connecte toi...</h2>
          <br></br>
          <div>
            <label>
              Username: <input type="text" name="username" />
            </label>
          </div>
          <br></br>
          <div>
            <label>
              Password: <input type="password" name="password" />
            </label>
          </div>
          <br></br>
          <button className="btn btn-primary" type="submit">Connexion</button>
        </form>
      </div>
        
      <Footer/>
    </>
      
  );
  
};

export default Login;