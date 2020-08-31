This repository was created to reproduce a bug with next-auth described in this [issue](https://github.com/nextauthjs/next-auth/issues/625)

It should be noted that this example uses my forked version of next-auth which adds the Bungie provider.
This fork should have no effect on the issue at play here and was only used for efficiencies sake as I am using it in my own project.


Running
-------

This was written using PostgreSQL as the target database, as such some code changes will be required if using another database solution, sorry about that

Generate certificates as shown [here](https://next-auth.js.org/providers/apple#example-server)

* copy .example.env to .env and fill in the values
* yarn install
* node server.js
