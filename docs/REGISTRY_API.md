# Registry API

The tscircuit registry API is how you upload packages, download packages, search
for packages and more.

## Endpoints

| Endpoint                              | Description                  |
| ------------------------------------- | ---------------------------- |
| /registry-api/packages/search         | Search for packages          |
| /registry-api/packages/list           | List packages with a filter  |
| /registry-api/packages/get            | Get a package by id or name  |
| /registry-api/packages/create         | Create a new package         |
| /registry-api/package_releases/list   | List package releases        |
| /registry-api/package_releases/get    | Get a package release by id  |
| /registry-api/package_releases/create | Create a new package release |
| /registry-api/package_files/list      | List package files           |
| /registry-api/package_files/get       | Get a package file by id     |
| /registry-api/package_files/download  | Download a package file      |
| /registry-api/package_files/create    | Create a new package file    |
| /registry-api/package_examples/list   | List package examples        |
| /registry-api/package_examples/get    | Get a package example by id  |
| /registry-api/package_examples/create | Create a new package example |

## Authentication

You can use `tsci sessions create` to get a fresh access token for api usage.
