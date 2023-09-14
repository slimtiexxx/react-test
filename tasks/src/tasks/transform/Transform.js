// Given the datasets from A and B
// Display the average value of all assets
// Plus list every asset's owner, name and value in a table

const dataFromA = [
  {
    name: 'John Wick',
    age: 35,
    assets: [
      {
        name: 'House',
        value: 450000
      },
      {
        name: 'Watch',
        value: 20000
      }
    ]
  }
]

const dataFromB = [
  {
    name: 'Jessica Alba',
    age: 29,
    assets: [
      {
        name: 'Villa',
        value: 150000
      },
      {
        name: 'Car',
        value: 50000
      }
    ]
  }
]

export const Transform = () => {
  return (
   <div className="container column">
     <div className="columns is-v-centered">
       <div className="column">
         <div className="has-background-primary has-text-white px-4 py-2">
           Average value of all assets: <strong>?</strong>
         </div>
       </div>
       <div className="column">
         <table className="table is-fullwidth">
           <thead>
           <tr>
             <th>Owner</th>
             <th>Asset name</th>
             <th>Asset value</th>
           </tr>
           </thead>
           <tbody>
             <tr>
               <td>?</td>
               <td>?</td>
               <td>?</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   </div>
  )
}