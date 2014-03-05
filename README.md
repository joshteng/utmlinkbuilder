# UtmLinkBuilder
### a UTM link builder and shortener for your marketing needs
Stack: node.js, sails.js, redis, mongoDB

Configuration
-----
Session store: redis
Database: mongoDB

To deploy
-----
1. Sign up for MongoHQ and note your DB_URL with the right username and password
2. Sign up for Redis (RedisToGo, etc+) and note your redis endpoint and password
1. Create a new heroku app "heroku create"
2. Push "git push heroku master"
3. Set environment variables: DB_URL, REDIS_ENDPOINT, REDIS_PASSWORD, ROOT_URL(your domain url with http:// or https://)
4. Enjoy! "heroku open"

To do
-----
1. add a session to person who clicked link
2. keep track of unique clicks and not just total clicks
3. generate unique link rather than use ID
4. Beautify the app
5. The links shown on index page is not specific to a user. It shows all the links available
6. Protect from mass assignment (userId field for Link, admin field for User)!
7. Write some test!
more...


Feature ideas
-----
1. allow multi user management of an account
2. CPA information for each campaign (Pull data through API from google adwords and facebook ads)(action here is click through, but can add sophisticated JS SDK that can be embedded on the destination site for specific goal tracking such as making a purchase, download an ebook, sign up etc+)
3. multi domain?


Fork fork fork
-----
1. Fork away and submit pull request!