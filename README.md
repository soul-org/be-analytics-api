# analytics-api

NodeJS Express server side REST API application. The service exposes following two API

## GET /api/stake

The staking validators API (`GET /api/stake`) is responsible for getting price staking node/validator information for all tokens. This API will rely on Staking Rewards API to get the details.

### response payload

```json
 [
 {
  "token": "MATIC",
  "validators": [{
   "address": "0x01",
   "commission": 5,
   "apy": 10
  }]
 },
 {
  "token": "AVAX",
  "validators": [{
   "address": "0x01",
   "commission": 5,
   "apy": 10
  }]
 }
];

```

## GET /api/stake/{token}

The stake validator API (`GET /api/stake/{token}`) is responsible get the staking node/validator information for a specific token identified by `token`.

### response payload

```json
{
  "token": "AVAX",
  "validators": [{
   "address": "0x01",
   "commission": 5,
   "apy": 10
  }]
 }
```

## technology

- NodeJs
- Typescript
- Express
- dotenv

## how to run

### development
>
> npm run dev

### production
>
> npm run

## configuration

> PORT=7000
