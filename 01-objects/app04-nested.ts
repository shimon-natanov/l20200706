export { }
// Javascript 
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   } 

const product : {
    id: string,
    price: number,
    tags: string[],
    details: {
      title: string,
      description: string
    }
  } = {id : 'aaa' , price: 12.99 , tags: [] , details: { title: 'lala' , description: 'hoo ha'}}
