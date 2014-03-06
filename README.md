# UtmLinkBuilder
### a UTM link builder and shortener for your marketing needs
1. Create links like this easily: `http://mywebsite.com/?utm_campaign=sunday-offer&utm_source=facebook&utm_medium=cpc`
2. Shorten that long ugly UTM link for sharing `http://yoururlshortenerdomain/r/fwefubo443` *(buy a short domain to host this app)*
3. Track performance of each link with total clicks and unique clicks

Stack: node.js, sails.js, redis, mongoDB

Default Configuration:
-----
Session store: redis  
Database: mongoDB

To deploy
-----
1. Sign up for MongoHQ and note your DB_URL with the right username and password
2. Sign up for Redis (RedisToGo, etc+) and note your redis endpoint and password and port
1. Create a new heroku app `heroku create`
2. Push `git push heroku master`
3. Set environment variables: DB_URL, REDIS_ENDPOINT, REDIS_PASSWORD, ROOT_URL (your domain along with http:// or https:// for eg. `http://utm.io`)
4. Enjoy! `heroku open`

Details
-----
Your MongoDB URL should look like this: `mongodb://<username>:<password>@troup.mongohq.com:10081/<db_name>`


To do
-----
1. Generate unique link rather than use database generated ID (allow for shorter, less scammy links)
2. Protect from mass assignment (userId field for Link, admin field for User)!
3. Multi-user account. A user has many accounts. An account has many users. Follow Mailchimp's model.
4. Write some test!
5. more...


Feature ideas
-----
1. CPA information for each campaign (Pull data through API from google adwords and facebook ads)(action here is click through, but can add sophisticated JS SDK that can be embedded on the destination site for specific goal tracking such as making a purchase, download an ebook, sign up etc+)
3. multi domain


Help Needed! Fork!
-----
1. If you're a developer, please fork away, help me out with the todos and submit pull request! Or do a code review, raise issues and leave comments. Thanks!
2. If you're a marketer, you may leave ideas by raising issues.
3. If you growth hack, this might be thoroughly useful, would really appreciate input, feedback and contribution!