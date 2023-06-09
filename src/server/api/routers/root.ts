import { todoRouter } from "@/server/api/routers/subRouters/todoRouter";
import { createTRPCRouter } from "@/server/api/trpc";
import { channelRouter } from "./subRouters/channelRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  todoRouter: todoRouter,
  channelRouter: channelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
