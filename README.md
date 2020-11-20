# Divritenis.lv frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/6da92432-c7e6-4d6f-9cf0-fa8415e310bb/deploy-status)](https://app.netlify.com/sites/divritenis/deploys)
[![Maintainability](https://api.codeclimate.com/v1/badges/19f9741c46d441a1dacc/maintainability)](https://codeclimate.com/github/minajevs/divritenis.lv/maintainability)

This repository contains all the frontpage code for the _new_ [divritenis.lv](http://divritenis.lv/) website.

Demo: https://divritenis.netlify.app/

## About

This is a fresh redesign and complete overhaul of "Latvian Cyclists' Union" website.

Frontend is a [Jamstack](https://jamstack.org/) application, built with Gatsby, React, Bulma and other cool modern web technologies and hosted on [Netlify](https://www.netlify.com/). Project builds on Gatsby Cloud.

Data is sourced from WordPress backend, which is used as a headless CMS.

## Develop locally

To run this application locally:

1. Clone this repo
2. Create `.env` file using contents from `.env-template`

- If you have Google reCAPTCHA key change `GATSBY_RECAPTCHA_SITE_KEY` value from `template` to the key, otherwise leave it as is
- Change `GATSBY_WP_URL` value from `template` to WordPress URL of the backend. You can use staging url `https://divritenis-staging.dexie.me`

3. Run `npm install`

Now you can run `npm start` as usual to run Gatsby dev server. Gatsby will automatically fetch WordPress data, build GraphQL typings for TypeScript and will run type-checks as you write code.

## Contributors

This website is developed on a non-profit basis with a main goal of popularizing cycling in Latvia. People who contribute to this project:

- https://github.com/minajevs
- https://github.com/evazuka
