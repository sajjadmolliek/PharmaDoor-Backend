import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const modulesRouter = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

modulesRouter.forEach((route) => router.use(route.path, route.route));

export default router;
