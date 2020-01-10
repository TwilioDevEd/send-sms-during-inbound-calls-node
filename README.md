<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Send an SMS during a phone call. Powered by Twilio and Node/Express

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

Learn how to send an SMS to someone who's called your Twilio phone number while they're on the call.

This small sample application will say a short message to an inbound caller and, at the same time, send them an SMS.

[Read the full tutorial here!](https://www.twilio.com/docs/sms/tutorials/send-sms-during-phone-call-node)


## Local Development

This project is built using the [Express](https://expressjs.com/) web framework, Node v10, and the [Twilio Node Helper Library](https://www.twilio.com/docs/libraries/node).

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone https://github.com/TwilioDevEd/send-sms-during-inbound-calls-node.git
   $ cd send-sms-during-inbound-calls-node
   ```

1. Install the dependencies.

    ```bash
    $ npm install
    ```

1. Create an environment file (`.env`) and define your Twilio Account SID and Auth Token. Both of these can be found in your [Twilio console](https://www.twilio.com/console).

   ```bash
   export ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   export AUTH_TOKEN=your_auth_token
   ```

1. Load the created file into your environment.

    ```bash
    source .env
    ```

1. Start the server.

    ```bash
    $ node app.js
    ```

1. Expose the application to the wider Internet using [ngrok](https://ngrok.com/).

    ```bash
    $ ngrok http 8000 -host-header="localhost:8000"
    ```

1. Configure Twilio to call your webhooks

  You will need to configure Twilio to call your application when calls are
  received in your [*Twilio Number*](https://www.twilio.com/user/account/messaging/phone-numbers).
  The voice url should look something like this:

  ```
  https://<your-ngrok-subdomain>.ngrok.io/answer
  ```


## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
