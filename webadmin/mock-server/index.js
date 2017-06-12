// fake
const faker = require('faker')

let productId = 1
class FakeProdcut {
  constructor () {
    this.id = productId++
    let fc = faker.commerce
    this.name = fc.productName()
    this.color = fc.color()
    this.department = fc.department()
    this.price = fc.price()
    this.adjective = fc.productAdjective()
    this.material = fc.productMaterial()
    this.product = fc.product()
  }

  serialize () {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
      department: this.department,
      price: this.price,
      adjective: this.adjective,
      material: this.material,
      product: this.product
    }
  }
}

module.exports = function () {
  var data = { products: [], resources: [] }
  // Create 1000 Product
  data.products = generateFakeObject(FakeProdcut, 100)
  data.resources = [
    {
      "is_active": true,
      "updated_at": 1496372871160,
      "name": "组织机构",
      "description": null,
      "created_at": 1496372871160,
      "id": 81,
      "create_user": "admin",
      "key": "organizations",
      "updated_user": null,
      "available_operations": "c r u d"
    },
    {
      "is_active": true,
      "updated_at": 1496372920154,
      "name": "机器列表",
      "description": null,
      "created_at": 1496372920154,
      "id": 80,
      "create_user": "admin",
      "key": "serverHost_list",
      "updated_user": null,
      "available_operations": "c r u d"
    }
  ]
  return data
}

function generateFakeObject (TARGETCLASS = '', count = 10) {
  if (typeof TARGETCLASS !== 'function') {
    console.error('Not Function')
    return []
  }
  let result = []
  for (var i = 0; i < count; i++) {
    const fp = new TARGETCLASS()
    result.push(fp.serialize())
  }
  return result
}
