import Home from './app/Home.react';
import JobsContainer from './containers'
import SettingsContainer from './containers'
import ServicesPage from './pages/Service'

export default {
    home: {
        title: 'Current Jobs',
        Page: Home,
    },
    jobs: {
        title: 'Current Jobs',
        Page: JobsContainer,
    },
    wip: {
        title: 'WIP',
        Page: ServicesPage,
    },
    settings: {
        title: 'Settings',
        Page: SettingsContainer,
    },
    services: {
        title: 'Services',
        Page: SettingsContainer,
    }
};