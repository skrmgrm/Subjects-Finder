import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./utils";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const user = () => {
  const result = signInWithPopup(auth, provider)
    .then((result) => {
      //   The signed-in user info
      const user = result.user;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(
        `error code: ${errorCode}, error message: ${errorMessage}, email: ${email}, credential: ${credential}`
      );
    });
  return result;
};
