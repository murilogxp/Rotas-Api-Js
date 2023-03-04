import Router from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200);
  res.json({
    status: 200,
    mensagem: "API Rodando...",
  });
});

export default router;
