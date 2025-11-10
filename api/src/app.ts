import express from "express";
import morgan from "morgan";
import cors from "cors";
import videosRoutes from "./routes/videos.routes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// configuración Swagger
const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Videos Eje 3 Desarrollo Web",
            version: "1.0.0",
            description: "Documentación de la API para gestionar videos",
        },
        servers: [{ url: "http://52.90.64.103:4000" }],
    },
    apis: ["./src/routes/*.ts"],
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 👉 Swagger primero
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 👉 Tus rutas
app.use(videosRoutes);

// 👉 Luego manejadores de error
app.use((req, res, next) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

export default app;
