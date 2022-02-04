# Simple Node.js Application for YugabyteDB

This application connects to your YugabyteDB instance via the 
[node-postgres](https://node-postgres.com) module and performs basic SQL 
operations. The instructions below are provided for [Yugabyte Cloud](https://cloud.yugabyte.com/) deployments. 
If you use a different type of deployment, then update the `sample-app.js` file with proper connection parameters.

## Prerequisite

* The latest version of Node.js
* Command line tool or your favourite IDE, such as Visual Studio Code.

## Start Yugabyte Cloud Cluster

* [Start YugabyteDB Cloud](https://docs.yugabyte.com/latest/yugabyte-cloud/cloud-quickstart/qs-add/) instance. You can use
the free tier at no cost.
* Add an IP address of your machine/laptop to the [IP allow list](https://docs.yugabyte.com/latest/yugabyte-cloud/cloud-secure-clusters/add-connections/#manage-ip-allow-lists)

## Clone Application Repository

Clone the repository and change dirs into it:

```bash
git clone https://github.com/yugabyte/yugabyte-simple-node-app && cd yugabyte-simple-node-app
```

## Provide Yugabyte Cloud Connection Parameters

Open the `sample-app.js` file and edit the following configuration parameters:
* `host` - the hostname of your Yugabyte Cloud instance.
* `port` - the port number of the instance (the default is `5433`).
* `user` - the username for your instance.
* `password` - the database password.
* `sslMode` - the SSL mode. Set to `verify-full` for Yugabyte Cloud deployments.
* `sslRootCert` - a full path to your CA root cert (for example, `/Users/dmagda/certificates/root.crt`) 

Note, you can easily find all the settings on the Yugabyte Cloud dashboard:

## Run the Application

1. Install the [node-postgres](https://node-postgres.com) driver:
    ```bash
    npm install pg
    ```
2. Install the [async utility](https://github.com/caolan/async):
    ```bash
    npm install --save async
    ```
3. Run the application:
    ```bash
    node sample-app.js
    ```

Upon successful execution, you will see output similar to the following:

```bash
>>>> Connecting to YugabyteDB!
>>>> Successfully connected to YugabyteDB!
...
```

## Explore Application Logic

Congrats! You've successfully executed a simple Node.js app that works with Yugabyte Cloud.

Now, explore the source code of `sample-app.js`: