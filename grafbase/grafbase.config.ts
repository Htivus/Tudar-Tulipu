import { g, auth, config } from "@grafbase/sdk";
//@ts-ignore
const User = g
  .model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    performs: g.relation((): any => Perform).optional(),
    posts: g.relation((): any => Post).optional(),
  })
  .auth((rules) => {
    rules.public().read();
  });
//@ts-ignore
const Perform = g
  .model("Perform", {
    score: g.int(),
    level: g.int(),
    streak: g.int(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

const Post = g
  .model("Post", {
    title: g.string(),
    description: g.string(),
    image: g.string(),
    date: g.string(),
    reference: g.string(),
    created: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

const jwt = auth.JWT({
  issuer: "grafbase",
  secret: process.env.NEXTAUTH_SECRET!,
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
