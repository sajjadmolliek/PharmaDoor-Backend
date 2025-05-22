import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AdminRoute } from '../modules/admin/admin.route';
import { PhermasistRoute } from '../modules/phermasist/phermasist.route';
import { LoginRouetr } from '../modules/auth/auth.route';
import { ProductRouter } from '../modules/student/student.route';

const router = Router();

const modulesRouter = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admin',
    route: AdminRoute,
  },
  {
    path: '/phermasist',
    route: PhermasistRoute,
  },
  {
    path: '/auth',
    route: LoginRouetr,
  },
  {
    path: '/product',
    route: ProductRouter,
  },
];

modulesRouter.forEach((route) => router.use(route.path, route.route));

export default router;
