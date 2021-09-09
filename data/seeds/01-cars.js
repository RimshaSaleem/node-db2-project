// STRETCH
const cars =[
    {
        vin: '11111111111',
        make:'toyota',
        model:'prius',
        mileage:215000,
        title:'clean',
        transmissin:'manual',
    },
    {
        vin: '12111111111',
        make:'toyota',
        model:'corollas',
        mileage:115000,
        title:'clean',
        transmissin:'salvage',
    },
    {
        vin: '13111111111',
        make:'ford',
        model:'focus',
        mileage:115000,
        
    },
]
exports.seed =  async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}