/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ EntityRepository }) => {
    return async ({ id, name }) => { // parameters
      const newEntity = {
        name: name
      }
      return EntityRepository.update(id, newEntity)
    }
  }
  