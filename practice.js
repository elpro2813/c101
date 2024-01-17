const firebaseConfig = {
  apiKey: "AIzaSyD8buw4sodEeDCpIITXXpkdF9AxmasEpTw",
  authDomain: "kweeter-ba1ee.firebaseapp.com",
  databaseURL: "https://kweeter-ba1ee-default-rtdb.firebaseio.com",
  projectId: "kweeter-ba1ee",
  storageBucket: "kweeter-ba1ee.appspot.com",
  messagingSenderId: "485698049753",
  appId: "1:485698049753:web:9becbfe67bb82e5a3d50c8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


