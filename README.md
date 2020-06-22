# twilio-studio-flow-execution
このプロジェクトは下記の記事の動作を確認いただけるサンプルです。  　
- [Twilio StudioフローとNode.jsを用いて外部にメッセージを発信する方法](https://www.twilio.com/blog/twilio-studio-rest-api-jp)

## 前提条件

- Twilioアカウントを持っていること（[無料トライアルのサインアップ方法](https://www.twilio.com/blog/how-to-create-twilio-account-jp)）
- [SMSを利用できる電話番号を購入](https://support.twilio.com/hc/en-us/articles/360044841214-Twilio-%E3%83%95%E3%83%AA%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6#h_167b5625-0036-44e6-936f-108ed091cb80)していること

## 1. Twilio Studioフローの作成
[Twilio StudioフローとNode.jsを用いて外部にメッセージを発信する方法](https://www.twilio.com/blog/twilio-studio-rest-api-jp)の記事に沿ってStudioフローを作成し、`Studio Flow SID` (FWxxxxx）を控えておきます。

## 2. 必要パッケージのインストール
リポジトリをクローンし、パッケージをインストールしてください。
```bash
npm install
```

## 3. 環境変数の設定
`.env.sample`ファイルをコピーし、`.env`と名前を変更します。
このファイルには、次の変数が定義されています。それぞれ[Twilioコンソール](https://www.twilio.com/console)、[電話番号コンソール](https://www.twilio.com/console/phone-numbers/incoming)、そして先ほど控えた情報から設定します。

```bash
TWILIO_ACCOUNT_SID=<Account SIDの値>
TWILIO_AUTH_TOKEN=<Auth Tokenの値>
TWILIO_PHONE_NUMBER=<SMS発信が可能な電話番号>
TWILIO_STUDIO_FLOW_SID=<先ほど控えたFlow SIDの値>
```

## 4. 発信先番号の設定
index.jsを開き、`to:`に発信先の電話番号をE.164フォーマットで設定します。

```js
to:  '発信先の番号をE.164フォーマットで設定', //発信先
```

## 5. 実行
下記のコマンド実行し、Twilio Studioフローが実行されることを確認します。

```bash
node index.js
```

不明点があればぜひ、お問い合わせください。  
Twitter (@Neri78)  
Email: dikehara@twilio.com  
Twitch: https://twitch.tv/neri78