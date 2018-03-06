# crud-nestjs-typescript

### Clone the project
```
git clone https://github.com/jRaphaDev/crud-nestjs-typescript.git
```

### Install all depencencies 
```
cd crud-nestjs-typescript
npm install
```

### Run the project
```
npm run start
```

## Methods and Curls

### FindAll
```
curl http://localhost:3000/users
```

### FindOne
```
curl http://localhost:3000/users/{id}
```

### Create
```
curl -d '{"id": 1, "name": "Raphael Freitas", "age": 27, "email": "dev.rapha@gmail.com"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users
```



### Enjoy :) 


