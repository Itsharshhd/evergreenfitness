import fitnessFirestore from "../firebase/config";
import app from "../firebase/config";


const createUserDocument = async (user, nickname) => {
  if (!user) return;

  const userRef = app.fitnessFirestore.doc(`users/${user.uid}`);

  try {
      await userRef.set({
        displayName: nickname,
        joinedAt: new Date(),
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        phoneNumber: "+91xxxxxxxxxx",
      });

    } catch (error) {
      console.log('Error in creating user', error);
    }
};

export default createUserDocument;