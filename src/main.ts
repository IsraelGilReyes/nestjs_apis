import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en DTO
    forbidNonWhitelisted: true, // Rechaza peticiones con propiedades no definidas
    transform: true, // Transforma automáticamente los tipos
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  
  // Habilitar CORS
  app.enableCors();
  
  // Puerto del servidor
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 API ejecutándose en: http://localhost:${port}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   - GET    /cats`);
  console.log(`   - GET    /cats/:id`);
  console.log(`   - POST   /cats`);
  console.log(`   - PATCH  /cats/:id`);
  console.log(`   - DELETE /cats/:id`);
  console.log(`   - GET    /birds`);
  console.log(`   - GET    /birds/:id`);
  console.log(`   - POST   /birds`);
  console.log(`   - PATCH  /birds/:id`);
  console.log(`   - DELETE /birds/:id`);
}
bootstrap();