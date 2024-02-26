# Registry API

The tscircuit registry API is how you upload packages, download packages, search
for packages and more.

## Endpoints

| Endpoint                 | Description                  |
| ------------------------ | ---------------------------- |
| /packages/search         | Search for packages          |
| /packages/list           | List packages with a filter  |
| /packages/get            | Get a package by id or name  |
| /packages/create         | Create a new package         |
| /package_releases/list   | List package releases        |
| /package_releases/get    | Get a package release by id  |
| /package_releases/create | Create a new package release |
| /package_files/list      | List package files           |
| /package_files/get       | Get a package file by id     |
| /package_files/download  | Download a package file      |
| /package_files/create    | Create a new package file    |
| /package_examples/list   | List package examples        |
| /package_examples/get    | Get a package example by id  |
| /package_examples/create | Create a new package example |

## Authentication

You can use `tsci sessions create` to get a fresh access token for api usage.
