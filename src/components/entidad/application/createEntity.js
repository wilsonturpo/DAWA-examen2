/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ EntityRepository }) => {
    return async ({ name, account }) => { // parameters
      const newEntity = {
        name: name,
        account: account
      }
      return EntityRepository.add(newEntity)
    }
  }
  