const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/1", component: () => import("pages/game/GameOnePage.vue") },
      { path: "/2", component: () => import("pages/game/GameTwoPage.vue") },
      { path: "/3", component: () => import("pages/game/GameThreePage.vue") },
      { path: "/4", component: () => import("pages/game/GameFourPage.vue") },
      { path: "/5", component: () => import("pages/game/GameFivePage.vue") },
      { path: "/6", component: () => import("pages/game/GameSixPage.vue") },
      { path: "/7", component: () => import("pages/game/GameSevenPage.vue") },
      { path: "/8", component: () => import("pages/game/GameEightPage.vue") },
      { path: "/9", component: () => import("pages/game/GameNinePage.vue") },
      { path: "/10", component: () => import("pages/game/GameTenPage.vue") },
      { path: "/end", component: () => import("pages/EndPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
