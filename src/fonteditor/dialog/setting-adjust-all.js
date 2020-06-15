/**
 * @file 设置所有字体上下、左右偏移
 * @author mengke01(kekee000@gmail.com)
 */

import i18n from '../i18n/i18n';
import setting from './setting';

export default setting.derive({

    title: i18n.lang.dialog_adjust_all,

    style: 'setting-adjust-all',

    getTpl() {
        return require('../template/dialog/setting-adjust-all.tpl');
    },

    set(setting) {
        this.setFields(setting);
    },
    
    validate() {
        let setting = this.getFields();

        return setting;
    }
});
