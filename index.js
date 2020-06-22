'use strict';
require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN);

// フローを実行
client.studio.flows(process.env.TWILIO_STUDIO_FLOW_SID)
    .executions.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to:  '発信先の番号をE.164フォーマットで設定', //発信先
        parameters : {
            "redeliverly_datetime" : new Date("2020/06/23 15:00:00").toLocaleString()
        } // 再配達日時をredeliverly_datetimeとしてFlowに渡す。
    })
    .then (flow => console.log(flow))
    .catch(err => console.log(err));