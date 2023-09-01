import { db } from "@/lib/db";

const amount = async () => {
  const amount = await db.amount.findMany({});
//    const create = await db.amount.create({
//     data:{
//         amount:'200'
//     }
//   })

  console.log(amount);
  

  return amount;
};

export default amount;
