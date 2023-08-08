const { add, err, promiseTest, arr, app } = require('../index')
const superTest = require('supertest')

test('toBe', () => {
    expect(add(1,2)).toBe(3)
})

test('toBeDefined', () => {
    expect(add(1,2)).toBeDefined()
})


test('toBeNull', () => {
    expect(add(1,2)).not.toBeNull()
})

test('toBeGreaterThan', () => {
    expect(add(1,2)).toBeGreaterThan(1)
})

test('toMatch', () => {
    expect(add('Hello','World')).toMatch(/Hello/)
})
// test('toBeCloseTo', () => {
//     expect(add(1.1111,2.44444)).toBeCloseTo(3.60000)
// })

//toBeTruthy, toBeFalsy, toBeNull, toBeLessThanOrEqual

test('toThrow', () => {
    expect(()=>err()).toThrow('I am new Error')
})
describe('I am block',() => {
    test('I am executing in a block', () => {
        expect(() => err()).toThrow('I am new Error')
    })
    test('toThrow',()=>{
        expect(()=>err()).toThrow('I am new Error')
    })
})

// test('promiseTest old way', ()=> {
//    promiseTest(1,2)
//    .then(data => {
//      expect(data).toBe('+ve')
//    }).catch(e => {
//      expect(e).toBe('-ve')
//    })

   
// })

// test('PromiseTest easy way', () => {
//     expect(promiseTest(2,1)).resolves.toBe('+ve')
// })


// test('PromiseTest easy way', () => {
//     expect(promiseTest(1,2)).rejects.toBe('-ve')
// })


test('toContain', () => {
    expect(arr()).toContain('Bat')
})

test('testAPI', async () => {
    await superTest(app)
    .get('/users')
    .expect(200)
    .then(result => {
        expect(result && result.body && typeof result.body.users === 'object')
    })
})



