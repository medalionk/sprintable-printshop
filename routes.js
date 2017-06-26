import Home from './app/Home.react';
import OpenJobsPage from './pages/OpenJobs'
import SettingsPage from './pages/Settings'
import ServicesPage from './pages/Service'

export default {
    home: {
        title: 'Current Jobs',
        Page: Home,
    },
    jobs: {
        title: 'Current Jobs',
        Page: OpenJobsPage,
    },
    wip: {
        title: 'WIP',
        Page: ServicesPage,
    },
    settings: {
        title: 'Settings',
        Page: SettingsPage,
    },
    services: {
        title: 'Services',
        Page: ServicesPage,
    }
};