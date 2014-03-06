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
1. generate unique link rather than use ID
2. Protect from mass assignment (userId field for Link, admin field for User)!
3. Multi-user account. A user has many accounts. An account has many users. Follow Mailchimp's model.
4. Write some test!
5. more...


Feature ideas
-----
1. CPA information for each campaign (Pull data through API from google adwords and facebook ads)(action here is click through, but can add sophisticated JS SDK that can be embedded on the destination site for specific goal tracking such as making a purchase, download an ebook, sign up etc+)
3. multi domain


Fork fork fork
-----
1. Fork away and submit pull request!