import { Navigation } from 'react-native-navigation';

import OpenJobsPage from './OpenJobs'
import SettingsPage from './Settings'
import ProfilePage from './Profile'

export default function () {
    Navigation.registerComponent('OpenJobsPage', () => OpenJobsPage);
    Navigation.registerComponent('SettingsPage', () => SettingsPage);
    Navigation.registerComponent('ProfilePage', () => ProfilePage);
}