import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import myNavbar from '../../components/navbar/myNavbar';

const checkLoginStatus = () => {
  myNavbar.myNavbar();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#dinnterest').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#dinnterest').addClass('hide');
    }
  });
};

export default { checkLoginStatus };