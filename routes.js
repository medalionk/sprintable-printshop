import Home from './app/Home.react';
import JobsContainer from './containers/Jobs/JobsContainer'
import SettingsContainer from './containers/Settings/SettingsContainer'
import ServicesPage from './containers/Service/ServicesContainer'

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