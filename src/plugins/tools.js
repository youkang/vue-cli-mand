/**
 * @package 公用方法
 * @author kong
 * @date 2020-03-11 15:00
 */

const tools = {
    //检测机型
    device() {
        var u = window.navigator.userAgent;
        var device = '';
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            //安卓手机
            device = 'Android';
        } else if (u.indexOf('iPhone') > -1) {
            //苹果手机
            device = 'iPhone'
        } else if (u.indexOf('Windows Phone') > -1) {
            //winphone手机
            device = 'WindowsPhone'
        }
        return device;
    },

    /**
     * H5 通知 APP
     * @param url 协议链接
     */
    webBridge(url){
        let device = this.device();
        if (device == 'Android' || device == 'WindowsPhone') {
            var iframe = document.createElement('iframe');
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
            setTimeout(function () {
                iframe.remove();
            }, 100)
        }
        if (device == 'iPhone') {
            window.location.href = url;
        }
    },
}

export default tools;