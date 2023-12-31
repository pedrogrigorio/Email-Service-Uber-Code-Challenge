<h1 align='center'>
    Email Service - Uber Code Challenge
</h1>

<h1 align="center">
    <img src="https://tm.ibxk.com.br/2018/09/13/13093103960002.jpg?ims=1200x675" alt='uber_logo'/>
</h1>

## 📕 About

This repo contains an email service application made with Java Spring and Angular for the [Uber code challenge](https://github.com/uber-archive/coding-challenge-tools/blob/master/coding_challenge.md). If you like it please give it a star :)

## 📕 Screenshots

<h1 align='center'>
  <img src="https://i.imgur.com/yIjDSwC.png" alt="app-screenshot" width="600"/>

  <img src="https://i.imgur.com/yhuTRBx.png" alt="email" width="600"/>
</h1>



## 🔧 Tools
- [Java](https://docs.oracle.com/en/java/)
- [Spring](https://spring.io/)
- [Angular](https://angular.io/)
- [AWS Simple Email Service (SES)](https://aws.amazon.com/ses/)

## 💻 Installation

First, you need to install the AWS CLI and configure your API credentials by running:

```bash
# Configure your AWS Simple Email Service API credentials
$ aws configure
```
Now, to run the application, run the following commands:

```bash
# Clone the repo and cd into it
$ git clone https://github.com/pedrogrigorio/Email-Service-Uber-Code-Challenge.git
$ cd Email-Service-Uber-Code-Challenge

# Run backend
$ cd email-service
$ mvn spring-boot:run

# Run frontend (in root folder)
$ cd frontend
$ npm run start
```

Note: The sender and recipient must be emails with verified identities in AWS SES.