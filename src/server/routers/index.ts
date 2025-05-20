import { initTRPC } from '@trpc/server';
import { taskRouter } from './taskRouter';

const t = initTRPC.create();
export const appRouter = t.router({
  tasks: taskRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;