// STRETCH
const cars = [
    {
        vin: '2MRZA21215BJ19873',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3C3CFFAR1CT243601',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1FTYR44E03PB14145',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}