"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
        allowedHeaders: [
            'Accept',
            'Authorization',
            'Content-Type',
            'X-Requested-With',
            'apollo-require-preflight',
        ],
    });
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map