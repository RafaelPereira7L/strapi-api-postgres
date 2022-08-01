export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1421c259c5bea8c29af1b5150b5393e1'),
  },
});
