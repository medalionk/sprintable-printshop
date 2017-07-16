import HomeView from '../containers/Home/HomeViewContainer';
import JobsView from '../containers/Jobs/JobsViewContainer'
import SettingsView from '../containers/Settings/SettingsViewContainer'
import ServicesView from '../containers/Service/ServicesViewContainer'
import WipView from '../containers/WIP/WIPViewContainer'
import DummyView from '../containers/Dummy/DummyViewContainer'

export default {
    home: {
        title: 'Jobs',
        Page: HomeView,
        Icon:"lorem",
    },
    jobs: {
        title: 'Jobs',
        Page: JobsView,
        Icon:"view-list",
    },
    wip: {
        title: 'WIP',
        Page: WipView,
        Icon:"today",
    },
    settings: {
        title: 'Settings',
        Page: SettingsView,
        Icon:"settings",
    },
    services: {
        title: 'Services',
        Page: SettingsView,
        Icon:"lorem",
    },
    dummy: {
        title: 'Dummy',
        Page: DummyView,
        Icon:"mood",
    },
};