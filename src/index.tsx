import dva from 'dva';
import createLoading from 'dva-loading';
import example from './models/example';
import Router from './router/Index';
import './index.css';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(example);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');

serviceWorker.unregister();
