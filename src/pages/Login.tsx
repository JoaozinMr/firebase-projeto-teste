import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  }

  return (
    <div>
      <p>Entre com sua conta Google.</p>
      <button onClick={signInWithGoogle}>Entrar com Google</button>
    </div>
  )
}

//TODO: FAZER O CSS DA NAVBAR 