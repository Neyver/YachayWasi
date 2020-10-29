import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../views/Home';
import HomeTeacher from '../views/HomeTeacher';
import Profile from '../views/Profile';
import EmailAndPassword from '../components/EmailAndPassword';


const views = {
    Home:{
        screen: Home
    },
    EmailAndPassword:{
        screen: EmailAndPassword
    },
    
}

const HomeStack = createStackNavigator(views);

export default createAppContainer(HomeStack);