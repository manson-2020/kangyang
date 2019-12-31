global.REQUEST_URL = "http://xj.shdong.cn";

global.apiRequest = (url, params = {}) => {
    params.url = REQUEST_URL + url;
    params.method = params.method || "POST";
    params.data = params.data || {};
    params.data.token = uni.getStorageSync("token") || ""
    params.fail = res => uni.showToast({
        title: "服务器异常",
        icon: "none",
        complete: _ => console.log(res)
    });

    uni.request({ ...params });
};