import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { auth } from './config';


export const registerDB = async ({userEmail,userPassWord}) => {
    try {
     const data = await createUserWithEmailAndPassword(auth, userEmail, userPassWord);
      return data
    } catch (error) {
      throw error;
    }
  };
export const authStateChanged = async (onChange = () => {}) => {
    auth.signOut()
        onAuthStateChanged((user) => {
                onChange(user);
        });
};

export const loginDB = async ({ userEmail, userPassWord }) => {

  try {
    const credentials = await signInWithEmailAndPassword(auth, userEmail, userPassWord);
        return credentials.user;
  } catch (error) {
    throw error;
  }
};

 export const updateUserProfile = async (update) => {

  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {

  // оновлюємо його профайл
        try {
            await updateProfile(user, update);
        } catch(error) {
            throw error
        }
  }
};