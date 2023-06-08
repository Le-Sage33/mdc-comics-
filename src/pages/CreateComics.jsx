import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Admin from "../layout/Users/Admin";
import Footer from "../layout/Footer/Footer";

const CreateComics = () => {
  
  const navigate = useNavigate();

  // si l'utilisateur n'est pas connecté (pas de jwt dans le localStorage) on le redirige vers la page de connexion
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const jwtData = token.split(".")[1];
    const decodedJwt = JSON.parse(atob(jwtData));
    const expirationTime = decodedJwt.exp * 1000;

    const timeoutId = setTimeout(() => {
      navigate("/admin/login");
    }, expirationTime - Date.now());

    return () =>clearTimeout(timeoutId);
  }, [navigate]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    let name = null;
    if (event.target.name) {
      name = event.target.name.value;
    }

    let description = null;
    if (event.target.description) {
      description = event.target.description.value;
    }

    let picture = null;
    if (event.target.picture) {
      picture = event.target.picture.value;
    }

    let address = null;
    if (event.target.address) {
      address = event.target.address.value;
    }

    const token = localStorage.getItem("jwt");

    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
    fetch(`http://localhost:3002/api/comics_books/`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        // si l'url de mon api nécessite une authentification
        // on envoie avec les données de la requ$ete le JWT
        // stocké en localStorage
        // car il contient l'authorisation de l'utilisateur
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        picture: picture,
        address: address,
      }),

      // si l'api renvie une reponse 200
      // ça veut dire que tout s'est bien passé
      // alors on affiche un message dans la console
    }).then((response) => {
      if (response.status === 200) {
        console.log("comics créé");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le comics n'a pas été créé
      } else {
        console.log("erreur");
        <p>Attention, Le Comics n'a pas été créer!</p>;
      }
    });
  };

  return (
    <>
      <Admin />
        <h2>Creation d'un "Comics"</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="picture">Picture</label>
                <input type="text" name="picture" alt="/" />
            </div>
            <div>
                <label htmlFor="name">Nom du comics</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
            </div>
            <div>
                <label htmlFor="address">Liens internet</label>
                <input type="text" name="address" />
            </div>
            <button type="submit" className="btn-primary">Créer le comics</button>
        </form>
      <Footer/>
    </>
  );
};

export default CreateComics;