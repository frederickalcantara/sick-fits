const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  // async items(parent, args, ctx, info) {
  //   const items = await db.query.items();

  //   return items;
  // },
};

module.exports = Query;
// Add import db functionality
