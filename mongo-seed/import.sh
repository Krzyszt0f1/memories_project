#! /bin/bash

mongoimport --host mongodb --db postmessages --collection postmessages --type json --file /mongo-seed/postMessages.json --jsonArray