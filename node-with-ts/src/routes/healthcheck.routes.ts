import { Router } from "express";
import { HealthcheckController } from "../controllers/healthcheck.controllers.js";

const router = Router();

router.route("/").get(HealthcheckController);

export { router };
