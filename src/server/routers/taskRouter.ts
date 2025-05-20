import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import * as db from '../db';

const t = initTRPC.create();
const procedure = t.procedure;

// Define the Task schema
const TaskSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().optional(),
  createdAt: z.date().optional(),
  completed: z.boolean().optional(),
});

export const taskRouter = t.router({
  getAll: procedure.query(() => {
    return db.getTasks();
  }),
  create: procedure
    .input(TaskSchema.omit({ id: true, createdAt: true }))
    .mutation(({ input }) => {
      return db.createTask(input.title, input.description ?? '');
    }),
  update: procedure
    .input(TaskSchema.omit({ createdAt: true }))
    .mutation(({ input }) => {
      const updatedTask = db.updateTask(input);
      if (!updatedTask) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Tarefa não encontrada',
        });
      }
      return updatedTask;
    }),
  delete: procedure
    .input(z.number())
    .mutation(({ input }) => {
      const success = db.deleteTask(input);
      if (!success) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Tarefa não encontrada',
        });
      }
      return { success: true };
    }),
});