import Card from './Card';

export default function Cards({characters}) {
   return (
      <div>
         {
            characters.map(({id,name,status,gender,species,image,origin})=>{
               return (
                  <Card
                      key={id}
                      id={id}
                      name={name}
                      status={status}
                      gender={gender}
                      species={species}
                      image={image}
                      origin={origin.name}
                      onClose={() => alert('Emulamos que se cierra la card')}
                  
                  
                  />
               )
            })
         }
      </div>
   )
}
