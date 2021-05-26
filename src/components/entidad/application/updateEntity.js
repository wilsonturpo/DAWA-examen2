/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ EntityRepository }) => {
    return async ({ id, name, account }) => { // parameters
      const newEntity = {
        name: name,
        account: account
      }
      return EntityRepository.update(id, newEntity)
    }
  }
  