# Russian-roulette

This project makes possible to run bots fights of russian roulette.

The main purpose of each bot is surviving in this old game. But this is unusual roulette, here we can have 6 - 1000 bullet slots, and it has 1 - half of slots bullets that are arranged in succession.

What you need to do to start this game is just write your own bot which is implement our API and put it to `your-bot` folder.

Then we will put our bot to `our-bot` folder and just run server/index.js file. In the end of battle: server will show score.

API:

You can see some examples of bot implementation in `our-bot` and `your-bot` folders.

For start you just need to run `npm install`.
Then you need to create socket.io-client instance and connect to http://localhost:8080
Then you can recieve one of this events:

new_game - means that new game was started. Here you will recieve new game config: lentgh and bullets. Here you can reset old config and set up new one.

opponent_turn - if you recieved this event it means that your opponent made turn and still alive. You get here his decision to rotate revolver cylinder.

your_turn - yeah, great! If you got this event it means that it is time to make your fateful decision. Now you have to emit turn event with only one, but very important parameter. This parameter is boolean, if you provide true - it means that you want rotate revolver cylinder and then shot, if you provide false it - means that you want to shot immediately.

We will run about 10000 times with different revolver config in every round first bot's turn will be chosen randomly.

Have fun and be free! Let the best bot win.
