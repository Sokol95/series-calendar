import { StackNavigator } from 'react-navigation';
import { StartPage, ShowDays, ShowImage } from './app/screens';


export default App = StackNavigator({
    StartPage: { screen: StartPage },
    ShowDays: { screen: ShowDays },
    ShowImage: { screen: ShowImage },
});
