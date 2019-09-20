import Toast from './Toast';

const prefixCls = 'ume-message';
const prefixKey = 'ume_message_key_';

const defaults = {
    top: 100,
    duration: 1.5
};

let messageInstance;
let name = 1;

function getMessageInstance () {
    messageInstance = messageInstance || Toast.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: `${defaults.top}px`
        }
    });

    return messageInstance;
}

function notice (content = '', duration = defaults.duration, type, onClose = function () {}, closable = false, render = function () {}) {
    let instance = getMessageInstance();

    instance.notice({
        name: `${prefixKey}${name}`,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        content: `
            <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                <span>${content}</span>
            </div>
        `,
        render: render,
        onClose: onClose,
        closable: closable,
        type: 'message'
    });

    // 用于手动消除
    return (function () {
        let target = name++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
}

export default {
    name: 'Message',

    info (options) {
        return this.message('info', options);
    },
    message(type, options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, type, options.onClose, options.closable, options.render);
    },
    config (options) {
        if (options.top || options.top === 0) {
            defaults.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaults.duration = options.duration;
        }
    },
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy(prefixCls);
    }
};
