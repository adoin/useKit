import { createApp } from 'vue'
import App from './App.vue'
import UIKit from '@vue-ui-kit/ant';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@vue-ui-kit/ant/scss';
import './assets/entry.scss'
import { setupKit } from './setup/kit.tsx'

UIKit.addFormatter({ test: () => 'test' });
setupKit()
createApp(App).use(Antd).use(UIKit).mount('#app')
