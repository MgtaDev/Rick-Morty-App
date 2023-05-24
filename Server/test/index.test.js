const app = require('../src/app');
const session = require('supertest');
const request = session(app);
const character = {
    id: 626,
    name: 'jp',
    species: 'human',
    gender: 'male',
    status: 'alive',
    origin: { name: 'earth' },
    image: '../../Client/assets/DevPic.jpg'
}


describe("Test de RUTAS", () => {

    describe('GET /rickandmorty/character/:id', () => {
        
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
        
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.body).toHaveProperty('id')
            expect(response.body).toHaveProperty('name')
            expect(response.body).toHaveProperty('species')
            expect(response.body).toHaveProperty('gender')
            expect(response.body).toHaveProperty('status')
            expect(response.body).toHaveProperty('origin')
            expect(response.body).toHaveProperty('image')
        })
    
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/234hj');
            expect(response.statusCode).toBe(500);
        })
    })
    
    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad acces en true si la información es correcta", async () => {
            const response = await request.get('/rickandmorty/login?email=kokmora50@hotmail.com&password=Henry1');
            const access = {access:true}
            expect(response.body).toEqual(access)
    
        })
        it("Responde con un objeto con la propiedad acces en flase si la información es incorrecta", async () => {
            const response = await request.get('/rickandmorty/login?email=kokmora50df@hotmail.com&password=Henr45y1');
            const access = {access:false}
            expect(response.body).toEqual(access)
    
        })
    });

    describe("POST /rickandmorty/fav", () => {
         it("Debe guardar el personaje en favoritos", async () => {
            
            const response = await request.post('/rickandmorty/fav').send(character);

            expect(response.body).toContainEqual(character)

         })
         it('Debe agregar personajes sin borrar los existentes', async () => {
            character.id = 1234
            character.name = 'Pedro'
            const response = await request.post('/rickandmorty/fav').send(character)
            expect(response.body.length).toBe(2)
         })
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it('si el ID solicitado no existe, retornar un arreglo con todos los favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/2345g')
            expect(response.body.length).toBe(2)
        })
        it('si el ID seleccionado existe debería eliminarlo de favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/626')
            expect(response.body.length).toBe(1)
        })
    })

});
