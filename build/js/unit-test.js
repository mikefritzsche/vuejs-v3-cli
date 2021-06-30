module.exports = function (componentName, appNameKebab) {
    return `import Vuex from 'vuex'
import sinon from 'sinon'
import { createLocalVue } from '@vue/test-utils'

import { Factory, Store } from '@utils/test-config/'

import ${componentName} from '@/apps/${appNameKebab}/${componentName}'
import MessagePanel from '@/components/MessagePanel.vue'
import { actions, mutations } from '@/store'

/** required global state props */
const GlobalState = () => {
    return {
        accountEntity: {
            agency_access: true,
            isNetwork: false
        },
        api: {},
        appsLoaded: true,
        appSelectorBlacklist: [],
        errors: [],
        glitterKoch: null,
        networkApps: [],
        selectedApp: '1',
        selectedAppObject: {
            'account_id': 1,
            'id': '1',
            'guid': 'kokochavabingodemo1347526e855c56f14',
            'package_code': 'com.kochava.bingodemo',
            'path': '/kochavabingodemo/',
            'registered': '2013-10-28T07:40:08Z',
            'updated': '2020-04-10T22:26:56Z',
            'session_tracking': 'full',
            'ibeacon_enabled': false,
            'deleted': false,
            'push_enabled': true,
            'sms_enabled': true,
            'app_universal_link_enabled': true,
            'fraud_blacklist': false,
            'dropped_dttm': null,
            'name': 'Kochava Bingo Demo',
            'platform': 'ios',
            'sku': '',
            'integration_type': 'native-ios',
            'facebook_app_id': '',
            'kochava_app_url': 'http://kochava.net',
            'app_store_id': '',
            'aws_region': '',
            'aws_bucket': '',
            'aws_access_key': '',
            'aws_secret_key': '',
            'request_time_pref': 'device',
            'overwrite_origination_ip': false,
            'use_short_version_string': false,
            'api_access_enabled': true,
            'currency_processing': true,
            'sdk_location_services_enabled': false,
            'geo_fence_limit': 0,
            'sdk_in_app_messaging_enabled': false,
            'disregard_organic_events': false,
            'whatif_parent': 0,
            'use_install_referrer_begin_time': false,
            'consent_region': 'none',
            'consent_prompt_retry_interval': 1814400,
            'consent_prompt_id': '',
            'consent_partners': [
            { 'name': 'GrowMobile' }, { 'name': 'Drawbridge' }, { 'name': 'Convertro' }, { 'name': 'Omniata' }, { 'name': 'Tapad' }, { 'name': 'Admobsphere' }, { 'name': 'Acuity Ads' }, { 'name': 'Adxmi' }, { 'name': 'Disney' }, { 'name': 'OpenX' }, { 'name': 'Fetch Performance' }, { 'name': 'TheBluMarket' }, { 'name': 'Baidu' }, { 'name': 'BlueKai' }, { 'name': 'Runscope' }, { 'name': 'Oath Ad Platforms' }, { 'name': 'LeadBolt' }, { 'name': 'Sojern' }, { 'name': 'AdColony' }, { 'name': 'JumpTap' }, { 'name': 'AdMob' }, { 'name': 'Digital Turbine' }, { 'name': 'Chartboost' }, { 'name': 'RadiumOne' }, { 'name': 'Aarki' }, { 'name': 'Applovin' }, { 'name': 'Motive Interactive' }, { 'name': 'Liquid Wireless' }, { 'name': 'Facebook' }, { 'name': 'Cheetah Mobile' }, { 'name': 'Adelphic' }, { 'name': 'Google AdWords' }, { 'name': 'Uber Media' }, { 'name': 'Criteo' }, { 'name': 'GuppyGames' }, { 'name': 'MdotM' }, { 'name': 'AppTurbo' }, { 'name': 'CrossInstall' }, { 'name': 'TapSense' }, { 'name': 'Taptica' }, { 'name': 'Jampp' }, { 'name': 'Altrooz' }, { 'name': 'HeyZap' }, { 'name': 'Nanigans' }, { 'name': 'Bidalgo' }, { 'name': 'IronSource' }, { 'name': 'NativeX' }, { 'name': 'Playhaven' }, { 'name': 'Fyber' }, { 'name': 'Adxperience' }, { 'name': 'InMobi' }, { 'name': 'StrikeAd' }, { 'name': 'AppNext' }, { 'name': 'mMedia' }, { 'name': 'WeQ' }, { 'name': 'SessionM' }, { 'name': 'TapJoy' }, { 'name': 'AppFlood' }, { 'name': 'UnityAds' }, { 'name': 'MisterBell' }, { 'name': 'Adperio' }, { 'name': 'ClicksMob' }, { 'name': 'YeahMobi' }, { 'name': 'BuySellAds' }, { 'name': 'Raftika' }, { 'name': 'Blind Ferret Incent' }, { 'name': 'Mozoo' }, { 'name': 'MyLikes' }, { 'name': 'Appsfire' }, { 'name': 'Adxcel' }, { 'name': 'URX' }, { 'name': 'AdAction' }, { 'name': 'Vungle' }, { 'name': 'Tango' }, { 'name': 'Commission Junction' }, { 'name': 'Blue Track Media' }, { 'name': 'Dstillery' }, { 'name': 'i-mobile' }, { 'name': 'MundoMedia' }, { 'name': 'Rocket Fuel' }, { 'name': '4th Screen' }, { 'name': 'AppLoop' }, { 'name': 'Adbrain' }, { 'name': 'MediaBrix' }, { 'name': 'AdFalcon' }, { 'name': 'Kixer' }, { 'name': 'Kenshoo' }, { 'name': 'AppDriver' }, { 'name': 'AppLift' }, { 'name': 'Mixpanel' }, { 'name': 'AppTap' }, { 'name': 'Webpals Mobile' }, { 'name': 'AdLantis' }, { 'name': 'iAd' }, { 'name': 'Appkeyz' }, { 'name': 'AirPush' }, { 'name': 'Kiip' }, { 'name': 'Tremor Video' }, { 'name': 'CAMad' }, { 'name': 'Freakout' }, { 'name': 'Liftoff' }, { 'name': 'Amobee' }, { 'name': 'StartApp' }, { 'name': 'TNK' }, { 'name': 'Twitter' }, { 'name': 'Mobvista' }, { 'name': 'braze' }, { 'name': 'mParticle' }, { 'name': 'Maist' }, { 'name': 'DataXu' }, { 'name': 'FullSail' }, { 'name': 'MediaMath' }, { 'name': 'Localytics' }, { 'name': 'Cauly' }, { 'name': 'Adwo' }, { 'name': 'Youtube' }, { 'name': '360 Dialog' }, { 'name': 'Income Access' }, { 'name': '3px Media' }, { 'name': 'Septeni' }, { 'name': 'BlackBerry' }, { 'name': 'Remerge' }, { 'name': 'MEX' }, { 'name': 'Drippler' }, { 'name': 'A1 Social' }, { 'name': 'Mobilewalla' }, { 'name': 'Clear Link Media' }, { 'name': 'AppJolt' }, { 'name': 'Ad Attraction' }, { 'name': 'DoMob' }, { 'name': 'AppThis' }, { 'name': 'Adobe' }, { 'name': 'AppVador' }, { 'name': 'Mobils' }, { 'name': 'Smadex' }, { 'name': 'Appbooster' }, { 'name': 'Centro/Sitescout (legacy)' }, { 'name': 'Ad@m' }, { 'name': 'Kochava Soltest' }, { 'name': 'Mezzomedia Ad Network' }, { 'name': 'LogicAd' }, { 'name': 'GameAnalytics' }, { 'name': 'ExoClick' }, { 'name': 'The Trade Desk' }, { 'name': 'Ampush' }, { 'name': 'Adquant' }, { 'name': 'Krux' }, { 'name': 'Social Wire' }, { 'name': 'SMARTLY' }, { 'name': 'Circuit' }, { 'name': 'Onnuri DMC' }, { 'name': 'ADpool' }, { 'name': 'Eeaf' }, { 'name': 'Appang' }, { 'name': 'appAlgo' }, { 'name': 'Webisaba' }, { 'name': 'YTZ' }, { 'name': 'Tersertude' }, { 'name': 'Adcamie' }, { 'name': 'DDM' }, { 'name': 'PolymorphicAds' }, { 'name': 'Marin Labs' }, { 'name': 'Forensiq' }, { 'name': 'Babanetwork' }, { 'name': 'AppMedia' }, { 'name': 'msales' }, { 'name': 'Adobe Advertising Cloud CI' }, { 'name': 'Pinterest' }, { 'name': 'Branch.io' }, { 'name': 'Adsota' }, { 'name': 'DotJam' }, { 'name': 'AdAction Analytics' }, { 'name': 'Go2Mobi' }, { 'name': 'FreeMyCard' }, { 'name': 'Adbert' }, { 'name': 'Spotify' }, { 'name': 'ByteDance Global' }, { 'name': 'MobiConnect' }, { 'name': 'PeakAdX' }, { 'name': 'CooTek Ads' }, { 'name': 'myThings' }, { 'name': 'Ad Clutch' }, { 'name': 'LoopMe' }, { 'name': 'LeanPlum' }, { 'name': 'AdKnowledge' }, { 'name': 'Adkaora' }, { 'name': 'NoxMobi' }, { 'name': 'ADinsight' }, { 'name': 'Kochava' }
            ],
            'context': null,
            'revenue_events': ['_SessionEnd', 'Add to Cart', 'add_to_cart', 'APP_STARTS', 'Buy Coins', 'click_coda_payment', 'COINSTORE_VISIT', 'connected_shopify', 'CONTENT_VIEWS', 'conversion', 'conversion_test', 'Cost_Purchase', 'Hotel Booking', 'In Game Purchase', 'IN_APP_PURCHASE', 'IN_APP_PURCHASE2', 'IN_GAME_PURCHASE', 'InAppPurchase', 'landing page', 'Level Complete', 'LEVEL_10', 'login_complete1', 'order', 'Purchase', 'registration', 'Store Shopping', 'VODview_S4Ep3', 'web_purchase', 'z test', 'Purchase']
        },
        userPrivileges: {},
        userPrivilegesReady: true
    }
}

/** required state modules */
const StateModules = () => {
    return {}
}

describe('${componentName}.vue', () => {
    let localState
    let localStateModules
    let mocks
    let stubs
    let localVue
    let localGetters
    
    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)
        localState = new GlobalState()
        localGetters = {
            appReady: () => true
        }
        const $route = {
            name: '',
            params: { id: '' },
            meta: {
            app: '1'
            },
            query: {}
        }
        mocks = {
            $route
        }
        stubs = {
            MessagePanel,
            // RouterLink: '<div></div>',
            // SelectVue: '<div></div>',
            // Spinner: '<div></div>'
        }
        localStateModules = new StateModules()
    })
    it('Smoke test', () => {
        let store = {
            state: localState,
            actions,
            mutations,
            getters: localGetters,
            modules: localStateModules
        }
        const vuexStore = new Vuex.Store(store)
        
        let mountingOptions = {
            store: vuexStore,
            localVue,
            methods: {},
            mocks,
            stubs
        }
        const wrapper = new Factory(${componentName}, 'shallow', mountingOptions)
    })
})
`
}