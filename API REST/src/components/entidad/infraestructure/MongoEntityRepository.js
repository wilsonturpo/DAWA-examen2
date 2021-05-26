const MongoLib = require('../../../lib/mongo')

class MongoContactsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'entidad'
    this.mongoDB = new MongoLib()
  }

  async add (entity) {
    const _id = await this.mongoDB.create(this.collection, entity)
    return { _id, ...entity }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async update (id, entity) {
    return this.mongoDB.update(this.collection, id, entity)
  }

  async delete (id) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById (id) {
    //  return await this.mongoDB.get(this.collection, null, { id })
    return await this.mongoDB.get(this.collection, id, null)
  }

  async getDocumentInfo () {
    return await this.mongoDB.getInfo(this.collection)
  }
}

module.exports = MongoContactsRepository
