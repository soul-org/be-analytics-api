# analytics-api

NodeJS Express server side REST API application. The service exposes following two API

## GET /api/city

The city index API (`GET /api/city`) is responsible for getting price information for all city indexes.

### response payload

```json
[
    {
        "name": "Paris",
        "price": 100
    },
    {
        "name": "New York",
        "price": 110
    }
]
```

## GET /api/city/{cityCode}

The City Index API (`GET /api/city/{cityCode}`) is responsible get the city index price information for a specific city identified by `cityCode`.

### response payload

```json
{
    "name": "Paris",
    "price": 100
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
