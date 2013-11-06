---
layout: share
title: Node.js - embeddable in-memory MongoDB instance for unit testing or Node.js mocking for MongoDB 
date: 2013-10-22
categories: [nodejs, javascript, sources, books]
---

# Node.js - embeddable in-memory MongoDB instance for unit testing or Node.js mocking for MongoDB 

Question by Paul Verest

We are doing unit tests for Node.js project. They depend on data that should be prepared every time test pack starts (depending on external environment like some db on other server is not good). The solution would be MongoDB instance with in-memory mode.

Possibly in the Future it will be implemented as MongoDB in-memory mode feature, but as of November 2013 it is [open issue 1153](https://jira.mongodb.org/browse/SERVER-1153)

The solution for Java was named in http://stackoverflow.com/questions/6437226/embedded-mongodb-when-running-integration-tests and there are [other ways mentioned](https://github.com/flapdoodle-oss/de.flapdoodle.embed.mongo#other-ways-to-use-embedded-mongodb)

**Is there Node.js mocking for MongoDB ?**

Related:

 - [Integration tests with MongoDB?](http://stackoverflow.com/questions/3859109/integration-tests-with-mongodb)
 - [Does Mongo DB have an In-Memory mode?](http://stackoverflow.com/questions/10005697/does-mongo-db-have-an-in-memory-mode)

Is similar to http://stackoverflow.com/questions/10378116/mock-test-mongodb-database-node-js but the question has several other questions asked.

