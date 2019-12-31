<template>
    <view class="root pl-60 pr-60 height-100vh">
        <view class="footer jc-sb fd-row mb-90 ai-center">
            <view v-if="isSignIn" class="fd-row fs-30 fw-500">
                <text class="color-666">还没有账号？</text>
                <text @click="todo(false)" class="color-2d6dcc">去创建</text>
            </view>
            <image
                v-else
                @click="todo(true)"
                class="logo-step"
                src="/static/imgs/logo-previous.png"
            />
            <image class="logo-step" src="/static/imgs/logo-next.png" />
        </view>

        <view class="main mr-40 mt-100 f1">
            <view class="input-container pb-36 jc-sa">
                <view v-for="(item, index) in inputLists" :key="index">
                    <text class="fs-30 fw-500">{{ item.title }}</text>
                    <input
                        :type="item.type"
                        class="input height-70 mt-10 fs-30 color-2e"
                        placeholder-class="fs-30"
                        :placeholder="item.placeholder"
                    />
                    <text
                        v-if="item.forgetPassword"
                        class="fs-30 color-2e mt-24 text-right mr-6"
                    >忘记密码</text>
                </view>
            </view>
            <view class="header mb-88">
                <image class="logo-index" src="/static/imgs/logo-index.png" />
                <text class="color-01 fs-66 fw-700 mt-58">智慧养老</text>
                <text class="color-01 fs-32 mt-26">青湖御园</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                isSignIn: true
            };
        },
        computed: {
            inputLists() {
                if (this.isSignIn) {
                    return [
                        {
                            title: "手机号",
                            type: "number",
                            maxlength: "11",
                            placeholder: "请输入手机号码"
                        },
                        {
                            title: "密码",
                            type: "password",
                            maxlength: "16",
                            placeholder: "请输入您的密码",
                            forgetPassword: true
                        }
                    ];
                } else {
                    return [
                        {
                            title: "手机号",
                            type: "number",
                            maxlength: "11",
                            placeholder: "请输入手机号码"
                        },
                        {
                            title: "密码",
                            type: "password",
                            maxlength: "16",
                            placeholder: "请输入您的密码"
                        },
                        {
                            title: "密码",
                            type: "password",
                            maxlength: "16",
                            placeholder: "请输入您的密码"
                        }
                    ];
                }
            }
        },
        methods: {
            todo(isSignIn) {
                this.isSignIn = isSignIn;
            }
        }
    };
</script>

<style>
    .root,
    .main {
        flex-direction: column-reverse;
    }

    .logo-index {
        width: 210rpx;
        height: 230rpx;
    }

    .input {
        box-sizing: content-box;
        border-bottom: 1px solid #373737;
    }

    .logo-step {
        width: 160rpx;
        height: 160rpx;
    }

    .input-container {
        height: 550rpx;
    }
</style>